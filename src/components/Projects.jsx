import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import portfolioData from '../data/portfolioData'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const { projects } = portfolioData

  return (
    <section id="projects" className="section" ref={ref}>

      {/* Label & Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="section-label">What I've built</div>
        <div className="section-title">Projects</div>
      </motion.div>

      {/* Projects Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.25rem'
      }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              background: '#111',
              border: '0.5px solid #222',
              borderRadius: '12px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              transition: 'border-color 0.2s',
              cursor: 'default'
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#534AB7'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#222'}
          >

            {/* Top Row — folder icon + links */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: '#1a1a2e',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
              }}>
                📁
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: '12px' }}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#555', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = '#555'}
                  >
                    <FiGithub size={18} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#555', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = '#555'}
                  >
                    <FiExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            {/* Title */}
            <h3 style={{
              fontSize: '15px',
              fontWeight: '500',
              color: '#fff'
            }}>
              {project.title}
            </h3>

            {/* Description */}
            <p style={{
              fontSize: '13px',
              color: '#666',
              lineHeight: 1.7,
              flex: 1
            }}>
              {project.description}
            </p>

            {/* Tech Badges */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
              marginTop: 'auto'
            }}>
              {project.techs.map((tech, j) => (
                <span
                  key={j}
                  style={{
                    padding: '3px 10px',
                    background: '#1a1a2e',
                    borderRadius: '4px',
                    fontSize: '11px',
                    color: '#7F77DD'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Projects