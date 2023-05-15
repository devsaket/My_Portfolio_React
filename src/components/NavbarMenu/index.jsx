import React from 'react';

import {Container, Nav, Navbar} from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithubAlt, FaUserClock } from 'react-icons/fa'
import {MdContactPhone} from 'react-icons/md'
import {FcHome, FcBusinessman, FcPositiveDynamic, FcMindMap, FcCustomerSupport} from 'react-icons/fc'
import { BsMoonStarsFill } from 'react-icons/bs'

import './style.scss'

const navigation = [
  { name: <FcHome />, href: '/', current: true, style: 'text-dark border-bottom border-dark fs-4 pb-0 menu-item', title:'Home' },
  { name: <FcBusinessman />, href: '/about', current: false, style: 'text-dark fs-4 ms-1 pb-0 menu-item', title:'About' },
  { name: <FcMindMap />, href: '#', current: false,style: 'text-dark fs-4 ms-1 pb-0 menu-item', title:'Projects' },
  { name: <FcPositiveDynamic />, href: '/services', current: false, style: 'text-dark fs-4 ms-1 pb-0 menu-item', title:'Services' },
  { name: <FcCustomerSupport />, href: '/contact', current: false, style: 'text-dark fs-4 ms-1 pb-0 menu-item', title:'Contact' },
]

const social_navigation = [
  { name: <FaFacebookF className='facebook social-icon' />, href: '#', current: false, style: 'text-dark fs-5' },
  { name: <FaTwitter className='twitter social-icon' />, href: '#', current: false, style: 'text-dark fs-5' },
  { name: <FaLinkedinIn className='linkedin social-icon' />, href: '#', current: false, style: 'text-dark fs-5' },
  { name: <FaGithubAlt className='github social-icon' />, href: '#', current: false, style: 'text-dark fs-5' },
  { name: <BsMoonStarsFill />, href: '#', current: false, style: 'text-dark fs-5 rounded-circle moonstar' },
]


const NavbarMenu = () => {

  return (
    <>
      <Navbar collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Brand href="#home" className='d-block d-lg-none'><span className='bg-dark text-light fw-bold rounded-circle nav-brand'>SK</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className=''>
            <Nav className="">
              {
                navigation.map((n,i)=>{
                  return(
                    <>
                      <Nav.Link key={i} href={n.href} className={n.style} title={n.title}>{n.name}</Nav.Link>
                    </>
                  )
                })
              }
            </Nav>
            <Navbar.Brand href="#home" className='d-none d-lg-block mx-auto'><span className='bg-dark text-light fw-bold rounded-circle nav-brand'>SK</span></Navbar.Brand>
            <Nav className="">
              {
                social_navigation.map((n,i)=>{
                  return(
                    <>
                      <Nav.Link key={i} href={n.href} className={n.style}>{n.name}</Nav.Link>
                    </>
                  )
                })
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarMenu