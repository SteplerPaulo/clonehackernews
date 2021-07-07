import { React, useState , useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import axios from 'axios';

import Home from 'views/Home.js'
import Blogs from 'views/Blogs.js'
import About from 'views/About.js'
import Footer from 'components/Footer.js'

export default function Default() {
    const [data, setData] = useState({ hits: [] })
    const [search, setSearch] = useState('')
    let [page, setPage] = useState(0)
    const [type, setType] = useState('search_by_date')
    const [isLoading, setIsLoading] = useState(false);
    const [baseUrl] = useState(`https://hn.algolia.com/api/v1/`)
    const [url, setUrl] = useState(baseUrl + `${type}?query=${search}&page=${page}&tags=story`);

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleNewButton = (e) => {
        setType('search_by_date');
        setUrl(baseUrl + `${type}?query=${search}&page=0&tags=story`)
    }

    const handlePastButton = (e) => {
        setType('search');
        setUrl(baseUrl + `${type}?query=${search}&page=0&tags=story`)
    }

    const handleSubmit = (e) => {
        setUrl(baseUrl + `${type}?query=${search}&page=0&tags=story`)
        e.preventDefault();
    }
    
    const handelLoadMore = (e) => {
        const newPage = page + 1 
        setPage(newPage)
        setUrl(baseUrl + `${type}?query=${search}&page=${newPage}&tags=story`)
    }

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const result = await axios(url)
            setData(result.data)
            setIsLoading(false)
        }
        fetchData()
    }, [url])


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
                            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blogs" className="nav-link">Blogs</Link>
                        </li>
                    </ul>
                    <form onSubmit={handleSubmit} className="form-inline my-2 my-lg-0">
                        <input
                            onChange={handleChange}
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >
                            Search
                        </button>
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
                    <Route exact path="/">
                        <Home 
                            data={data} 
                            isLoading={isLoading}
                            handelLoadMore={handelLoadMore}
                            handleNewButton={handleNewButton}
                            handlePastButton={handlePastButton}
                        />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}