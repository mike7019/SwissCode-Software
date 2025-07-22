import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 2rem;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 1px solid #DC143C;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  min-height: 70px;
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    min-height: 60px;
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-1px);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, transparent, rgba(192, 192, 192, 0.2), transparent);
    border-radius: 8px;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  
  &:hover::after {
    opacity: 1;
  }
`

const LogoImageContainer = styled.div`
  height: 50px;
  width: auto;
  filter: drop-shadow(0 2px 4px rgba(192, 192, 192, 0.3));
  transition: all 0.3s ease;
  
  &:hover {
    filter: drop-shadow(0 4px 8px rgba(192, 192, 192, 0.5)) brightness(1.05);
    transform: scale(1.02);
  }
  
  @media (max-width: 768px) {
    height: 40px;
  }
`

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled.a`
  color: #2D3748;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    color: #DC143C;
    transform: translateY(-1px);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #DC143C;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #2D3748;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
  
  &:hover {
    color: #DC143C;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer as={Link} href="/">
        <LogoImageContainer>
          <Image src="/swisscode-logo.svg" alt="SwissCode Software" height={50} width={200} priority />
        </LogoImageContainer>
      </LogoContainer>
      
      <Nav>
        <NavLink as={Link} href="/">
          Inicio
        </NavLink>
        <NavLink as={Link} href="/sobre-nosotros">
          Nosotros
        </NavLink>
        <NavLink as={Link} href="/servicios">
          Servicios
        </NavLink>
        <NavLink as={Link} href="/trabaja-con-nosotros">
          Únete
        </NavLink>
        <NavLink as={Link} href="/contacto">
          Contacto
        </NavLink>
      </Nav>
      
      <MobileMenuButton>
        ☰
      </MobileMenuButton>
    </HeaderContainer>
  )
}

export default Header
