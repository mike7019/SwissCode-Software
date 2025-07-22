import React, { useState } from 'react'
import styled from 'styled-components'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'

const ContactSection = styled.section`
  padding: 5rem 2rem;
  background: rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(255, 68, 68, 0.2);
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled.h2`
  font-size: 3rem;
  color: #ff4444;
  text-align: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const ContactInfo = styled.div`
  h3 {
    font-size: 1.8rem;
    color: #ffffff;
    margin-bottom: 2rem;
  }
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  svg {
    color: #ff4444;
    font-size: 1.5rem;
    margin-right: 1rem;
  }
  
  div {
    h4 {
      color: #ffffff;
      margin: 0 0 0.5rem 0;
      font-size: 1.1rem;
    }
    
    p {
      color: #cccccc;
      margin: 0;
    }
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 68, 68, 0.1);
    border: 1px solid rgba(255, 68, 68, 0.3);
    color: #ff4444;
    font-size: 1.5rem;
    transition: all 0.3s ease;
    text-decoration: none;
    
    &:hover {
      background: #ff4444;
      color: #ffffff;
      transform: translateY(-3px);
    }
  }
`

const ContactForm = styled.form`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 68, 68, 0.2);
  
  h3 {
    font-size: 1.8rem;
    color: #ffffff;
    margin-bottom: 2rem;
  }
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`

const Label = styled.label`
  display: block;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-weight: 500;
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(255, 68, 68, 0.3);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #ff4444;
  }
  
  &::placeholder {
    color: #999999;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(255, 68, 68, 0.3);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #ff4444;
  }
  
  &::placeholder {
    color: #999999;
  }
`

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #ff4444 0%, #ff6666 100%);
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 68, 68, 0.3);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí implementarías el envío del formulario
    console.log('Form submitted:', formData)
    alert('Gracias por tu mensaje. Te contactaremos pronto.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <ContactSection id="contacto">
      <Container>
        <Title>Contáctanos</Title>
        
        <ContactContent>
          <ContactInfo>
            <h3>Hablemos de tu proyecto</h3>
            
            <ContactItem>
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p>info@swisscode.com</p>
              </div>
            </ContactItem>
            
            <ContactItem>
              <FaPhone />
              <div>
                <h4>Teléfono</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </ContactItem>
            
            <ContactItem>
              <FaMapMarkerAlt />
              <div>
                <h4>Oficina</h4>
                <p>123 Tech Street<br />Software City, SC 12345</p>
              </div>
            </ContactItem>
            
            <SocialLinks>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </SocialLinks>
          </ContactInfo>
          
          <ContactForm onSubmit={handleSubmit}>
            <h3>Envíanos un mensaje</h3>
            
            <FormGroup>
              <Label htmlFor="name">Nombre *</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Tu nombre completo"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="email">Email *</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="tu@email.com"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="subject">Asunto</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="¿En qué podemos ayudarte?"
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="message">Mensaje *</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Cuéntanos más sobre tu proyecto..."
                required
              />
            </FormGroup>
            
            <SubmitButton type="submit">
              Enviar Mensaje
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactSection>
  )
}

export default Contact
