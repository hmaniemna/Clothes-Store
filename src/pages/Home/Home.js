import React from "react";
import CarrouselElement from "./components/CarrouselElement/Carrousel";
import { Row, Col, Jumbotron,Container } from "react-bootstrap"
import imagee from "./images/Men.jpg"
import ClothesCard from './components/cards/cards';
let Shirt = {
    title: "Shirt",
    text: "T-Shirt for all sizes available in all of our stores",
    img: imagee,
}
export default function HomeP() {

    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1>Clothes Store</h1>
                    <p>
                        Welcome To the the <b>#N°1 Selling</b> Clothes store in Tunisia.
                     </p>
                </Container>
            </Jumbotron>
            <CarrouselElement />
            <Row>
                <Col>
                    <ClothesCard {...Shirt} />
                </Col>
                <Col>
                    <ClothesCard {...Shirt} />
                </Col>
                <Col>
                    <ClothesCard {...Shirt} />
                </Col>
            </Row>
        </div>
    );
}