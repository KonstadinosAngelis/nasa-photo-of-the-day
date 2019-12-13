import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import MainHead from "./components/mainHead/mainHead";
import HeaderDescription from "./components/mainHead/headerDescription";
import RandomDateButton from "../src/components/mainHead/randomDateButton";
import DailyPhoto from "./components/dailyphotocards/dailyPhoto"
import styled from "styled-components";

function App() {
  const [apodData, setApodData] = useState([]);
  const [date, setDate] = useState("currentDate");

  var currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1;
  let day = currentDate.getDate()
  currentDate = year + "-" + month + "-" + day;

  useEffect(() => {  
  axios.get(`https://api.nasa.gov/planetary/apod?date=${currentDate}&api_key=JXS4kEFj3IdlwFH7RYrMgNehgIcDKcceVbnQz2br`)
  .then(response => {
    setApodData(response.data);
  });
}, []);

const Wrapper = styled.div`
    background: #000000 url(${apodData.url});
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    padding-top: 42%;
`;

const OtherWrapper = styled.div`
    background-color: gray
`;

  return (
    <div className="App">
      <Wrapper>
      <MainHead displayPicture = {apodData} />
      </Wrapper>
      {/* <RandomDateButton setDate = {setDate}/> */}
      <HeaderDescription displayText = {apodData}/>
      <OtherWrapper><DailyPhoto /></OtherWrapper>
    </div>
  );
}

export default App;
