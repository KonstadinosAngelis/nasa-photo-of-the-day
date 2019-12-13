import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%
  margin: 0 auto;
  text-align: center;
  padding: 2% 0;
`;

const Container = styled.div`
    width: 100%
    background-color: darkgray;
`;

export default function HeaderDescription(props) {
    return (
        <Container>
            <Wrapper>
                <h3>{props.displayText.title}</h3>
                <h4>{props.displayText.date}</h4>
                <p>{props.displayText.explanation}</p>
            </Wrapper>
        </Container>
    )
}