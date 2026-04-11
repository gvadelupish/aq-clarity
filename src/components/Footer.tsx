import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="section-divider">
    <div className="container-narrow section-padding">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <span className="font-display text-2xl tracking-wider text-foreground">AQ</span>
          <p className="mt-4 text-warm-grey text-sm">Executive Coaching</p>
          <p className="mt-1 text-warm-grey text-sm">Barcelona, Spain</p>
          <a href="mailto:contact@aqcoach.com" className="mt-1 block text-warm-grey text-sm hover:text-foreground transition-colors">
            contact@aqcoach.com
          </a>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-warm-grey mb-6">Pages</h4>
          <ul className="space-y-3">
            <li><Link to="/" className="text-sm text-warm-grey hover:text-foreground transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-sm text-warm-grey hover:text-foreground transition-colors">About me</Link></li>
            <li><Link to="/book" className="text-sm text-warm-grey hover:text-foreground transition-colors">Book a session</Link></li>
            <li><Link to="/privacy-policy" className="text-sm text-warm-grey hover:text-foreground transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-warm-grey mb-6">Certifications</h4>
          <ul className="space-y-2 text-sm text-warm-grey">
            <li>ICF ACC Certified Coach</li>
            <li>Center for Executive Coaching (CEC)</li>
            <li>EQ-i 2.0 Certified</li>
          </ul>
        </div>
      </div>

      <div className="section-divider mt-16 pt-8 text-center">
        <p className="text-warm-grey text-xs">© 2025 AQ Coaching. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
