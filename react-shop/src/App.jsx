import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import bg from "../public/img/img.jpg";
import data from "./data.js";
import Listing from "./list.jsx";

import "./App.css";

function App() {
  let [shoes, setShoes] = useState(data);
  // let [index, setIndex] = useState("");

  let shoeListing = () => {
    let newArray = [];
    for (let i = 0; i < shoes.length; i++) {
      newArray.push(<Listing pShoes={shoes} pIndex={i}></Listing>);
    }
    return newArray;
  };

  return (
    <>
      <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">피자헛</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">홈</Nav.Link>
              <Nav.Link href="#menu">메뉴</Nav.Link>
              <Nav.Link href="#pricing">장바구니</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <br />

        <div
          className="main-bg"
          style={{ backgroundImage: "url(" + bg + ")" }}></div>
      </div>

      <Container>
        <Row>{shoeListing()}</Row>
      </Container>
    </>
  );
}

export default App;
