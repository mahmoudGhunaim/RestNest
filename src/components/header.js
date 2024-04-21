import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Router } from "@reach/router";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    let lastScrollTop = 0;

    const onScroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (lastScrollTop < currentScrollPos && currentScrollPos > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollTop = currentScrollPos;
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header-sec ${isVisible ? '' : 'hide'}`} style={{transition: 'top 0.3s'}}>
      <div className="header-container">
        <div className="logo-sec">
          <Link to="/"><img src="/Restnest.svg" alt="Logo"/></Link>
        </div>
        <div className="link-family">
          <Link to="/">Home</Link>
          <Link to={"/blog"}>Blog</Link>
          <Link to="/properties">Properties</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/about-us">Our Story</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/management">Management</Link>
        </div>
        <div className="login-sec">
          <Link to='https://dashboard.hostaway.com/login' className='login-btn'>Owner Login</Link>
        </div>
        <div className='mobile-menu'>
      <Button color="danger" onClick={toggle}>
        <img src='/menu.svg'/>
      </Button>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
        <div className="logo-sec-mob">
        <Link to="../"><img src="/Restnest.svg"/></Link>
        </div>
        <div className='navBar-hamburger'>
          <Link to="../">Home</Link>
          <Link to='/blog'>Blog</Link>
          <Link to="/properties">Properties</Link>
          <Link to='/faq'>FAQ</Link>
          <Link to='/about-us' >Our Story</Link>
          <Link to='/contactus' >Contact Us</Link>
          <Link to='/management' >Management</Link>
        
        </div>
        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '} */}
          {/* <Button color="secondary" onClick={toggle}>
            Cancel
          </Button> */}
          <div className="login-mob">
            <Link to='https://dashboard.hostaway.com/login' className='login-btn'>Owner Login</Link>
          </div>
        </ModalFooter>
      </Modal>
    </div>
      </div>
    </header>
  );
};

export default Header;
