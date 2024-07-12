import { Button, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import * as data from "../data.js";
import { useMemo } from "react";

// let YellowBtn = styled.button`
//   background: ${(props) => props.bg || "yellow"};
//   color: black;
//   padding: 10px;
// `;

// let Box = styled.div`
//   background: grey;
//   padding: 20px;
// `;

let Detail = (props) => {
  let { id } = useParams();
  let [index, setIndex] = useState(data.data[id].id);
  // let [tab, setTab] = useState([
  //   { id: 0, status: true },
  //   { id: 1, status: false },
  //   { id: 2, status: false },
  // ]);

  let [tab, setTab] = useState(0);

  let tabClick = (e) => {
    let tabNum = e.target.className.slice(-1);
    setTab(tabNum);
    console.log(tab);
    // let tabNum = e.target.className.slice(-1);
    // let copy = [...tab];
    // let statusNow = copy[tabNum].status;
    // if (!statusNow) {
    //   copy[tabNum].status = !statusNow;
    //   setTab(copy);

    //   let copy2 = [...copy];

    //   copy2.splice(tabNum, 1);
    //   copy2.map((item, i) => {
    //     copy2[i].status = false;
    //   });
    // }
  };

  // let [count, setCount] = useState(0);
  // let [isAlert, setIsalert] = useState(true);
  // let [input, setInput] = useState("");
  // let [validResult, setValidResult] = useState("");

  // useEffect(() => {
  //   let a = "";
  //   if (isAlert) {
  //     a = setTimeout(() => {
  //       setIsalert(!isAlert);
  //     }, 2000);
  //   }
  //   return () => {
  //     clearTimeout(a);
  //   };
  // }, []);

  // let valid = useEffect(() => {
  //   const regex = new RegExp(/^\d+$/);
  //   if (input != "") {
  //     let result = regex.test(input);
  //     setValidResult(result);
  //   }
  //   return () => {
  //     input = "";
  //     validResult = "";
  //   };
  // });

  return (
    <>
      {/* {isAlert ? <Alert /> : null}

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
      </button> */}
      {/* <Box>
        <YellowBtn>기본버튼</YellowBtn>
        <YellowBtn bg="blue">파란버튼</YellowBtn>
        <YellowBtn bg="red">빨간버튼</YellowBtn>
      </Box> */}

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

      {<TabUI ptabClick={tabClick} ptab={tab} />}
      {<TabContent ptab={tab} />}
    </>
  );
};

// let Alert = () => {
//   return (
//     <div className="alert alert-warning">
//       <p>2초 이내 구매시 할인</p>
//     </div>
//   );
// };

// let Validnotify = () => {
//   return <div>숫자만 입력하세요</div>;
// };

let TabUI = ({ ptabClick, ptab }) => {
  return (
    <>
      <nav className="tabUI">
        <ul>
          <li className="tab-0" onClick={(e) => ptabClick(e)}>
            상세정보
          </li>
          <li className="tab-1" onClick={(e) => ptabClick(e)}>
            리뷰
          </li>
          <li className="tab-2" onClick={(e) => ptabClick(e)}>
            Q&A
          </li>
        </ul>
      </nav>
      {/* {pr.ptab == 0 ? (
        <div>상세정보</div>
      ) : pr.ptab == 1 ? (
        <div>리뷰</div>
      ) : pr.ptab == 2 ? (
        <div>Q&A</div>
      ) : null} */}
      {/* {pr.ptab[0].status ? <div>상세정보</div> : null}
      {pr.ptab[1].status ? <div>리뷰</div> : null}
      {pr.ptab[2].status ? <div>Q&A</div> : null} */}
    </>
  );
};

let TabContent = ({ ptab }) => {
  return [<div>상세정보</div>, <div>리뷰</div>, <div>Q&A</div>][ptab];
};

export default Detail;
