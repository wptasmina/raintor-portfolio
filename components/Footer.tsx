import React from "react";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer = ({
  logo = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    alt: "blocks for shadcn/ui",
    title: "DEVLOP.ME",
    url: "https://www.shadcnblocks.com",
  },
  tagline = "Components made easy.",
  menuItems = [
    {
      title: "Product",
      links: [
        { text: "Overview", url: "#" },
        { text: "Pricing", url: "#" },
        { text: "Marketplace", url: "#" },
        { text: "Features", url: "#" },
        { text: "Integrations", url: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", url: "#" },
        { text: "Team", url: "#" },
        { text: "Blog", url: "#" },
        { text: "Careers", url: "#" },
        { text: "Contact", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Help", url: "#" },
        { text: "Sales", url: "#" },
        { text: "Advertise", url: "#" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Twitter", url: "#" },
        { text: "Instagram", url: "#" },
        { text: "LinkedIn", url: "#" },
      ],
    },
  ],
  copyright = "© 2024 Shadcnblocks.com. All rights reserved.",
  bottomLinks = [
    { text: "BESNIK", url: "#" },
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
}: FooterProps) => {
  return (
    <footer className="bg-black rounded-3xl dark:bg-black py-20 text-gray-700 dark:text-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <a href={logo.url} className="flex items-center space-x-2">
              <span className="text-xl font-semibold">{logo.title}</span>
            </a>
            <p className="mt-4 text-sm font-medium">{tagline}</p>
          </div>

          {menuItems.map((section, idx) => (
            <div key={idx}>
              <h3 className="mb-4 font-semibold text-[#C5FF41] dark:text-white">
                {section.title}
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      className="hover:text-primary dark:hover:text-white transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400 gap-4">
          <p>{copyright}</p>
          <ul className="flex space-x-4">
            {bottomLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.url}
                  className="underline hover:text-primary dark:hover:text-white transition-colors"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
