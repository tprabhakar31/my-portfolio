import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import portfolioData from '../data/portfolioData'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // add shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['about', 'skills', 'projects', 'experience', 'education', 'contact']

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      height: '56px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 2rem',
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      borderBottom: scrolled ? '0.5px solid #222' : 'none',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      transition: 'all 0.3s ease'
    }}>

      {/* Logo */}
      <div style={{ fontSize: '18px', fontWeight: '500', color: '#fff' }}>
        PT<span style={{ color: '#7F77DD' }}>.</span>
      </div>

      {/* Desktop Links */}
      <div style={{ display: 'flex', gap: '1.5rem' }} className="desktop-nav">
        {navLinks.map(link => (
          <Link
            key={link}
            to={link}
            spy={true}
            smooth={true}
            duration={500}
            offset={-56}
            style={{
              fontSize: '13px',
              color: '#888',
              cursor: 'pointer',
              textTransform: 'capitalize',
              transition: 'color 0.2s'
            }}
            activeStyle={{ color: '#7F77DD' }}
            onMouseEnter={e => e.target.style.color = '#fff'}
            onMouseLeave={e => e.target.style.color = '#888'}
          >
            {link}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          flexDirection: 'column',
          gap: '5px',
          cursor: 'pointer'
        }}
        className="hamburger"
      >
        <span style={{ width: '22px', height: '1px', background: '#fff', display: 'block' }} />
        <span style={{ width: '22px', height: '1px', background: '#fff', display: 'block' }} />
        <span style={{ width: '22px', height: '1px', background: '#fff', display: 'block' }} />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '56px',
          left: 0,
          right: 0,
          background: '#0a0a0a',
          borderBottom: '0.5px solid #222',
          padding: '1rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {navLinks.map(link => (
            <Link
              key={link}
              to={link}
              spy={true}
              smooth={true}
              duration={500}
              offset={-56}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '14px',
                color: '#888',
                cursor: 'pointer',
                textTransform: 'capitalize'
              }}
            >
              {link}
            </Link>
          ))}
        </div>
      )}

    </nav>
  )
}

export default Navbar