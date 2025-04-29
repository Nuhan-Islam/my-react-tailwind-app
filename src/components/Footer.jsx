function Footer() {
    return (
      <footer className="border-t border-gray-200 p-4 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a
              to="/quickstart"
              className="text-gray-600 hover:text-green-600 flex items-center"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Previous
            </a>
            <a
              to="/sdks"
              className="text-gray-600 hover:text-green-600 flex items-center"
            >
              Next
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;