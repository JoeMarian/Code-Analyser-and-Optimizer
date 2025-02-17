import React from "react";


const UploadText = ({ text, setText, placeholder }) => {
    return (
        <textarea
            className="text-box"
            placeholder={placeholder}
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
    );
};

export default UploadText;
