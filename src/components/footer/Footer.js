import React ,{useState}from 'react';
import { Link } from 'react-router-dom';

import { createSubscribe } from '../../config/fire';






import './footer.css';

function Footer() {
  const [registerForm, setregisterForm] = useState({});
  function submit() {
  
    createSubscribe(registerForm);
    setregisterForm({email:""})
   
  }  

  return (
    <div className=" footer " >
      <div className="container footer d-md-flex justify-content-between align-items-center justify-content-center  ">
        <div className="subscribe d-flex flex-column gap-4">
          <h2 className=" text-xl">Subscribe</h2>
          <p>We’ll never to spam you or share your email</p>
          <div>
            <form className="input-group mb-3">
              <input
                type="text"
                className="form-control sub-input"
                placeholder="Enter your e-mail"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                onChange={(e) => {
                  setregisterForm({  email: e.target.value });
                }}
                value={registerForm.email}
              />
              <Link to="/edit-thanks">
              <button
               onClick={() => {
                submit();
              }}
                className="sub-btn d-flex align-items-center justify-content-center"
                type="button"
                id="button-addon2"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6327 12.3673L8.04212 14.5401C7.59967 14.7861 7.05302 14.7438 6.65376 14.4325L0.486233 9.74981C-0.307758 9.13085 -0.0922473 7.87688 0.862835 7.55852L23.3377 0.0669056C24.3237 -0.261766 25.2618 0.676297 24.9331 1.66231L17.4415 24.1372C17.1231 25.0922 15.8691 25.3078 15.2502 24.5138L10.5675 18.3462C10.2562 17.947 10.2139 17.4003 10.4599 16.9579L12.6327 12.3673Z"
                    fill="#1A1A1A"
                  />
                </svg>
              </button>
              </Link>
             
            </form>
          </div>
        </div>
        <div className="contact d-flex flex-column justify-content-between gap-4">
          <div className="links">
            <ul className="d-flex align-items-center justify-content-center gap-4">
              <li className="">Home</li>
              <li className="l">Blogs</li>
              <li className="">About</li>
              <li className="">Contact</li>
            </ul>
          </div>
          <div className="social">
            <ul className="d-flex align-items-center justify-content-center gap-4">
              <li className="">
                <svg
                  width="35"
                  height="31"
                  viewBox="0 0 35 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.2578 2.62682C30.9347 2.28241 32.5884 1.39473 32.5884 1.39473C33.3256 1.04856 33.6012 1.31906 33.2037 2.01651C33.2037 2.01651 32.2112 4.07413 30.6949 5.02984C32.1797 4.84341 33.52 4.29924 33.52 4.29924C34.2926 4.0365 34.5007 4.66055 33.9952 5.29167C33.9952 5.29167 32.6842 7.11819 31.25 8.20833C31.2624 8.53802 31.2682 8.47983 31.2682 8.81639C31.2682 20.4922 25.3761 30.8125 10.3789 30.8125C4.74279 30.8125 1.72544 28.5762 1.72544 28.5762C0.269777 27.8354 0.435023 26.9706 2.05229 26.7287C2.05229 26.7287 7.48179 26.2115 9.99381 24.1372C-4.37503 16.9583 1.48563 3.05932 1.48563 3.05932C1.54196 2.25827 2.09591 2.05424 2.68917 2.61642C2.68917 2.61642 9.15627 9.35606 16.7492 9.67889C16.6231 9.11272 16.5601 8.52497 16.5601 7.91857C16.5601 3.64926 19.8479 0.1875 23.8993 0.1875C26.0129 0.1875 27.922 1.12555 29.2578 2.62682Z"
                    fill="#1A1A1A"
                  />
                </svg>
              </li>
              <li className="">
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.458374 16.5392C0.458374 7.65806 7.64047 0.458496 16.5 0.458496C25.3596 0.458496 32.5417 7.65806 32.5417 16.5392C32.5417 24.8824 26.2033 31.7416 18.0902 32.5418C18.1336 32.5342 18.1769 32.526 18.2202 32.5173V21.1552H22.3908L23.0148 16.3015H18.2202V13.2025C18.2202 11.7971 18.6093 10.8397 20.6199 10.8397L23.1837 10.8384V6.49731C22.7402 6.43796 21.2185 6.30601 19.4476 6.30601C15.7511 6.30601 13.22 8.56781 13.22 12.7221V16.3015H9.03875V21.1552H13.22V32.2834C5.93355 30.7658 0.458374 24.2934 0.458374 16.5392Z"
                    fill="#1A1A1A"
                  />
                </svg>
              </li>
              <li className="">
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.7259 13.3236V18.6754C16.7259 19.2282 17.1737 19.6761 17.7266 19.6754C19.597 19.673 23.6064 19.668 25.5202 19.668C24.1419 23.7873 21.9994 26.03 16.7259 26.03C11.3888 26.03 7.22328 21.7633 7.22328 16.4995C7.22328 11.2371 11.3888 6.97037 16.7259 6.97037C19.5473 6.97037 21.3699 7.94865 23.0415 9.31174C24.3792 7.99238 24.2675 7.80372 27.6716 4.63274C24.7816 2.03899 20.9409 0.458496 16.7259 0.458496C7.74238 0.458496 0.458374 7.64005 0.458374 16.4995C0.458374 25.359 7.74238 32.5418 16.7259 32.5418C30.1541 32.5418 33.4363 21.0111 32.3486 13.3236H16.7259Z"
                    fill="#1A1A1A"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;