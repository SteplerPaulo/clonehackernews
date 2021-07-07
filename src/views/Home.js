import React from "react";

function ItemCard(props) {
    const dummyText = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled."
    const { data, isLoading, handelLoadMore, handleNewButton,handlePastButton} = props

    return (
        <React.Fragment>
            <div className="row navigation " >
                <div className="col d-none">
                    <button type="button"
                        onClick={handleNewButton}
                        className="btn btn-primary">
                        New
                    </button>
                    <button type="button"
                        onClick={handlePastButton}
                        className="btn btn-secondary" >
                        Past
                    </button> 
                </div>
            </div>
            {isLoading ? (<div>Loading... <i className="fa fa-spinner fa-spin" aria-hidden="true"></i></div>
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
                            onClick={handelLoadMore}
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
