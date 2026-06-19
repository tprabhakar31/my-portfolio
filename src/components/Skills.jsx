import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import portfolioData from '../data/portfolioData'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const { skills } = portfolioData

  const skillCategories = [
    {
      label: 'Backend & Java',
      icon: '☕',
      items: skills.backend
    },
    {
      label: 'Frontend',
      icon: '🎨',
      items: skills.frontend
    },
    {
      label: 'Cloud & DevOps',
      icon: '☁️',
      items: skills.cloudDevops
    },
    {
      label: 'Databases',
      icon: '🗄️',
      items: skills.databases
    }
  ]

  return (
    <section id="skills" className="section" ref={ref}>

      {/* Label & Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="section-label">What I know</div>
        <div className="section-title">Skills</div>
      </motion.div>

      {/* Skill Categories */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5rem'
      }}>
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
          >

            {/* Category Label */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '1rem'
            }}>
              <span style={{ fontSize: '16px' }}>{category.icon}</span>
              <span style={{
                fontSize: '13px',
                color: '#555',
                letterSpacing: '0.05em'
              }}>
                {category.label}
              </span>
              <div style={{
                flex: 1,
                height: '0.5px',
                background: '#1a1a1a',
                marginLeft: '8px'
              }} />
            </div>

            {/* Skill Tags */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              {category.items.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: catIndex * 0.1 + skillIndex * 0.05
                  }}
                  style={{
                    padding: '8px 16px',
                    background: '#111',
                    border: '0.5px solid #222',
                    borderRadius: '6px',
                    fontSize: '13px',
                    color: '#bbb',
                    cursor: 'default',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#7F77DD'
                    e.currentTarget.style.color = '#7F77DD'
                    e.currentTarget.style.background = '#13112a'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#222'
                    e.currentTarget.style.color = '#bbb'
                    e.currentTarget.style.background = '#111'
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Skills