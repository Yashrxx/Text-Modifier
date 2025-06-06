import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
<<<<<<< HEAD
      {/* <h1 className="Hello world"  >{props.title}</h1> */}
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link style={{ color: "black" }} className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link style={{ color: "black" }} className="nav-link disabled" aria-disabled="true" href="/">{props.aboutText}</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          <div className="d-flex">
            <div className="bg-primary rounded mx-1" onClick={() => { props.toggleMode('primary') }} style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
            <div className="bg-danger rounded mx-1" onClick={() => { props.toggleMode('danger') }} style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
            <div className="bg-success rounded mx-1" onClick={() => { props.toggleMode('success') }} style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
            <div className="bg-warning rounded mx-2" onClick={() => { props.toggleMode('warning') }} style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
          </div>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'black' : 'light'}`}>
            {/* <input className="form-check-input" type="checkbox" role="switch" onClick={()=>{props.toggleMode('null')}} id="flexSwitchCheckDefault"/>
      <label className="form-check-label" onClick={props.toggleMode} htmlFor="flexSwitchCheckDefault" >{props.btnText}</label> */}
          </div>
        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
=======
    {/* <h1 className="Hello world"  >{props.title}</h1> */}
  <div className="container-fluid ">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true" href="/">{props.aboutText}</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className="d-flex">
        <div className="bg-primary rounded mx-1" onClick={()=>{props.toggleMode('primary')}} style={{height:'25px',width:'25px',cursor:'pointer'}}></div>
        <div className="bg-danger rounded mx-1" onClick={()=>{props.toggleMode('danger')}} style={{height:'25px',width:'25px',cursor:'pointer'}}></div>
        <div className="bg-success rounded mx-1" onClick={()=>{props.toggleMode('success')}} style={{height:'25px',width:'25px',cursor:'pointer'}}></div>
        <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'25px',width:'25px',cursor:'pointer'}}></div>
      </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'black':'light'}`}>
      <input className="form-check-input" type="checkbox" role="switch" onClick={()=>{props.toggleMode('null')}} id="flexSwitchCheckDefault"/>
      <label className="form-check-label" onClick={props.toggleMode} htmlFor="flexSwitchCheckDefault" >{props.btnText}</label>
</div>
    </div>
  </div>
</nav>
  )
}
Navbar.propTypes={title : PropTypes.string,
  aboutText : PropTypes.string
>>>>>>> f6e8858a70c6c52e2c23757f34aa670a3e29198f
}
// Navbar.defaultProps={
//   title : 'set title is here ',
//   aboutText: 'about tect here '
// }