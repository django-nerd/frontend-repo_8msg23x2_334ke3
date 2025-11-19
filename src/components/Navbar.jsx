import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#b86cf9] shadow-[0_0_35px_#b86cf980]"></div>
              <span className="text-white font-semibold tracking-wide">Foxmen Studio</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#b86cf9] text-black font-medium shadow-[0_0_30px_#b86cf980] hover:shadow-[0_0_45px_#b86cf9aa] transition-shadow">
                Start a Project
              </a>
            </nav>

            <button onClick={() => setOpen((v) => !v)} className="md:hidden text-white p-2">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-6 mt-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden"
          >
            <ul className="divide-y divide-white/10">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-5 py-4 text-white/90 hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" onClick={() => setOpen(false)} className="block px-5 py-4 font-medium text-black bg-[#b86cf9]">
                  Start a Project
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
