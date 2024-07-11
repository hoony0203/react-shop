import { Button, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import data from "../data.js";
import { useMemo } from "react";

let Detail = (props) => {
  let { id } = useParams();
  let [index, setIndex] = useState(data[id].id);
  let [count, setCount] = useState(0);
  let [isAlert, setIsalert] = useState(true);

  useEffect(() => {
    if (isAlert) {
      setTimeout(() => {
        setIsalert(!isAlert);
      }, 2000);
    }
  });

  return (
    <>
      {isAlert ? <Alert /> : null}
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        Count
      </button>
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

let Alert = () => {
  return (
    <div className="alert alert-warning">
      <p>2초 이내 구매시 할인</p>
    </div>
  );
};

export default Detail;
