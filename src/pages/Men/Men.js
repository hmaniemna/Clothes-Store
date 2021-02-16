import React from "react";
import {Image,Row,Col} from "react-bootstrap"
import menimage from "./images/MenClothing.webp"
import ClothesCard from "./components/cards/cards";
import imagee from "./images/Men.jpg"

let Shirt = {
    title: "T-Shirt",
    text: "T-Shirt for all sizes",
    img: imagee,
}
export default function MenP(){

    return (
        <div>
            <h1 className="my-5">Men Clothing</h1>
            <Image src={menimage} fluid />
            <hr/>
            <Row className="mt-5">
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