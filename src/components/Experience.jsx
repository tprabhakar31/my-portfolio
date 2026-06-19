import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import portfolioData from '../data/portfolioData'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const { experience } = portfolioData

  return (
    <section id="experience" className="section" ref={ref}>

      {/* Label & Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="section-label">Where I've worked</div>
        <div className="section-title">Experience</div>
      </motion.div>

      {/* Timeline */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0'
      }}>
        {experience.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            style={{
              display: 'grid',
              gridTemplateColumns: '140px 1fr',
              gap: '1.5rem',
              paddingBottom: '2.5rem',
              position: 'relative'
            }}
          >

            {/* Vertical Line */}
            {i !== experience.length - 1 && (
              <div style={{
                position: 'absolute',
                left: '139px',
                top: '8px',
                bottom: '0',
                width: '0.5px',
                background: '#1e1e1e'
              }} />
            )}

            {/* Date */}
            <div style={{
              fontSize: '12px',
              color: '#444',
              textAlign: 'right',
              paddingTop: '4px',
              lineHeight: 1.6
            }}>
              {exp.duration}
            </div>

            {/* Dot */}
            <div style={{
              position: 'absolute',
              left: '136px',
              top: '6px',
              width: '8px',
              height: '8px',
              background: '#7F77DD',
              borderRadius: '50%',
              zIndex: 1
            }} />

            {/* Content */}
            <div style={{ paddingLeft: '1.5rem' }}>

              {/* Role */}
              <h3 style={{
                fontSize: '16px',
                fontWeight: '500',
                color: '#fff',
                marginBottom: '4px'
              }}>
                {exp.role}
              </h3>

              {/* Company */}
              <div style={{
                fontSize: '13px',
                color: '#7F77DD',
                marginBottom: '1rem'
              }}>
                {exp.company}
              </div>

              {/* Points */}
              <ul style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                {exp.points.map((point, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: '13px',
                      color: '#666',
                      lineHeight: 1.7,
                      display: 'flex',
                      gap: '8px',
                      alignItems: 'flex-start'
                    }}
                  >
                    <span style={{
                      color: '#7F77DD',
                      marginTop: '6px',
                      fontSize: '6px',
                      flexShrink: 0
                    }}>
                      ◆
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Experience;