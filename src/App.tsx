import React, { useState } from 'react';
import { Download, Mail, Phone, Github, Linkedin, GraduationCap, BookOpen, Send } from 'lucide-react';
import { GuessGame } from './components/GuessGame';

function App() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    projectDescription: ''
  });
  const [formMessage, setFormMessage] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormMessage('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');
    setContactForm({ name: '', email: '', projectDescription: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-xl font-bold text-blue-600">Portfolio</a>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600">À propos</a>
              <a href="#education" className="text-gray-600 hover:text-blue-600">Formation</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600">Compétences</a>
              <a href="#game" className="text-gray-600 hover:text-blue-600">Jeu</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-gradient text-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                alt="Photo de profil" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left md:flex-1">
              <div className="animate-fade-in">
                <h1 className="text-5xl font-bold mb-4">Chahrazad Dahmani</h1>
                <p className="text-2xl mb-8 text-blue-100">Étudiante en Bachelor Cybersécurité et IA</p>
                <p className="text-lg mb-8 max-w-2xl text-blue-50">
                  À l'ESEO, je recherche une alternance en Data et IA pour mon cycle d'ingénieur à partir de septembre 2025,
                  en rythme 2 semaines en école / 2 semaines en entreprise afin de mettre en pratique mes compétences et
                  approfondir mon expertise.
                </p>
                <div className="flex gap-6 justify-center md:justify-start">
                  <a 
                    href="#contact" 
                    className="bg-white text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Me contacter
                  </a>
                  <a 
                    href="/cv.pdf"
                    className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
                    download
                  >
                    <Download size={20} />
                    Télécharger CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </header>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Formation</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Bachelor en Intelligence Artificielle et Cyber Sécurité</h3>
                    <p className="text-blue-600">Ecole Supérieur d'Electronique Ouest (ESEO)</p>
                    <p className="text-gray-600">Vélizy-Villacoublay, France</p>
                    <p className="text-gray-500">2024 - En cours</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Cycle Préparatoire en Ingénierie (informatique)</h3>
                    <p className="text-blue-600">Université Abderrahmane Mira de Bejaia</p>
                    <p className="text-gray-600">Bejaia, ALGERIE</p>
                    <p className="text-gray-500">2022 - 2024</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Baccalauréat Sciences Expérimentales</h3>
                    <p className="text-blue-600">Lycée ALIANE Hamimi</p>
                    <p className="text-gray-600">Bouira, ALGERIE</p>
                    <p className="text-gray-500">2021 - 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Compétences</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Compétences Techniques</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Python</span>
                    <span>90%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full w-[90%] bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Java</span>
                    <span>85%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full w-[85%] bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>C/C++</span>
                    <span>80%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full w-[80%] bg-blue-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Langues</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Français</span>
                    <span>95%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full w-[95%] bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Anglais</span>
                    <span>75%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full w-[75%] bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Arabe</span>
                    <span>95%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full w-[95%] bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Kabyle</span>
                    <span>100%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full w-[100%] bg-blue-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Section */}
      <section id="game" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Jeu de Devinettes</h2>
          <GuessGame />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Contact</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:Dahmanichahrazad4@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">Dahmanichahrazad4@gmail.com</p>
                  </div>
                </a>
                <a 
                  href="tel:0760512526"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-gray-600">07 60 51 25 26</p>
                  </div>
                </a>
                <a 
                  href="https://linkedin.com/in/chahrazad-dahmani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Linkedin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-gray-600">linkedin.com/in/chahrazad-dahmani</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Proposer un projet</h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="project">
                    Description du projet
                  </label>
                  <textarea
                    id="project"
                    value={contactForm.projectDescription}
                    onChange={(e) => setContactForm({...contactForm, projectDescription: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={4}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Envoyer
                </button>
                {formMessage && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-lg text-center">
                    {formMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Chahrazad Dahmani. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;