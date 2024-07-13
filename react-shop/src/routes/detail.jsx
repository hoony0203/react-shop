import { Button, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import * as data from "../data.js";
import { useMemo } from "react";

import { detailOrder, plusCount } from "../store/cartSlice.js";
import { setRecent } from "../store.js";

// import { Context1 } from "../App.jsx";

// let YellowBtn = styled.button`
//   background: ${(props) => props.bg || "yellow"};
//   color: black;
//   padding: 10px;
// `;

// let Box = styled.div`
//   background: grey;
//   padding: 20px;
// `;

let Detail = ({ pShoes, pRecentView }) => {
  let dispatch = useDispatch();
  let cart = useSelector((state) => state.cart);
  let recentStore = useSelector((state) => state.recentStore);
  // let { stock, shoes } = useContext(Context1);

  let { id } = useParams();
  //let [index, setIndex] = useState(data.data[id].id);
  let [index, setIndex] = useState(pShoes[id].id);

  let number = parseInt(id) + 1;
  let [recentView, setRecentView] = useState(pRecentView);
  // let [tab, setTab] = useState([
  //   { id: 0, status: true },
  //   { id: 1, status: false },
  //   { id: 2, status: false },
  // ]);

  useEffect(() => {
    setRecentView(localStorage.getItem("recent"));
    let recent = localStorage.getItem("recent");
    let array = JSON.parse(recent);
    console.log(array);
    array.push(id);
    let set = new Set(array);
    console.log(set);
    localStorage.removeItem("recent");
    localStorage.setItem("recent", JSON.stringify([...set]));
    // dispatch(setRecent(set));
  });

  let [tab, setTab] = useState(0);
  let [fade2, setFade2] = useState("");
  useEffect(() => {
    let a = setTimeout(() => {
      setFade2("end");
    }, 100);

    return () => {
      clearTimeout(a);
      setFade2("");
    };
  }, [Detail]);

  let tabClick = (e) => {
    let tabNum = e.target.className.slice(-1);
    setTab(tabNum);
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
      <div className={`start ${fade2}`}>
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
        {/* {stock} */}
        <Container>
          <Row>
            <Col md={6}>
              <img src={data.url + number + ".jpg"} alt="" />
            </Col>
            <Col md={6} mt={4}>
              <h4>{pShoes[index].title}</h4>
              <p>{pShoes[index].content}</p>
              <p>{pShoes[index].price}</p>
              <Button
                className=""
                onClick={(e) => {
                  let product = pShoes[index];
                  let obj = {
                    id: product.id,
                    name: product.title,
                    count: (product.count = 1),
                  };
                  dispatch(detailOrder(obj));
                }}>
                주문하기
              </Button>
            </Col>
          </Row>
        </Container>

        {<TabUI ptabClick={tabClick} ptab={tab} />}
        {<TabContent pShoes={pShoes} ptab={tab} />}
      </div>
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

let TabContent = ({ pShoes, ptab }) => {
  // let { stock } = useContext(Context1);

  let [fade, setFade] = useState("");
  useEffect(() => {
    let a = setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, [ptab]);

  return (
    <div className={`start ${fade}`}>
      {
        [
          <div>
            {pShoes[0].title}
            {/* {stock} */}
          </div>,
          <div>리뷰</div>,
          <div>Q&A</div>,
        ][ptab]
      }
    </div>
  );
};

export default Detail;
