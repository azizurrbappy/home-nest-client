import React from 'react';
import Container from '../Container/Container';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
      <footer className="max-sm:px-4 pt-20">
        <Container className="footer sm:footer-horizontal text-base-content">
          <aside>
            <Link className="flex items-center gap-1">
              <img src={Logo} alt="HomeNest" />
              <h2 className="text-lg font-bold">HomeNest</h2>
            </Link>
            <p>
              A great platform to buy, sell, or even rent your <br /> properties
              without any commisions.
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </Container>
        <hr className="mt-8 text-gray-300" />
        <Container className="py-8 flex items-center justify-between">
          <div>
            <p className="text-gray-500">©2025 HomeNest. All rights reserved</p>
          </div>
          <div className="flex items-center gap-8 text-gray-500">
            <Link>
              <FaFacebookF size={20} />
            </Link>
            <Link>
              <FaXTwitter size={20} />
            </Link>
            <Link>
              <FaInstagram size={20} />
            </Link>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
