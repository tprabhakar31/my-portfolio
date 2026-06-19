import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import portfolioData from '../data/portfolioData'

const stats = [
  { num: '3+',  label: 'Years Experience' },
  { num: '10+', label: 'Projects Built'   },
  { num: '15+', label: 'Technologies'     },
  { num: '100%', label: 'Dedication'      },
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const { bio } = portfolioData

  return (
    <section id="about" className="section" ref={ref}>

      {/* Label & Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="section-label">Who I am</div>
        <div className="section-title">About Me</div>
      </motion.div>

      {/* Grid — bio + stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'start'
      }}>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p style={{
            fontSize: '15px',
            color: '#888',
            lineHeight: 1.9,
            marginBottom: '1.5rem'
          }}>
            I'm a <span style={{ color: '#7F77DD' }}>Java Full Stack Developer</span> with
            a strong foundation in building enterprise-grade applications. I thrive at the
            intersection of clean backend architecture and polished frontend experiences.
          </p>
          <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.9, marginBottom: '1.5rem' }}>
            My expertise spans microservices, RESTful APIs, cloud infrastructure, and modern
            frontend frameworks. I'm passionate about writing code that scales, performs,
            and stands the test of time.
          </p>
          <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.9 }}>
            When I'm not coding, I'm exploring new tools in the cloud and DevOps ecosystem
            to sharpen my craft.
          </p>

          {/* Resume button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            style={{ display: 'inline-block', marginTop: '1.5rem' }}
          >
            <button className="btn-primary">Download Resume ↓</button>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem'
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              style={{
                background: '#111',
                border: '0.5px solid #222',
                borderRadius: '12px',
                padding: '1.5rem',
                textAlign: 'center',
                transition: 'border-color 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#534AB7'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#222'}
            >
              <div style={{
                fontSize: '2rem',
                fontWeight: '500',
                color: '#7F77DD',
                marginBottom: '4px'
              }}>
                {stat.num}
              </div>
              <div style={{ fontSize: '12px', color: '#555' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default About