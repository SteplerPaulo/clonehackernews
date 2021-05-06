import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
function ItemCard() {
    const dummyText = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled."
    const [data, setData] = useState({ hits: [] })
    const [query, setQuery] = useState('')
    const [search, setSearch] = useState('')
    let [page, setPage] = useState(0)
    const [type, setType] = useState('search_by_date')
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const result = await axios(`https://hn.algolia.com/api/v1/${type}?query=${search}&page=${page}&tags=story`)
            setData(result.data)
            setIsLoading(false);
        }
        fetchData()
    }, [search,page,type])


    return (
        <React.Fragment>
            <div className="row navigation">
                <div className="col">
                    <button type="button"
                        value="search_by_date" 
                        onClick={(event) => setType(event.target.value)}
                        className="btn btn-primary">
                        New
                    </button>
                    <button type="button"
                        value="search" 
                        onClick={(event) => setType(event.target.value)}
                        className="btn btn-secondary" >
                        Past
                    </button>
                </div>
            </div>
            <div className="row search">
                <div className="col">
                    <input
                        type="text"
                        placeholder="Search"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        className="form form-control"
                    />
                </div>
                <div className="col">
                    <button
                        type="button"
                        onClick={() => {setSearch(query);setPage(0)}}
                        className="btn btn-dark">
                        Search
                    </button>
                </div>
            </div>
            {isLoading ? ( <div>Loading... <i class="fa fa-spinner fa-spin" aria-hidden="true"></i></div>
            ) : (
            data.hits.map(item => (
            <div className="row item-card" key={item.objectID}>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h6>
                                <b className="card-title">
                                    <a href={item.url}>{item.title}</a>
                                </b>
                            </h6>
                            <p className="card-text">{item.title || dummyText}</p>
                            <small className="text-muted">
                                <i className="fa fa-clock-o"></i> {item.created_at} | {item.num_comments} <span>comments</span>                                        </small>
                        </div>
                    </div>
                </div>
            </div>
            ))
            )}
            {!isLoading &&
            <div className="row load-more">
                <div className="col">
                    <button type="button"
                        className="btn btn-primary btn-block"
                        onClick={() => setPage(page++)}
                        >
                        Load More
                    </button>
                </div>
            </div>
            }
        </React.Fragment>
    );
}

export default ItemCard;
