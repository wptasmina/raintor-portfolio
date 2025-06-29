"use client";

import React from "react";

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

const FooterLink = ({ href, children }: FooterLinkProps) => (
  <a
    href={href}
    className="text-gray-400 hover:text-white hover:underline transition-colors duration-300"
  >
    {children}
  </a>
);

type SectionTitleProps = {
  children: React.ReactNode;
};

const SectionTitle = ({ children }: SectionTitleProps) => (
  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
    {children}
  </h3>
);

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 rounded-3xl py-4 font-sans w-full rounded-3xl shadow-lg">
      <div className="max-w-7xl mx-auto px-8 md:px-12 py-12">
        {/* Header Title and Grid */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-8 md:mb-0">
            <h1 className="text-2xl text-[#c5ff41] font-bold uppercase tracking-widest">
              DEVLOP.ME
            </h1>
          </div>
          <div className="w-full md:w-auto">
            <div>
              <h2 className="text-4xl md:text-5xl text-center font-bold text-white tracking-tight mb-10">
                As you can
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Say Hello */}
                <div>
                  <SectionTitle>Say hello</SectionTitle>
                  <ul className="space-y-3">
                    <li>
                      <FooterLink href="mailto:hello@devlop.me.com">
                        HELLO@DEVLOP.ME.COM
                      </FooterLink>
                    </li>
                    <li>
                      <FooterLink href="mailto:mahbubul@me.com">
                        MAHBUBUL@ME.COM
                      </FooterLink>
                    </li>
                  </ul>
                </div>

       
                
                {/* Menu */}
                <div>
                  <SectionTitle>Menu</SectionTitle>
                  <ul className="space-y-3">
                    <li>
                      <FooterLink href="/home">HOME</FooterLink>
                    </li>
                    <li>
                      <FooterLink href="/about">ABOUT</FooterLink>
                    </li>
                    <li>
                      <FooterLink href="/portfolio">PORTFOLIO</FooterLink>
                    </li>
                    <li>
                      <FooterLink href="/blog">BLOG</FooterLink>
                    </li>
                  </ul>
                </div>


                {/* Social */}
                <div>
                  <SectionTitle>Social</SectionTitle>
                  <ul className="space-y-3">
                    <li>
                      <FooterLink href="#">TWITTER</FooterLink>
                    </li>
                    <li>
                      <FooterLink href="#">INSTAGRAM</FooterLink>
                    </li>
                    <li>
                      <FooterLink href="#">FACEBOOK</FooterLink>
                    </li>
                    <li>
                      <FooterLink href="#">BEHANCE</FooterLink>
                    </li>
                    <li>
                      <FooterLink href="#">DRIBBBLE</FooterLink>
                    </li>
                  </ul>
                </div>

                <div>
                  <SectionTitle>Call</SectionTitle>
                  <ul className="space-y-3">
                    <li>
                      <FooterLink href="tel:+784549498100">
                        +784 549 4981 00
                      </FooterLink>
                    </li>
                    <li>
                      <FooterLink href="tel:+88450100211">
                        +8845 0100 211
                      </FooterLink>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="font-bold text-white mb-4 md:mb-0">BESNIK</p>
          <p className="mb-4 md:mb-0">&copy; devlop.me 2022</p>
          <div className="flex space-x-4">
            <FooterLink href="/privacy">PRIVACY</FooterLink>
            <span>-</span>
            <FooterLink href="/terms">TERMS</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
