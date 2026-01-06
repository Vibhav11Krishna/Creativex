import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Row: Logo + Tagline */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-10 mb-10">
          {/* Logo */}
          <img
            src="https://ik.imagekit.io/siddharth637/codetutor/white-logo.png?updatedAt=1757616572785"
            alt="Logo"
            className="h-10" // bigger logo
          />

          <p className="mt-6 md:mt-0 text-gray-400 text-center md:text-right">
            One Stop Career Solution
          </p>
        </div>

        {/* Middle Row: About + Solutions + Quick Links + Subscribe */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4">About CareerX</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              CareerX is your trusted companion in navigating the world of careers, 
              skills, and opportunities. From assessments to AI mentorship, we 
              guide students at every step of their journey.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Career Assessment</a></li>
              <li><a href="#" className="hover:text-white">Course Finder</a></li>
              <li><a href="#" className="hover:text-white">Skill Development</a></li>
              <li><a href="#" className="hover:text-white">AI Mentorship</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Solution</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4">Subscribe</h3>
            <p className="text-sm text-gray-400 mb-3">
              Get the latest updates, career tips, and opportunities straight to your inbox.
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-md bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 mt-12 pt-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} CareerX. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex gap-4 my-4 md:my-0">
            <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
            <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
          </div>

          {/* Links */}
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Cookies</a>
            <a href="#" className="hover:text-white">Sitemap</a>
            <button className="flex items-center gap-2 hover:text-white">
              <Globe className="w-4 h-4" /> English
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
