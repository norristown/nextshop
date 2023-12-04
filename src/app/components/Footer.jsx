function Footer() {
  return (
    <footer className="bg-zinc-300 mt-auto">
      <div className="container mx-auto p-12">
        <div className="footer-links m-2">
          <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
            <div className="flex flex-col items-center">
              <div className="section-title my-3">Section Heading</div>
              <div className="footer-link py-2 text-zinc-600">Log In</div>
              <div className="footer-link py-2 text-zinc-600">Sign Up</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="section-title my-3">Section Heading</div>
              <div className="footer-link py-2 text-zinc-600">Company</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="section-title my-3">Section Heading</div>
              <div className="footer-link py-2 text-zinc-600">Log In</div>
              <div className="footer-link py-2 text-zinc-600">Sign Up</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-zinc-600 py-2 text-center">
        All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
