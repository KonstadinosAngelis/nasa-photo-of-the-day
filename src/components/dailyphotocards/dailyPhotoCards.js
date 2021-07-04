import React, {useEffect, useState} from "react";
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import styled from "styled-components";
import axios from "axios";


const Wrapper = styled.div`
    width: 49%
    margin-bottom: 2%;
`;

const CardImg = styled.img`
    width: 100%;
    height: 20vw;
    object-fit: cover;
`;

const BodyWrapper = styled.div`
    border: 1px solid black;
    height: 450px;
    display: flex;
    align-items: center;
    background-color: black;
    color: white;
`;

export default function DailyPhotoCards(props){
    return(
        <Wrapper>
            <Card>
                <CardImg src = {props.imgData[0].href} alt = "Space Picture"/>
                <BodyWrapper>
                <CardBody>
                    <CardTitle>{props.data[0].title}</CardTitle>
                    <CardText>{props.data[0].description}</CardText>
                </CardBody>
                </BodyWrapper>
            </Card>
        </Wrapper>
)}