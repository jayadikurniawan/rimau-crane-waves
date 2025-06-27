
const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">PT RIMAU TRISUKSES PERKASA</h3>
            <p className="text-blue-200 mb-4">
              Leading provider of floating crane services and maritime solutions in Indonesia.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-2 text-blue-200">
              <p>Jalan AM Sangaji No.11 BCDE</p>
              <p>Kel. Petojo Utara, Kec. Gambir</p>
              <p>Jakarta Pusat - 10130</p>
              <p>Phone: +62 81913333888</p>
              <p>Email: rimautrisuksesperkasa@gmail.com</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-blue-200">
              <li>Heavy Lifting and Transport</li>
              <li>Port & Harbour Operation</li>
              <li>Rental and Leasing</li>
              <li>Maritime Consulting</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © 2024 PT Rimau Trisukses Perkasa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
