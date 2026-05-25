import { useNavigate } from 'react-router-dom'
import { Sparkles, Zap, MessageCircle, Shield, ArrowRight, Github } from 'lucide-react'

const Landing = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-20 border-b border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold gradient-text">TrailBlazer AI</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Atreyee-Ghosh05/Trailblazer--AI-" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition">
              <Github className="w-5 h-5" />
            </a>
            <button
              onClick={() => navigate('/login')}
              className="px-6 py-2 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition font-semibold"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-300 text-sm font-semibold mb-4">
              ✨ The Future of AI Conversations
            </div>
            <h1 className="text-6xl font-bold leading-tight">
              Meet Your Premium
              <br />
              <span className="gradient-text">AI Assistant</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the power of advanced AI conversations with TrailBlazer. Fast, smart, and always ready to help.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/signup')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg flex items-center gap-2 transition transform hover:scale-105"
            >
              Start Chatting
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate('/login')}
              className="px-8 py-4 border border-white/20 hover:border-cyan-400 text-white font-semibold rounded-lg transition"
            >
              Sign In
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose <span className="gradient-text">TrailBlazer?</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="glass p-8 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition group">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/40 transition">
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
            <p className="text-gray-400">
              Get instant responses powered by advanced Grok AI technology. Real-time conversations at your fingertips.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="glass p-8 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition group">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/40 transition">
              <MessageCircle className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Smart Conversations</h3>
            <p className="text-gray-400">
              Context-aware responses that understand your needs. Save and manage all your conversations easily.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="glass p-8 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition group">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/40 transition">
              <Shield className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
            <p className="text-gray-400">
              Your data is encrypted and secure. We respect your privacy with enterprise-grade security.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 backdrop-blur-md mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-400">
          <p>Built with ❤️ by Atreyee Ghosh | © 2024 TrailBlazer AI</p>
        </div>
      </footer>
    </div>
  )
}

export default Landing
