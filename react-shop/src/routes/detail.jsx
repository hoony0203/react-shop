import { Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useParams } from "react-router-dom";

import data from "../data.js";

let Detail = (props) => {
  let { id } = useParams();
  let [index, setIndex] = useState(data[id].id);
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <img src={props.pShoes[index].url} alt="" />
          </Col>
          <Col md={6} mt={4}>
            <h4>{props.pShoes[index].title}</h4>
            <p>{props.pShoes[index].content}</p>
            <p>{props.pShoes[index].price}</p>
            <Button className="btn btn-danger">주문하기</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Detail;
