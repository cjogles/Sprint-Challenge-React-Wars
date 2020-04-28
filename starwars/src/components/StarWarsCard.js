import React from "react";
import {Col } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

const StarWarsCard = (props) => {
  return (
    <Col>
        <div>
            <Card>
            {(props.characters).map((num, index) => (
                <CardBody key={index}>
                    {/* <CardImg key={index+1} top width="100%" src="images\0.png" alt="Card image cap" /> */}
                    <CardTitle key={index+1} >{props.characters[index].name}</CardTitle>
                    <CardTitle key={index+2} >Gender: {props.characters[index].gender}</CardTitle>
                    <CardTitle key={index+3} >Hair Color: {props.characters[index].hair_color}</CardTitle>
                    <CardSubtitle key={index+4} > Birth Year: {props.characters[index].birth_year}</CardSubtitle>
                    <CardText key={index+5  } >Film urls:<br></br> {props.characters[index].films}</CardText>
                </CardBody>
            ))}
            </Card>
        </div>
    </Col>
    // <div className="number-container">
    //    {(props.arr).map((num, index) => (
    //      <NumberButton key={index} button = {num} onClick={addHandler()}/>
    //    ))}
    // </div>
  );
};

export default StarWarsCard;