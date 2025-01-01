'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Code, Search, Book, Github, Download, LaptopIcon as Linux, ComputerIcon as Windows } from 'lucide-react'

export default function WikiLandingPage() {
  const [typedText, setTypedText] = useState('')
  const fullText = '$ wiki "your search term here"'

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
          <a href="https://github.com/charanravi-online/wiki" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
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
            className="space-y-4"
          >
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://snapcraft.io/wiki" 
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded inline-flex items-center transition-colors"
              >
                <Linux className="w-4 h-4 mr-2" />
                Install on Linux
              </a>
              <a 
                href="https://github.com/charanravi-online/wiki/releases/download/v1.0/install_wiki.exe" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded inline-flex items-center transition-colors"
              >
                <Windows className="w-4 h-4 mr-2" />
                Install on Windows
              </a>
            </div>
            <div className="text-gray-400 text-sm">
              <p>or use winget: <code className="text-green-400">winget install RCharan.wiki</code></p>
              
            </div>
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
$ wiki "Alan Turing"

Here are the results for: "Alan Turing"
1. Alan Turing - algorithm and computation with the Turing machine, which can be considered a model of a general-purpose computer. Turing is widely considered to be the father...

2. Turing Award - award is named after Alan Turing, who was a British mathematician and reader in mathematics at the University of Manchester. Turing is often credited as...

3. Alan Turing: The Enigma - Turing (2008) Prof: Alan Turing Decoded (2015) The Turing Guide (2017) "Alan Turing: The Enigma". www.turing.org.uk. Retrieved 3 August 2017. "Alan Turing:...

4. Alan Turing law - is named after Alan Turing, the World War II codebreaker and computing pioneer, who was convicted of gross indecency in 1952. Turing received a royal...

5. Alan Turing Institute - the Alan Turing Institute". Archived from the original on 9 April 2016. Retrieved 13 May 2016. "Leadership – The Alan Turing Institute". Turing.ac.uk...

6. Turing machine - possible for a Turing machine to go into an infinite loop which will never halt. The Turing machine was invented in 1936 by Alan Turing, who called it...

7. Legacy of Alan Turing - honour: Alan Turing Institute Church–Turing thesis Good–Turing frequency estimation Turing completeness Turing degree Turing fixed-point combinator Turing Institute...

8. Turing test - The Turing test, originally called the imitation game by Alan Turing in 1949, is a test of a machine's ability to exhibit intelligent behaviour equivalent...

9. Alan Turing Memorial - 476722; -2.236028 The Alan Turing Memorial, situated in Sackville Gardens in Manchester, England, is a sculpture in memory of Alan Turing, a pioneer of modern...

10. The Imitation Game - the 1983 biography Alan Turing: The Enigma by Andrew Hodges. The film's title quotes the name of the game cryptanalyst Alan Turing proposed for answering...

Pick a page: 1
Born: Alan Mathison Turing(1912-06-23)23 June 1912Maida Vale, London, England
Died: 7 June 1954(1954-06-07) (aged 41)Wilmslow, Cheshire, England
Cause of death: Cyanide poisoning as an act of suicide[note 1]
Alma mater: University of Cambridge  (BA, MA)
Princeton University (PhD)
Known for: Cryptanalysis of the Enigma
Turing's proof
Turing machine
Turing test
unorganised machine
Turing pattern
Turing reduction
"The Chemical Basis of Morphogenesis"
Turing paradox
Awards: Smith's Prize (1936)
Fields: Logic
mathematics
cryptanalysis
computer science
mathematical and theoretical biology
Institutions: University of Manchester
Government Code and Cypher School
National Physical Laboratory
Thesis: Systems of Logic Based on Ordinals (1938)
Doctoral advisor: Alonzo Church
Doctoral students: Robin Gandy
Beatrice Worsley
Summary:
Alan Mathison Turing (/ˈtjʊərɪŋ/; 23 June 1912 – 7 June 1954) was an English mathematician, computer scientist, logician, cryptanalyst, philosopher and theoretical biologist. He was highly influential in the development of theoretical computer science, providing a formalisation of the concepts of algorithm and computation with the Turing machine, which can be considered a model of a general-purpose computer. Turing is widely considered to be the father of theoretical computer science.
Born in London, Turing was raised in southern England. He graduated from King's College, Cambridge, and in 1938, earned a doctorate degree from Princeton University. During World War II, Turing worked for the Government Code and Cypher School at Bletchley Park, Britain's codebreaking centre that produced Ultra intelligence. He led Hut 8, the section responsible for German naval cryptanalysis. Turing devised techniques for speeding the breaking of German ciphers, including improvements to the pre-war Polish bomba method, an electromechanical machine that could find settings for the Enigma machine. He played a crucial role in cracking intercepted messages that enabled the Allies to defeat the Axis powers in many engagements, including the Battle of the Atlantic.
Read more: https://en.wikipedia.org/wiki/Alan_Turing


$ wiki -h
usage: wiki [-h] [-gai] [--gai] [query]

Search for Wikipedia pages and interact with Gemini AI.

positional arguments:
  query       The Wikipedia page to search for

options:
  -h, --help  show this help message and exit
  -gai        Give the query to Gemini AI and get a response
  --gai       Enter continuous prompt mode to interact with Gemini AI

Example:
  wiki "Albert Einstein"     # Displays a summary about Albert Einstein
              `}</code>
            </pre>
          </div>
        </section>
        <section className="mb-12 text-center">
          <p className="text-gray-300">
            Crafted with ❤️ by <a href="https://charanravi.in" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">Charan Ravi</a>
          </p>
        </section>
      </main>

      <footer className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} wiki. All rights reserved.</p>
      </footer>
    </div>
  )
}

