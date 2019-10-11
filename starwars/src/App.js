import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import { Container, Row} from 'reactstrap';
import StarWarsCard from "./components/StarWarsCard";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
        .get('https://swapi.co/api/people/')
        .then(response => {
            console.log("Successful axios get request from StarWars API: ", response);
            setCharacters(response.data.results); 
          })
        .catch(error => {
            console.log("There has been an error: ", error);
        });
    }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Container className="container1">
        <Row className="row1">
          <StarWarsCard characters={characters}/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
