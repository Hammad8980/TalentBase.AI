import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faMessage, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*@[a-zA-Z0-9]*.com$/;

const Contact = () => {
  const userRef = useRef();

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [phone, setPhone] = useState('');

  const [message, setMessage] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("i got submit");
  };

  return (
    <div className="Contact SidePadding">
      <div className="ContactDiv1">
        <p className="BlogDiv1P1">Contact Us<span style={{ color: '#ff7f50' }}>.</span></p>
      </div>
      <div className="ContactDiv2">
        <div className="ContactDiv2Div1">
          <img className='ContactDiv2Div1img' src="./Contact.png" alt="A lady" />
        </div>
        <div className="ContactDiv2Div2">
          <form onSubmit={handleSubmit}>
            <div className="FormDivs">
              <FontAwesomeIcon icon={faUser} />
              <label htmlFor="username" className="OffScreen">
                Username:
              </label>
              <input
                type="text"
                id="username"
                className="FormBorder"
                placeholder="Name"
                ref={userRef}
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>

            <div className="FormDivs">
              <FontAwesomeIcon icon={faEnvelope} />
              <label htmlFor="email" className="OffScreen">
                Email:
              </label>
              <input
                type="text"
                id="email"
                className="FormBorder"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                aria-describedby="emailcheck"
                aria-invalid={validEmail ? "false" : "true"}
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
            </div>

            <div className="FormDiv">
              <p id="emailcheck" className={emailFocus && !validEmail && email ? "Instructions" : "OffScreen"}>
                Invalid Email Format!
              </p>
            </div>

            <div className="FormDivs">
              <FontAwesomeIcon icon={faPhone} />
              <label htmlFor="phone" className="OffScreen">
                Phone:
              </label>
              <input
                type="text"
                id="phone"
                className="FormBorder"
                placeholder="Phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
              />
            </div>

            <div className="FormDivs">
              <FontAwesomeIcon icon={faMessage} />
              <label htmlFor="message" className="OffScreen">
                Message:
              </label>
              <input
                type="text"
                id="message"
                className="FormBorder"
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
              />
            </div>
            <div className="FormDivs" style={{justifyContent: "right"}}>
              <button className="SecondaryColor FormButton" disabled={!validEmail && name && phone && message}>Submit <FontAwesomeIcon icon={faLocationArrow} /></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
