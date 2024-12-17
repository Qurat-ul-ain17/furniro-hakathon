
const Footer = () => {
  return (
    <>
      <footer>
        <div className="max-w-7xl mx-auto">
          <div className="p-5 mx-16 leading-10 flex space-x-16">
            <div className="w-[30%]">
              <h2 className="font-bold text-[2rem]">Funiro.</h2>
              <p className="leading-3 mt-12 text-[#9F9F9F]">
                400 University Drive Suite 200 Coral Gables,</p>
                <span className="text-[#9F9F9F]">FL 33134 USA</span>
            </div>

            <div>
              <h4 className="text-[#9F9F9F]">Links</h4>
              <ul className="mt-10">
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#9F9F9F]">Help</h4>
              <ul className="mt-10">
                <li>Payment Option</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#9F9F9F]">Newsletter</h4>
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="underline mt-10"
              />
              <button type="submit" className="font-bold underline">
                SUBSCRIBE
              </button>
            </div>
          </div>
          <div className="py-4 ml-24 max-w-7xl border-t-2 border-gray-300">
            <p>2023 furino. All rights reverved</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
