import React from "react";

import { Link } from "react-router-dom";

class Start extends React.Component {

    render() {
        return (
            <>
                <div className="quiz">
                    <h1 className="heading">Quiz App </h1>
                    <Link to= "/Body"> <button> Play </button>  </Link>
                </div>
            </>
        )
    }
}

export default Start