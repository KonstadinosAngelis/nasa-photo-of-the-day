import React, {useEffect, useState} from "react";
import axios from "axios";
import DailyPhotoCards from "./dailyPhotoCards"
import styled from "styled-components";

const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto
`;
const Flexer = styled.h3`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-size : 1rem;
`;


export default function DailyPhoto(){
const [nasaStory, setNasaStory] = useState([]);

useEffect(() => {axios.get("https://images-api.nasa.gov/search?media_type=image")
.then(response => {
  const randomArray = [];
  for(let i = 0; i <= 3; i++){
  let randomArticles = response.data.collection.items[Math.floor((Math.random() * 100) + 1)]
  
  if(randomArticles.data[0].description.length <= 1000){
  randomArray.push(randomArticles);
  }
  else {
  randomArray.push(response.data.collection.items[Math.floor((Math.random() *99) + 1)])
 }
}
  setNasaStory(randomArray);
});
}, []);

    return(
    <Wrapper>
        <Flexer>
        {nasaStory.map((item, index) => {
            return <DailyPhotoCards key = {index} data = {item.data} imgData = {item.links}/>
        })}
        </Flexer>
    </Wrapper>
)}