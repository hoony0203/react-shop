import { useState } from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import bg from "/img/img.jpg";
import * as data from "./data.js";
import Detail from "./routes/detail.jsx";
import About from "./routes/about.jsx";
import Listing from "./components/list.jsx";
import axios from "axios";

import "./App.css";

function App() {
  let [shoes, setShoes] = useState(data.data);
  let [newShoes, setnewShoes] = useState([]);
  let [isNew, setisNew] = useState(false);
  // let [index, setIndex] = useState("");

  let shoeListing = () => {
    //console.log(rest);
    let newArray = [];
    for (let i = 0; i < shoes.length; i++) {
      newArray.push(<Listing pShoes={shoes} pIndex={i}></Listing>);
    }
    return newArray;
  };

  let newShoesListing = () => {
    let newArray = [];
    for (let i = 0; i < newShoes.length; i++) {
      newArray.push(<Listing pShoes={newShoes} pIndex={i}></Listing>);
    }
    return newArray;
  };

  let sortList = () => {
    let newArray = [...shoes];
    newArray.sort(function (a, b) {
      return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
    });
    //console.log(newArray);
    return setShoes(newArray);
  };

  let navigate = useNavigate();

  return (
    <>
      <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand
              className="home"
              onClick={() => {
                navigate("/");
              }}>
              피자헛
            </Navbar.Brand>
            <Nav className="me-auto">
              {/* <Nav.Link href="/">홈</Nav.Link> */}
              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}>
                홈
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/about");
                }}>
                About
              </Nav.Link>
              <Nav.Link href="#pricing">장바구니</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url(" + bg + ")" }}></div>

                <button
                  onClick={() => {
                    sortList();
                  }}>
                  상품정렬
                </button>
                <Container>
                  <Row>{shoeListing()}</Row>
                </Container>
                <button
                  onClick={() => {
                    axios
                      .get("https://codingapple1.github.io/shop/data2.json")
                      .then((result) => {
                        let newArray = [...result.data];
                        setnewShoes(newArray);
                        console.log(newShoes);
                        setisNew(!isNew);
                      })
                      .catch((err) => {
                        console.log(err.message);
                      });
                  }}>
                  상품 추가로드
                </button>
                <Container>
                  <Row>{isNew ? newShoesListing(newShoes) : null}</Row>
                </Container>
              </>
            }
          />
          <Route path="/detail/:id" element={<Detail pShoes={shoes} />} />
          <Route path="/about" element={<About></About>}>
            <Route path="member" element={<div>member</div>} />
            <Route path="location" element={<About></About>} />
          </Route>
          <Route path="*" element={<div>없는 페이지 404</div>} />
        </Routes>

        <br />
      </div>
    </>
  );
}

export default App;
