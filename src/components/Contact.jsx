import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi'
import portfolioData from '../data/portfolioData'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')  // 'sending' | 'sent' | 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // simulate sending for now — replace with emailjs later
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }, 1500)
  }

  const socials = [
    {
      icon: <FiMail size={18} />,
      label: portfolioData.email,
      href: `mailto:${portfolioData.email}`
    },
    {
      icon: <FiGithub size={18} />,
      label: 'GitHub',
      href: portfolioData.github
    },
    {
      icon: <FiLinkedin size={18} />,
      label: 'LinkedIn',
      href: portfolioData.linkedin
    }
  ]

  return (
    <section id="contact" className="section" ref={ref}>

      {/* Label & Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="section-label">Let's connect</div>
        <div className="section-title">Get In Touch</div>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'start'
      }}>

        {/* Left — text + socials */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p style={{
            fontSize: '15px',
            color: '#888',
            lineHeight: 1.9,
            marginBottom: '2rem'
          }}>
            I'm always open to exciting opportunities, collaborations,
            or just a good tech conversation. Feel free to reach out
            and I'll get back to you as soon as possible!
          </p>

          {/* Social Links */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  background: '#111',
                  border: '0.5px solid #222',
                  borderRadius: '10px',
                  color: '#888',
                  fontSize: '13px',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#7F77DD'
                  e.currentTarget.style.color = '#7F77DD'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#222'
                  e.currentTarget.style.color = '#888'
                }}
              >
                {social.icon}
                {social.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right — Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >

          {/* Name */}
          <div>
            <label style={{
              fontSize: '12px',
              color: '#555',
              display: 'block',
              marginBottom: '6px'
            }}>
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              style={{
                width: '100%',
                padding: '10px 14px',
                background: '#111',
                border: '0.5px solid #222',
                borderRadius: '8px',
                color: '#e2e2e2',
                fontSize: '14px',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={e => e.target.style.borderColor = '#7F77DD'}
              onBlur={e => e.target.style.borderColor = '#222'}
            />
          </div>

          {/* Email */}
          <div>
            <label style={{
              fontSize: '12px',
              color: '#555',
              display: 'block',
              marginBottom: '6px'
            }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              style={{
                width: '100%',
                padding: '10px 14px',
                background: '#111',
                border: '0.5px solid #222',
                borderRadius: '8px',
                color: '#e2e2e2',
                fontSize: '14px',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={e => e.target.style.borderColor = '#7F77DD'}
              onBlur={e => e.target.style.borderColor = '#222'}
            />
          </div>

          {/* Message */}
          <div>
            <label style={{
              fontSize: '12px',
              color: '#555',
              display: 'block',
              marginBottom: '6px'
            }}>
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Your message..."
              style={{
                width: '100%',
                padding: '10px 14px',
                background: '#111',
                border: '0.5px solid #222',
                borderRadius: '8px',
                color: '#e2e2e2',
                fontSize: '14px',
                outline: 'none',
                resize: 'vertical',
                transition: 'border-color 0.2s',
                fontFamily: 'inherit'
              }}
              onFocus={e => e.target.style.borderColor = '#7F77DD'}
              onBlur={e => e.target.style.borderColor = '#222'}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'sending'}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '12px 24px',
              background: status === 'sent' ? '#1a2e1a' : '#7F77DD',
              border: status === 'sent' ? '0.5px solid #2a4a2a' : 'none',
              borderRadius: '8px',
              color: status === 'sent' ? '#4caf50' : '#fff',
              fontSize: '14px',
              cursor: status === 'sending' ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s',
              opacity: status === 'sending' ? 0.7 : 1
            }}
          >
            <FiSend size={15} />
            {status === 'sending' ? 'Sending...'
              : status === 'sent' ? 'Message Sent ✓'
              : 'Send Message'}
          </button>

          {/* Error message */}
          {status === 'error' && (
            <p style={{ fontSize: '13px', color: '#e74c3c', textAlign: 'center' }}>
              Something went wrong. Please try again.
            </p>
          )}

        </motion.form>
      </div>

    </section>
  )
}

export default Contact