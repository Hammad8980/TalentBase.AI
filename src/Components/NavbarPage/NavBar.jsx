import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { Popover, OverlayTrigger } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser
} from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ icon, text }) => {
  const [show, setShow] = useState(false);
  const [showSm, setShowSm] = useState(false);

  const handleToggle = () => setShow(!show);
  const handleToggleSm = () => setShowSm(!showSm);

  const closePopover = () => setShow(false);

  const popover = (
    <Popover id="avatar-popover">
      <Popover.Body>
        <div className="popover-content">
          <div className="popover-header">
            <div className="avatar"></div>
            <span className="username">JOHN DOE</span>
          </div>
          <div className="popover-body">
            <div className="popover-item" onClick={closePopover}>
              <Link to="/studentDashboard">
                <svg
                  width="38"
                  height="25"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4507 1.59235H8.8881C5.03267 1.59235 1.90723 4.70923 1.90723 8.5541V16.096C1.90723 19.9409 5.03267 23.0577 8.8881 23.0577H16.4507C20.3061 23.0577 23.4316 19.9409 23.4316 16.096V8.5541C23.4316 4.70923 20.3061 1.59235 16.4507 1.59235Z"
                    stroke="grey"
                    stroke-width="2"
                  />
                  <path
                    d="M7.63379 17.2238V11.3075M12.8124 17.2238V7.4263M17.7049 17.2238V9.79561"
                    stroke="grey"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                Dashboard
              </Link>
            </div>
            <hr />
            <div className="popover-item" onClick={closePopover}>
              <svg
                width="38"
                height="23"
                viewBox="0 0 36 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6776 0.855713L0.0510254 8.812L5.36978 11.7028V19.6591L14.6776 24.7246L23.9854 19.6591V11.7028L26.6448 10.2574V19.4204H29.3042V8.812L14.6776 0.855713ZM23.7461 8.812L14.6776 13.7449L5.60913 8.812L14.6776 3.8791L23.7461 8.812ZM21.3261 18.0943L14.6776 21.7012L8.02916 18.0943V13.1482L14.6776 16.7683L21.3261 13.1482V18.0943Z"
                  fill="grey"
                />
              </svg>
              Learning Path
            </div>
            <div className="popover-item" onClick={closePopover}>
              <svg
                width="37"
                height="23"
                viewBox="0 0 26 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.634 0.769653L0.935303 5.52172V12.6498C0.935303 19.2433 5.50008 25.4091 11.634 26.906C17.7679 25.4091 22.3327 19.2433 22.3327 12.6498V5.52172L11.634 0.769653ZM19.9552 12.6498C19.9552 18.0197 16.4127 22.9737 11.634 24.4468C6.85525 22.9737 3.31279 18.0197 3.31279 12.6498V7.06615L11.634 3.37141L19.9552 7.06615V12.6498ZM6.17766 13.3508L4.50153 15.0259L9.25651 19.7779L18.7665 10.2738L17.0903 8.58681L9.25651 16.4158L6.17766 13.3508Z"
                  fill="grey"
                />
              </svg>
              Privacy Policy
            </div>
            <div className="popover-item" onClick={closePopover}>
              <svg
                width="36"
                height="25"
                viewBox="0 0 25 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6769 18.4893H12.8928V16.2794H10.6769V18.4893ZM11.7848 0.810425C10.3298 0.810425 8.88906 1.09622 7.5448 1.6515C6.20054 2.20678 4.97912 3.02067 3.95026 4.04669C1.87241 6.11883 0.705078 8.92926 0.705078 11.8597C0.705078 14.7902 1.87241 17.6006 3.95026 19.6727C4.97912 20.6988 6.20054 21.5126 7.5448 22.0679C8.88906 22.6232 10.3298 22.909 11.7848 22.909C14.7234 22.909 17.5416 21.7449 19.6194 19.6727C21.6973 17.6006 22.8646 14.7902 22.8646 11.8597C22.8646 10.4087 22.578 8.9719 22.0212 7.63133C21.4644 6.29077 20.6483 5.07271 19.6194 4.04669C18.5906 3.02067 17.3691 2.20678 16.0249 1.6515C14.6806 1.09622 13.2399 0.810425 11.7848 0.810425ZM11.7848 20.6991C6.89866 20.6991 2.92103 16.7325 2.92103 11.8597C2.92103 6.98698 6.89866 3.02028 11.7848 3.02028C16.671 3.02028 20.6486 6.98698 20.6486 11.8597C20.6486 16.7325 16.671 20.6991 11.7848 20.6991ZM11.7848 5.23014C10.6094 5.23014 9.48215 5.69579 8.65101 6.52465C7.81987 7.3535 7.35293 8.47767 7.35293 9.64986H9.56889C9.56889 9.06377 9.80235 8.50168 10.2179 8.08725C10.6335 7.67282 11.1971 7.44 11.7848 7.44C12.3725 7.44 12.9362 7.67282 13.3518 8.08725C13.7673 8.50168 14.0008 9.06377 14.0008 9.64986C14.0008 11.8597 10.6769 11.5835 10.6769 15.1745H12.8928C12.8928 12.6884 16.2167 12.4122 16.2167 9.64986C16.2167 8.47767 15.7498 7.3535 14.9187 6.52465C14.0875 5.69579 12.9603 5.23014 11.7848 5.23014Z"
                  fill="grey"
                />
              </svg>
              About
            </div>
            <div className="popover-item" onClick={closePopover}>
              <svg
                width="36"
                height="23"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_81_1339)">
                  <path
                    d="M13.2481 0.0861837C13.5756 0.0861837 13.8687 0.289514 13.979 0.593953L14.7656 2.76836C15.0474 2.83836 15.2892 2.90836 15.4942 2.98169C15.7182 3.06169 16.0067 3.1828 16.3633 3.34835L18.1949 2.3817C18.3444 2.30271 18.5156 2.2742 18.6827 2.30044C18.8499 2.32669 19.004 2.40627 19.1219 2.52726L20.733 4.18834C20.9469 4.40945 21.0071 4.73278 20.8867 5.01499L20.0277 7.02274C20.1703 7.28385 20.284 7.50718 20.3709 7.69384C20.4645 7.89717 20.5803 8.17717 20.7185 8.53827L22.7206 9.39381C23.0215 9.52159 23.2075 9.82158 23.1875 10.1427L23.0404 12.4482C23.0303 12.598 22.9764 12.7415 22.8853 12.861C22.7942 12.9805 22.6699 13.0707 22.5279 13.1204L20.6316 13.7926C20.577 14.0537 20.5202 14.2771 20.46 14.466C20.363 14.7577 20.2522 15.0446 20.128 15.3259L21.0806 17.4259C21.1478 17.5735 21.1659 17.7386 21.1322 17.8971C21.0986 18.0557 21.0149 18.1993 20.8934 18.307L19.0818 19.9203C18.9625 20.0261 18.8136 20.093 18.6551 20.1121C18.4966 20.1312 18.336 20.1015 18.1949 20.027L16.3276 19.0403C16.0355 19.1946 15.7341 19.3308 15.4251 19.4481L14.6096 19.7525L13.8854 21.7525C13.8317 21.899 13.7349 22.0258 13.6076 22.1164C13.4804 22.2071 13.3286 22.2572 13.1723 22.2603L11.0554 22.3081C10.8949 22.3123 10.7371 22.2667 10.6036 22.1778C10.4701 22.0889 10.3676 21.9609 10.31 21.8114L9.45659 19.5592C9.16541 19.46 8.87709 19.3525 8.59201 19.237C8.35883 19.1363 8.12918 19.0278 7.90346 18.9114L5.78656 19.8136C5.64708 19.873 5.4933 19.8906 5.34395 19.8644C5.1946 19.8381 5.05613 19.7692 4.94537 19.6659L3.37887 18.2003C3.26224 18.0917 3.18281 17.9492 3.15182 17.7931C3.12083 17.637 3.13984 17.4751 3.20617 17.3304L4.11644 15.3526C3.99538 15.1184 3.88314 14.8797 3.77996 14.6371C3.65952 14.3401 3.54806 14.0396 3.44572 13.736L1.45138 13.1304C1.28927 13.0816 1.14787 12.9807 1.04915 12.8435C0.950434 12.7062 0.899914 12.5403 0.905439 12.3715L0.98343 10.2371C0.988981 10.0979 1.0326 9.96277 1.10958 9.84645C1.18656 9.73012 1.29397 9.637 1.42018 9.57714L3.51257 8.57494C3.6095 8.2205 3.69417 7.94495 3.76882 7.74384C3.87393 7.47523 3.99066 7.21128 4.11867 6.95274L3.21174 5.04166C3.14292 4.89653 3.12202 4.73338 3.15205 4.57565C3.18208 4.41793 3.26149 4.27377 3.37887 4.1639L4.94314 2.69059C5.0528 2.58745 5.19001 2.5181 5.33825 2.4909C5.4865 2.4637 5.63947 2.4798 5.77876 2.53726L7.89343 3.40835C8.1274 3.2528 8.33909 3.12725 8.53073 3.02614C8.75913 2.90503 9.06441 2.77836 9.44879 2.6417L10.1841 0.596176C10.2385 0.446476 10.3379 0.317159 10.4687 0.225883C10.5995 0.134606 10.7554 0.0858191 10.915 0.0861837H13.2481ZM12.7021 1.61616H11.4621L10.788 3.49835C10.7484 3.6081 10.6843 3.70744 10.6005 3.78885C10.5167 3.87027 10.4155 3.93165 10.3045 3.96834C9.81869 4.12945 9.46774 4.26834 9.26273 4.37612C9.04547 4.49056 8.76804 4.665 8.43825 4.89833C8.33032 4.97387 8.205 5.02102 8.07392 5.03539C7.94284 5.04976 7.81025 5.0309 7.68843 4.98055L5.64952 4.14167L4.85513 4.89055L5.68294 6.63497C5.7325 6.73876 5.75766 6.85245 5.7565 6.9674C5.75535 7.08235 5.7279 7.19552 5.67626 7.29829C5.45343 7.74384 5.30302 8.07272 5.22725 8.27494C5.11107 8.61157 5.01069 8.95342 4.92643 9.29937C4.89844 9.40765 4.84703 9.50851 4.77582 9.59488C4.70461 9.68125 4.61531 9.75104 4.51419 9.79936L2.51985 10.7538L2.47974 11.8427L4.28468 12.3893C4.52422 12.4615 4.71363 12.6449 4.79273 12.8804C4.971 13.4137 5.11361 13.8071 5.21611 14.0537C5.35193 14.3668 5.50213 14.6734 5.66623 14.9726C5.72175 15.0756 5.75256 15.19 5.75623 15.3068C5.7599 15.4236 5.73634 15.5397 5.6874 15.6459L4.85067 17.4659L5.64283 18.2081L7.62826 17.3615C7.73521 17.3159 7.85099 17.2946 7.9672 17.2992C8.0834 17.3039 8.19712 17.3342 8.3001 17.3881C8.70677 17.6015 9.00982 17.7492 9.20145 17.8303C9.39643 17.9115 9.76967 18.047 10.3112 18.2314C10.4186 18.2681 10.5167 18.3279 10.5984 18.4066C10.68 18.4853 10.7433 18.5811 10.7836 18.687L11.5724 20.7659L12.6041 20.7436L13.2692 18.9059C13.3073 18.801 13.3677 18.7057 13.4464 18.6264C13.5251 18.5472 13.6201 18.486 13.7249 18.447L14.8803 18.0159C15.1722 17.9081 15.5265 17.7381 15.9399 17.5048C16.0543 17.4407 16.183 17.4063 16.3142 17.4047C16.4454 17.4032 16.5749 17.4345 16.6908 17.4959L18.4478 18.4237L19.4361 17.5448L18.5715 15.6415C18.5271 15.5438 18.504 15.4378 18.5039 15.3305C18.5037 15.2232 18.5263 15.1171 18.5704 15.0193C18.7732 14.5671 18.9102 14.226 18.9793 14.0082C19.0473 13.7949 19.1174 13.4871 19.1854 13.0915C19.2088 12.9572 19.2677 12.8315 19.356 12.7274C19.4443 12.6233 19.5589 12.5445 19.6879 12.4993L21.524 11.8493L21.6042 10.5827L19.7993 9.81158C19.7032 9.77079 19.6164 9.71095 19.5442 9.6357C19.472 9.56045 19.4159 9.47135 19.3793 9.37381C19.2506 9.01964 19.1101 8.66983 18.9581 8.32494C18.8142 8.02465 18.6581 7.73033 18.4902 7.44273C18.432 7.34112 18.3982 7.22746 18.3914 7.11064C18.3847 6.99382 18.4051 6.87703 18.4512 6.76941L19.2589 4.88055L18.4077 4.00279L16.7499 4.87833C16.6416 4.93558 16.5214 4.9667 16.399 4.96921C16.2765 4.97172 16.1551 4.94554 16.0446 4.89277C15.6927 4.71829 15.3328 4.56034 14.9661 4.41945C14.6534 4.31473 14.3345 4.22938 14.0113 4.1639C13.883 4.13678 13.7638 4.07758 13.6648 3.99186C13.5657 3.90615 13.4902 3.79673 13.4453 3.6739L12.7021 1.61616ZM12.0737 6.35386C14.7867 6.35386 16.9872 8.52383 16.9872 11.1993C16.9872 13.8749 14.7867 16.0437 12.0737 16.0437C9.35966 16.0437 7.16032 13.8749 7.16032 11.1993C7.16032 8.52383 9.35966 6.35497 12.0737 6.35497M12.0737 7.88606C10.2164 7.88606 8.71122 9.36937 8.71122 11.2005C8.71122 13.0315 10.2164 14.516 12.0737 14.516C13.9299 14.516 15.4352 13.0315 15.4352 11.2005C15.4352 9.36937 13.931 7.88606 12.0737 7.88606Z"
                    fill="grey"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_81_1339">
                    <rect
                      width="22.2831"
                      height="22.2219"
                      fill="white"
                      transform="translate(0.905518 0.0861816)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Settings
            </div>
            <div className="popover-item" onClick={closePopover}>
              <svg
                width="36"
                height="21"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8645 21.0457C14.1413 21.0457 14.4067 20.9361 14.6024 20.7409C14.7981 20.5457 14.9081 20.281 14.9081 20.005C14.9081 19.729 14.7981 19.4643 14.6024 19.2691C14.4067 19.074 14.1413 18.9643 13.8645 18.9643H5.16825C4.43021 18.9643 3.72239 18.6719 3.20051 18.1515C2.67863 17.6311 2.38545 16.9252 2.38545 16.1892V5.08857C2.38545 4.35256 2.67863 3.64668 3.20051 3.12624C3.72239 2.6058 4.43021 2.31342 5.16825 2.31342H13.8645C14.1413 2.31342 14.4067 2.20378 14.6024 2.00861C14.7981 1.81345 14.9081 1.54874 14.9081 1.27274C14.9081 0.996732 14.7981 0.73203 14.6024 0.536864C14.4067 0.341698 14.1413 0.232056 13.8645 0.232056H5.16825C3.87667 0.232056 2.63799 0.743723 1.7247 1.6545C0.811419 2.56527 0.29834 3.80054 0.29834 5.08857V16.1892C0.29834 17.4772 0.811419 18.7125 1.7247 19.6233C2.63799 20.534 3.87667 21.0457 5.16825 21.0457H13.8645ZM15.2434 5.3647C15.3441 5.27193 15.4621 5.19985 15.5907 5.15257C15.7193 5.10529 15.856 5.08374 15.993 5.08915C16.1299 5.09456 16.2645 5.12683 16.3889 5.18411C16.5134 5.24139 16.6253 5.32256 16.7183 5.42298L20.8925 9.9326C21.0707 10.1249 21.1696 10.3771 21.1696 10.6389C21.1696 10.9007 21.0707 11.1529 20.8925 11.3452L16.7183 15.8548C16.5303 16.0574 16.2693 16.1772 15.9927 16.1878C15.7161 16.1985 15.4466 16.0992 15.2434 15.9117C15.0403 15.7242 14.9201 15.4639 14.9094 15.188C14.8987 14.9122 14.9983 14.6434 15.1864 14.4408L17.7438 11.6782H6.90751C6.63074 11.6782 6.36531 11.5685 6.1696 11.3734C5.9739 11.1782 5.86396 10.9135 5.86396 10.6375C5.86396 10.3615 5.9739 10.0968 6.1696 9.90161C6.36531 9.70645 6.63074 9.5968 6.90751 9.5968H17.7424L15.185 6.83414C15.0919 6.73375 15.0197 6.61606 14.9723 6.48781C14.9248 6.35955 14.9032 6.22324 14.9087 6.08665C14.9141 5.95007 14.9464 5.81589 15.0039 5.69177C15.0613 5.56766 15.1427 5.45744 15.2434 5.3647Z"
                  fill="grey"
                />
              </svg>
              Logout
            </div>
          </div>
        </div>
      </Popover.Body>
    </Popover>
  );
  return (
    <nav className="App-header navbar sticky-top navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          TALENTBASE.
        </a>
        <div>
          <div className="d-flex   " style={{ gap: 0, position: "relative" }}>
            <div className="avatar-popover-container  relative">
              <div className="larger-none">
                <OverlayTrigger
                  trigger="click"
                  placement="bottom-start"
                  overlay={popover}
                  show={showSm}
                  onToggle={handleToggleSm}
                >
                  <FontAwesomeIcon
                    className="avatar-icon "
                    icon={faUser}
                    onClick={handleToggleSm}
                  />
                </OverlayTrigger>
              </div>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="true"
              aria-label="Toggle navigation"
              onClick={closePopover}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link
              className="nav-link"
              aria-current="page"
              to="/"
              onClick={closePopover}
            >
              Home
            </Link>
            <Link className="nav-link" to="/startups" onClick={closePopover}>
              Startups
            </Link>
            <Link className="nav-link" to="/students" onClick={closePopover}>
              Students
            </Link>
            <Link className="nav-link" to="/about" onClick={closePopover}>
              About
            </Link>
            <Link className="nav-link" to="/blog" onClick={closePopover}>
              Blog
            </Link>
            <Link className="nav-link" to="/tnsfs" onClick={closePopover}>
              TNSFS
            </Link>
            <Link className="nav-link" to="/contact" onClick={closePopover}>
              Contact
            </Link>
          </div>

          <div className="avatar-popover-container md-none">
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popover}
              show={show}
              onToggle={handleToggle}
            >
              <FontAwesomeIcon
                className="avatar-icon"
                icon={faUser}
                onClick={handleToggle}
              />
            </OverlayTrigger>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;