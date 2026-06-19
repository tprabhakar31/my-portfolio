import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import portfolioData from '../data/portfolioData'

const Hero = () => {
  const { name, role, bio } = portfolioData

  const firstName = name.split(' ')[0]
  const lastName  = name.split(' ')[1]

  return (
    <section style={{
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',        // ← vertically center
  justifyContent: 'center',   // ← horizontally center
  padding: '5rem 2rem 0',     // ← top padding for navbar
  maxWidth: '900px',
  margin: '0 auto',
  position: 'relative'
}}>

      {/* Two Column Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
        width: '100%'
      }}>

        {/* Left — Text Content */}
        <div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontSize: '13px',
              color: '#7F77DD',
              letterSpacing: '0.1em',
              marginBottom: '1rem'
            }}
          >
            👋 Hello, World!
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '500',
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: '0.5rem'
            }}
          >
            I'm <span style={{ color: '#7F77DD' }}>{firstName}</span>
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '500',
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: '1rem'
            }}
          >
            {lastName}
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              color: '#555',
              marginBottom: '1.5rem',
              fontWeight: '400'
            }}
          >
            {role}
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              fontSize: '14px',
              color: '#888',
              lineHeight: 1.9,
              marginBottom: '2rem'
            }}
          >
            {bio}
          </motion.p>

          {/* Buttons */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.6 }}
  style={{
    display: 'flex',
    flexDirection: 'row',      // ← force row
    gap: '0.75rem',
    flexWrap: 'wrap',
    alignItems: 'center'       // ← align center
  }}
>
  <Link to="projects" smooth={true} duration={500} offset={-56}>
    <button className="btn-primary">View Projects</button>
  </Link>

  <Link to="contact" smooth={true} duration={500} offset={-56}>
    <button className="btn-outline">Get In Touch</button>
  </Link>

  <a href={portfolioData.github} target="_blank" rel="noreferrer">
    <button className="btn-outline">GitHub ↗</button>
  </a>
</motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            style={{
              marginTop: '3rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '6px'
            }}
          >
            <span style={{
              fontSize: '11px',
              color: '#444',
              letterSpacing: '0.1em'
            }}>
              SCROLL
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ width: '1px', height: '30px', background: '#333' }}
            />
          </motion.div>

        </div>

        {/* Right — Photo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>

            {/* Purple glow behind */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle, rgba(127,119,221,0.15) 0%, transparent 70%)',
              borderRadius: '50%',
              zIndex: 0
            }} />

            {/* Purple border accent */}
            <div style={{
              position: 'absolute',
              top: '14px',
              left: '-14px',
              right: '14px',
              bottom: '-14px',
              border: '0.5px solid #534AB7',
              borderRadius: '20px',
              zIndex: 0
            }} />

            {/* Photo */}
            <img
              src="/profile.jpeg"
              alt="Prabhakar Thokala"
              style={{
                width: '100%',
                aspectRatio: '3/4',
                objectFit: 'cover',
                borderRadius: '16px',
                border: '0.5px solid #222',
                position: 'relative',
                zIndex: 1,
                display: 'block'
              }}
            />

            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(10,10,10,0.9)',
                border: '0.5px solid #222',
                borderRadius: '20px',
                padding: '6px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                zIndex: 2,
                whiteSpace: 'nowrap'
              }}
            >
              <span style={{
                width: '7px',
                height: '7px',
                background: '#4caf50',
                borderRadius: '50%',
                display: 'inline-block',
                animation: 'pulse 2s infinite'
              }} />
              <span style={{ fontSize: '11px', color: '#888' }}>
                Available for work
              </span>
            </motion.div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              style={{
                position: 'absolute',
                top: '20px',
                left: '-20px',
                background: '#111',
                border: '0.5px solid #222',
                borderRadius: '10px',
                padding: '10px 14px',
                zIndex: 2
              }}
            >
              <div style={{
                fontSize: '16px',
                fontWeight: '500',
                color: '#7F77DD'
              }}>2+</div>
              <div style={{ fontSize: '11px', color: '#555' }}>Years Exp.</div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero