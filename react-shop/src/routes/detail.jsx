import { Button, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as data from "../data.js";
import { useMemo } from "react";

let Detail = (props) => {
  let { id } = useParams();
  let [index, setIndex] = useState(data.data[id].id);
  let [count, setCount] = useState(0);
  let [isAlert, setIsalert] = useState(true);
  let [input, setInput] = useState("");
  let [validResult, setValidResult] = useState("");

  useEffect(() => {
    let a = "";
    if (isAlert) {
      a = setTimeout(() => {
        setIsalert(!isAlert);
      }, 2000);
    }
    return () => {
      clearTimeout(a);
    };
  }, []);

  let valid = useEffect(() => {
    const regex = new RegExp(/^\d+$/);
    if (input != "") {
      let result = regex.test(input);
      setValidResult(result);
    }
    return () => {
      input = "";
      validResult = "";
    };
  });

  return (
    <>
      {isAlert ? <Alert /> : null}

      {input == "" ? null : !validResult ? <Validnotify /> : null}
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
          valid;
        }}
      />
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

let Validnotify = () => {
  return <div>숫자만 입력하세요</div>;
};

export default Detail;
