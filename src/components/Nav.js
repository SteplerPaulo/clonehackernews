import React from "react";
import News from '../views/News.js'
import Blogs from '../views/Blogs.js'
import About from '../views/About.js'
import Footer from '../components/Footer.js'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Nav() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img src="/assets/img/hackernewslogo.png" alt="Hacker News Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" exact className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blogs" className="nav-link">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" tabindex="-1" aria-disabled="true">Disabled</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div className="container-fluid">
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/blogs">
                        <Blogs />
                    </Route>
                    <Route path="/">
                        <News />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default Nav;