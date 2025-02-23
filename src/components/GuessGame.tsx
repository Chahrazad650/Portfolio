import React, { useState } from 'react';

export function GuessGame() {
  const [players, setPlayers] = useState<Array<{name: string; score: number}>>([]);
  const [numPlayers, setNumPlayers] = useState('');
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [hiddenNumber, setHiddenNumber] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [currentPlayerName, setCurrentPlayerName] = useState('');

  const startGame = () => {
    if (players.length === 0) {
      setMessage('Veuillez d\'abord ajouter des joueurs');
      return;
    }
    setHiddenNumber(Math.floor(Math.random() * 100) + 1);
    setGameStarted(true);
    setGameOver(false);
    setCurrentPlayerIndex(0);
    setMessage('');
    setGuess('');
  };

  const addPlayer = () => {
    if (!currentPlayerName.trim()) {
      setMessage('Veuillez entrer un nom de joueur');
      return;
    }
    setPlayers([...players, { name: currentPlayerName, score: 0 }]);
    setCurrentPlayerName('');
    setMessage(`${currentPlayerName} a été ajouté !`);
  };

  const handleGuess = () => {
    const guessNumber = parseInt(guess);
    if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
      setMessage('Veuillez entrer un nombre valide entre 1 et 100');
      return;
    }

    if (guessNumber === hiddenNumber) {
      const newPlayers = [...players];
      newPlayers[currentPlayerIndex].score += 1;
      setPlayers(newPlayers);
      setMessage(`🎉 Bravo ${players[currentPlayerIndex].name} ! Le nombre était ${hiddenNumber} !`);
      setGameOver(true);
    } else if (guessNumber > hiddenNumber) {
      setMessage('📉 Trop haut !');
      setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
    } else {
      setMessage('📈 Trop bas !');
      setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
    }
    setGuess('');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg space-y-6">
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-bold text-gray-800">🎮 Jeu de Devinettes</h3>
        {message && (
          <div className="p-4 bg-blue-50 text-blue-700 rounded-lg">
            {message}
          </div>
        )}
      </div>

      {!gameStarted ? (
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Ajouter un joueur
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={currentPlayerName}
                onChange={(e) => setCurrentPlayerName(e.target.value)}
                className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Nom du joueur"
              />
              <button
                onClick={addPlayer}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Ajouter
              </button>
            </div>
          </div>

          {players.length > 0 && (
            <>
              <div className="mt-4">
                <h4 className="font-medium mb-2">Joueurs :</h4>
                <div className="space-y-2">
                  {players.map((player, index) => (
                    <div key={index} className="p-2 bg-gray-50 rounded-lg">
                      {player.name}
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={startGame}
                className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Commencer la partie
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {!gameOver ? (
            <>
              <p className="text-lg font-medium text-center">
                C'est au tour de <span className="text-blue-600">{players[currentPlayerIndex].name}</span>
              </p>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Devine le nombre (entre 1 et 100)
                </label>
                <input
                  type="number"
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  min="1"
                  max="100"
                />
                <button
                  onClick={handleGuess}
                  className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Deviner
                </button>
              </div>
            </>
          ) : (
            <button
              onClick={startGame}
              className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Nouvelle partie
            </button>
          )}

          <div className="mt-6">
            <h4 className="font-medium mb-2">📊 Scores :</h4>
            <div className="space-y-2">
              {players.map((player, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg flex justify-between ${
                    index === currentPlayerIndex && !gameOver
                      ? 'bg-blue-50 border border-blue-200'
                      : 'bg-gray-50'
                  }`}
                >
                  <span>{player.name}</span>
                  <span className="font-medium">{player.score} point{player.score !== 1 ? 's' : ''}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}