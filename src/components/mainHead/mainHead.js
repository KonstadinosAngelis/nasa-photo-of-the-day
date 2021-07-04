import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    margin: 0 auto;
    width: 80%;
    border: 1px solid black;
    background-color: black;
    border-radius: 10px;
    
`;

export default function MainHead(props) {
    return(
    <Wrapper>
        <div className = "headerText">
        <h1>Astronomy Picture of the Day</h1>
        <h2>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</h2>
        </div>
        {/* <img src={props.displayPicture.url} alt="of Space"></img> */}
    </Wrapper>
)}