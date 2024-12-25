
const Footer = () => {
  return (
    <>
      <footer>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="p-5 flex flex-col md:flex-row md:justify-between md:space-x-8 space-y-8 md:space-y-0">
            <div className="w-full md:w-1/4">
              <h2 className="font-bold text-3xl">Funiro.</h2>
              <p className="leading-5 mt-4 text-mygray">
                400 University Drive Suite 200 Coral Gables,</p>
                <span className="text-mygray">FL 33134 USA</span>
            </div>

            <div className="w-full md:w-1/4">
              <h4 className="text-mygray">Links</h4>
              <ul className="mt-4 space-y-2">
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="w-full md:w-1/4">
              <h4 className="text-mygray">Help</h4>
              <ul className="mt-4 space-y-2">
                <li>Payment Option</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
              </ul>
            </div>

            <div className="w-full md:w-1/4">
              <h4 className="text-mygray">Newsletter</h4>
              <div className="flex items-center gap-2 mt-4">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="w-full py-2 underline mt-4 focus:outline-none"
              />
              <button type="submit" className="mt-4 font-bold underline py-2">
                SUBSCRIBE
              </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-4 text-center md:text-left border-t-2 border-gray-300">
            <p>2023 furino. All rights reverved</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
