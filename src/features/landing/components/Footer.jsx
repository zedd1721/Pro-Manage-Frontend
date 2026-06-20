import { Globe, BriefcaseBusiness, MessageCircle } from "lucide-react";
import logo from "@/assets/promanage_logo.svg";

const footerLinks = {
  Product: ['Features', 'Integrations', 'Changelog', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Resources: ['Documentation', 'Help Center', 'Community', 'Templates', 'API'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'],
};

export default function Footer() {
  return (
    <footer className="border-t border-black/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="ProManage" className="w-8 h-8" />
              <span className="text-lg font-bold text-text-primary">ProManage</span>
            </a>
            <p className="text-sm text-text-muted mb-4 max-w-xs">
              The all-in-one workspace for project management and team collaboration.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-lg bg-surface-light flex items-center justify-center hover:bg-surface-lighter transition-colors">
                <Globe className="w-4 h-4 text-text-muted" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-surface-light flex items-center justify-center hover:bg-surface-lighter transition-colors">
                <MessageCircle className="w-4 h-4 text-text-muted" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-surface-light flex items-center justify-center hover:bg-surface-lighter transition-colors">
                <BriefcaseBusiness className="w-4 h-4 text-text-muted" />
              </a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-text-primary mb-3">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-text-muted hover:text-text-secondary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-black/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted">
            {new Date().getFullYear()} ProManage. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-text-muted hover:text-text-secondary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-text-muted hover:text-text-secondary transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-text-muted hover:text-text-secondary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
