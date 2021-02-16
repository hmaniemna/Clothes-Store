import React from "react";
import {Image,Row,Col} from "react-bootstrap"
import womenimage from "./images/WomenClothing.jpg"
import ClothesCard from "./components/cards/cards"
import imagee from "./images/Women.jpg"

let Shirt = {
    title: "T-Shirt",
    text: "T-Shirt for all sizes",
    img: imagee,
}
export default function WomenP(){

    return (
        <div>
            <h1>Women Clothing</h1>
            <Image src={womenimage} fluid />
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