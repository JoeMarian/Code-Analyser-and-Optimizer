import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import UploadText from "./components/UploadText";
import Result from "./components/Result";
import "./App.css";

function App() {
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [similarity, setSimilarity] = useState(null);

    const checkPlagiarism = async () => {
        const response = await axios.post("http://127.0.0.1:5000/check", { text1, text2 });
        setSimilarity(response.data.similarity);
    };

    return (
        <div className="App">
            <Navbar />
            <UploadText text={text1} setText={setText1} placeholder="Enter first text..." />
            <UploadText text={text2} setText={setText2} placeholder="Enter second text..." />
            <button onClick={checkPlagiarism}>Check Plagiarism</button>
            <Result similarity={similarity} />
        </div>
    );
}

export default App;
