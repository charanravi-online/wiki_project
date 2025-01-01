'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Code, Search, Book, Github } from 'lucide-react'
import Image from 'next/image'

export default function WikiLandingPage() {
  const [typedText, setTypedText] = useState('')
  const fullText = '$ wiki Artificial Intelligence'

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTypedText(fullText.slice(0, typedText.length + 1))
    }, 100)

    return () => clearTimeout(timeout)
  }, [typedText])

  return (
    <div className="min-h-screen bg-black text-gray-100 flex flex-col font-mono">
      <header className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6" />
            <span className="text-xl font-bold">wiki</span>
          </div>
          <a href="https://github.com/wimpysworld/wiki" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
            <Github className="w-6 h-6" />
          </a>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-20">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Access Wikipedia from your terminal
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Instant knowledge at your fingertips, no browser required.
          </motion.p>
          <motion.div 
            className="bg-gray-900 p-4 rounded-lg text-left inline-block mb-8 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <code className="text-green-400">{typedText}</code>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-x-4"
          >
            <a 
              href="https://snapcraft.io/wiki" 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded inline-flex items-center transition-colors"
            >
              <Code className="w-4 h-4 mr-2" />
              Install wiki
            </a>
            <a 
              href="https://github.com/wimpysworld/wiki" 
              className="bg-gray-800 hover:bg-gray-700 text-gray-100 hover:text-white font-bold py-2 px-6 rounded inline-flex items-center transition-colors ml-4"
            >
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </a>
          </motion.div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { title: 'Quick Search', icon: Search, description: 'Instantly search Wikipedia from your command line.' },
            { title: 'Instant Results', icon: Terminal, description: 'Get concise summaries directly in your terminal.' },
            { title: 'Deep Dive', icon: Book, description: 'Access full articles and explore topics in depth.' }
          ].map((feature, index) => (
            <motion.div 
              key={feature.title} 
              className="bg-gray-900 p-6 rounded-lg border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              <feature.icon className="w-8 h-8 mb-4 text-green-400" />
              <h2 className="text-xl font-semibold mb-2 text-white">{feature.title}</h2>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">How to use wiki</h2>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <pre className="text-green-400 overflow-x-auto">
              <code>{`
$ wiki Alan Turing
Alan Turing was a British mathematician and computer scientist who is widely considered to be the father of theoretical computer science and artificial intelligence. He was born on June 23, 1912, in London, England, and died on June 7, 1954, in Wilmslow, Cheshire.

Key points:
1. Turing Machine: Developed the concept of the Turing machine, a theoretical device that manipulates symbols on a strip of tape according to a table of rules.
2. World War II: Played a crucial role in breaking the German Enigma code during World War II at Bletchley Park.
3. Turing Test: Proposed the Turing test as a measure of machine intelligence.
4. Contributions to AI: His work laid the foundation for artificial intelligence and computer science.
5. Persecution: Was prosecuted for homosexual acts in 1952, accepted chemical castration as an alternative to prison.
6. Legacy: Received a posthumous pardon in 2013 and is now celebrated as a pioneer in computer science and LGBTQ+ rights.

$ wiki -h
Usage: wiki [OPTIONS] SEARCH_TERM

Options:
  -h, --help     Show this help message
  -s, --summary  Display a short summary (default)
  -f, --full     Display the full article
  -r, --random   Display a random article
  -l, --lang     Specify the language (default: en)

Example:
  wiki Albert Einstein     # Displays a summary about Albert Einstein
  wiki -f Python           # Displays the full article about Python
  wiki -r                  # Displays a random article
  wiki -l es "Frida Kahlo" # Displays a summary about Frida Kahlo in Spanish
              `}</code>
            </pre>
          </div>
        </section>
        <section className="mb-12 text-center">
          <p className="text-gray-300">
            Crafted with ❤️ by <a href="https://github.com/charanravi-online" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">Charan Ravi</a>
          </p>
        </section>
      </main>

      <footer className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} wiki. All rights reserved.</p>
      </footer>
    </div>
  )
}

