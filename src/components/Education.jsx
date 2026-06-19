import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import portfolioData from '../data/portfolioData'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const { education } = portfolioData

  return (
    <section id="education" className="section" ref={ref}>

      {/* Label & Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="section-label">My background</div>
        <div className="section-title">Education</div>
      </motion.div>

      {/* Education Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.25rem'
      }}>
        {education.map((edu, i) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            style={{
              background: '#111',
              border: '0.5px solid #222',
              borderRadius: '12px',
              padding: '1.75rem',
              transition: 'border-color 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#534AB7'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#222'}
          >

            {/* Icon */}
            <div style={{
              width: '44px',
              height: '44px',
              background: '#1a1a2e',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
              marginBottom: '1.25rem'
            }}>
              🎓
            </div>

            {/* Degree */}
            <h3 style={{
              fontSize: '15px',
              fontWeight: '500',
              color: '#fff',
              marginBottom: '6px',
              lineHeight: 1.4
            }}>
              {edu.degree}
            </h3>

            {/* School */}
            <div style={{
              fontSize: '13px',
              color: '#7F77DD',
              marginBottom: '6px'
            }}>
              {edu.school}
            </div>

            {/* Year */}
            <div style={{
              fontSize: '12px',
              color: '#444',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <span style={{
                width: '6px',
                height: '6px',
                background: '#7F77DD',
                borderRadius: '50%',
                display: 'inline-block'
              }} />
              {edu.year}
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Education