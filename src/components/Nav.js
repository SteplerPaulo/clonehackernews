import React from "react";

function Nav() {
    return (
      <React.Fragment> 
        <div className="row">
          <div className="col">
            <button type="button" className="btn btn-primary">New</button>
            <button type="button" className="btn btn-secondary">Past</button>
          </div>
        </div>
      </React.Fragment>
    );
  }

export default Nav;
  