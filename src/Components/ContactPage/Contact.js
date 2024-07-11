import React from 'react'

const Contact = () => {
  return (
    <div className="Contact PrimaryFont">
      <div className="SidePadding BlogDiv1">
        <p className='BlogDiv1P1'>Contact Us<span className='' style={{ color: '#ff7f50' }}>.</span></p>
      </div>
      <div className="BlogDiv2">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
          <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 24 characters.<br />
            Must begin with a letter.<br />
            Letters, numbers, underscores, hyphens allowed.
          </p>


          <label htmlFor="email">
            Password:
          </label>
          <input
            type="text"
            id="email"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />


          <label htmlFor="phone">
            Phone:
          </label>
          <input
            type="phone"
            id="confirm_pwd"
            onChange={(e) => setMatchPwd(e.target.value)}
            value={matchPwd}
            required
            aria-invalid={validMatch ? "false" : "true"}
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
          />

          <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Contact*/