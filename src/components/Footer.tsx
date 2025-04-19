
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-anthracite text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-yellow-400 rounded-full p-2 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-anthracite"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <span className="font-poster text-xl font-bold text-white">
                HomeServicePro<span className="text-yellow-400">Hub</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting homeowners with trusted service professionals for all home repair and improvement needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">For Homeowners</h3>
            <ul className="space-y-2">
              <li><Link to="/search" className="text-gray-400 hover:text-yellow-400">Find Services</Link></li>
              <li><Link to="/special-offers" className="text-gray-400 hover:text-yellow-400">Special Offers</Link></li>
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-yellow-400">How It Works</Link></li>
              <li><Link to="/reviews" className="text-gray-400 hover:text-yellow-400">Reviews</Link></li>
              <li><Link to="/safety" className="text-gray-400 hover:text-yellow-400">Safety & Trust</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">For Providers</h3>
            <ul className="space-y-2">
              <li><Link to="/register/provider" className="text-gray-400 hover:text-yellow-400">Join as a Pro</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-yellow-400">Pricing</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-yellow-400">Resources</Link></li>
              <li><Link to="/success-stories" className="text-gray-400 hover:text-yellow-400">Success Stories</Link></li>
              <li><Link to="/help-support" className="text-gray-400 hover:text-yellow-400">Help & Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-yellow-400">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-yellow-400">Careers</Link></li>
              <li><Link to="/press" className="text-gray-400 hover:text-yellow-400">Press</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-yellow-400">Contact</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-yellow-400">Blog</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              © {new Date().getFullYear()} HomeServiceProHub. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/terms" className="hover:text-yellow-400">Terms of Service</Link>
              <Link to="/privacy" className="hover:text-yellow-400">Privacy Policy</Link>
              <Link to="/cookies" className="hover:text-yellow-400">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
