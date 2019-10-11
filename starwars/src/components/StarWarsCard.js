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
                    <CardImg key={index+1} top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                    <CardTitle key={index+2} >{props.characters[index].name}</CardTitle>
                    <CardSubtitle key={index+3} > Birth Year: {props.characters[index].birth_year}</CardSubtitle>
                    <CardText key={index+4} >{props.characters[index].films}</CardText>
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