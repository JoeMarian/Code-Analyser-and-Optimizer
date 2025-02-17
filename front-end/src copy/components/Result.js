import React from "react";


const Result = ({ similarity }) => {
    return (
        <div className="result-container">
            {similarity !== null && (
                <h2 className="result-text">Similarity Score: {similarity}%</h2>
            )}
        </div>
    );
};

export default Result;
