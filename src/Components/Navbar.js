import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../App.scss';

export class Navbar extends Component {
    render() {
        return (
            <nav className={`navbar fixed-top navbar-expand-lg navbar-${this.props.mode === "dark" ? "dark" : "light"} bg-${this.props.mode === "dark" ? "dark" : "light"} shadow p-1 mb-5`}
            style={{  backgroundImage: this.props.mode === 'dark' ? 'linear-gradient(to top left, #1f2937, #1f2937)' : 'linear-gradient(to bottom right, #c28888, #ebc2c2)' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">GoodNews</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"> <Link className="nav-link" aria-current="page" to="/business">Business</Link> </li>
                            <li className="nav-item"> <Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link> </li>
                            <li className="nav-item"> <Link className="nav-link" aria-current="page" to="/health">Health</Link> </li>
                            <li className="nav-item"> <Link className="nav-link" aria-current="page" to="/science">Science</Link> </li>
                            <li className="nav-item"> <Link className="nav-link" aria-current="page" to="/sports">Sports</Link> </li>
                            <li className="nav-item"> <Link className="nav-link" aria-current="page" to="/technology">Technology</Link> </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={this.props.toggleMode}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked" style={{ color: this.props.mode === 'dark' ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.65)' }}>Dark mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar