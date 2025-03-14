const Footer = () => {
    return (
        <footer className="footer-1 py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
            <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                <h6 className="font-bold mb-2">Phone</h6>
                <p className="not-italic mb-4 text-sm">
                  04xx xx xx xx
                </p>
              </div>
              <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                <h6 className="font-bold mb-2">Address</h6>
                <address className="not-italic mb-4 text-sm">
                  Defensive street 7<br/>
                  Brussel, Belgium
                </address>
              </div>
              <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
                <a href="/contact" className="font-semibold px-4 py-2 bg-asgard-blue hover:bg-white hover:text-asgard-blue transition duration-500 rounded text-white">CONTACT</a>
              </div>
            </div>
          </div>
        </footer>
    );
};

export default Footer;