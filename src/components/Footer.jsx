import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import portfolioData from '../data/portfolioData'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const links = ['about', 'skills', 'projects', 'experience', 'education', 'contact']

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{
      borderTop: '0.5px solid #1a1a1a',
      padding: '3rem 2rem 2rem',
      marginTop: '2rem'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}>

        {/* Top Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '2rem',
          alignItems: 'start'
        }}>

          {/* Brand */}
          <div>
            <div style={{
              fontSize: '20px',
              fontWeight: '500',
              color: '#fff',
              marginBottom: '8px'
            }}>
              PT<span style={{ color: '#7F77DD' }}>.</span>
            </div>
            <p style={{
              fontSize: '13px',
              color: '#555',
              lineHeight: 1.7,
              maxWidth: '200px'
            }}>
              Java Full Stack Developer building scalable systems and clean interfaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{
              fontSize: '12px',
              color: '#444',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              Quick Links
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              {links.map(link => (
                <span
                  key={link}
                  onClick={() => scrollTo(link)}
                  style={{
                    fontSize: '13px',
                    color: '#555',
                    cursor: 'pointer',
                    textTransform: 'capitalize',
                    transition: 'color 0.2s',
                    width: 'fit-content'
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#7F77DD'}
                  onMouseLeave={e => e.currentTarget.style.color = '#555'}
                >
                  {link}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{
              fontSize: '12px',
              color: '#444',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              Connect
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
              <a
                href={`mailto:${portfolioData.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  color: '#555',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#7F77DD'}
                onMouseLeave={e => e.currentTarget.style.color = '#555'}
              >
                <FiMail size={14} />
                {portfolioData.email}
              </a>

              <a
                href={portfolioData.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  color: '#555',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#7F77DD'}
                onMouseLeave={e => e.currentTarget.style.color = '#555'}
              >
                <FiGithub size={14} />
                GitHub
              </a>

              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  color: '#555',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#7F77DD'}
                onMouseLeave={e => e.currentTarget.style.color = '#555'}
              >
                <FiLinkedin size={14} />
                LinkedIn
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div style={{
          height: '0.5px',
          background: '#1a1a1a'
        }} />

        {/* Bottom Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ fontSize: '12px', color: '#333' }}>
            © {currentYear} Prabhakar Thokala. All rights reserved.
          </p>

          <p style={{ fontSize: '12px', color: '#333' }}>
            Built with React & Vite
            <span style={{ color: '#7F77DD', marginLeft: '4px' }}>♥</span>
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer