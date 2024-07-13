import { useState, useEffect, createContext } from "react";
import { Container, Nav, Navbar, Row, Col, NavDropdown } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import bg from "/img/img.jpg";
import * as data from "./data.js";
import Detail from "./routes/detail.jsx";
import About from "./routes/about.jsx";
import Listing from "./components/list.jsx";
import { Load, Loading } from "./components/loading.jsx";
import { Cart } from "./routes/cart.jsx";
import { recentStore, setRecent } from "./store.js";

// export { Context1 };

// let Context1 = createContext();

import "./App.css";

function App() {
  let setRV = () => {
    setRecentView(JSON.parse(localStorage.getItem("recent")));
  };

  useEffect(() => {
    let set = new Set([]);
    localStorage.setItem("recent", JSON.stringify([...set]));
  }, []);

  let recentStore = useSelector((state) => state.recentStore);

  let [shoes, setShoes] = useState(data.data);
  let [loadCount, setloadCount] = useState(0);
  let [isLoading, setisLoading] = useState(false);
  let [recentView, setRecentView] = useState("");
  //let [stock, setStock] = useState([10, 11, 12]);

  let shoeListing = () => {
    let newArray = [];
    for (let i = 0; i < shoes.length; i++) {
      newArray.push(<Listing pShoes={shoes} pIndex={i}></Listing>);
    }
    return newArray;
  };

  let sortList = () => {
    let newArray = [...shoes];
    newArray.sort(function (a, b) {
      return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
    });
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
              <Nav.Link
                onClick={() => {
                  navigate("/cart");
                }}>
                Cart
              </Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown
                title="Recent View"
                id="navbarScrollingDropdown"
                onClick={() => {
                  setRV();
                }}>
                <NavDropdown.Item>
                  {recentView.length < 1 ? (
                    <div>아직 본 상품이 없어요</div>
                  ) : (
                    recentView.map((item, i) => {
                      return <div>{item}</div>;
                    })
                  )}
                </NavDropdown.Item>
              </NavDropdown>
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

                {isLoading ? <Loading></Loading> : null}

                <Container>
                  <Row>{shoeListing()}</Row>
                </Container>
                <button
                  onClick={() => {
                    if (loadCount == 0) {
                      setisLoading(!isLoading);
                      axios
                        .get("https://codingapple1.github.io/shop/data2.json")
                        .then((result) => {
                          let copy = [...shoes, ...result.data];
                          setShoes(copy);
                          setloadCount(loadCount + 1);
                          setisLoading(isLoading);
                        })
                        .catch((err) => {
                          setisLoading(isLoading);
                          console.log(err.message);
                        });
                    } else if (loadCount == 1) {
                      setisLoading(!isLoading);
                      axios
                        .get("https://codingapple1.github.io/shop/data3.json")
                        .then((result) => {
                          let copy = [...shoes, ...result.data];
                          setShoes(copy);
                          setloadCount(loadCount + 1);
                          setisLoading(isLoading);
                        })
                        .catch((err) => {
                          setisLoading(isLoading);
                          console.log(err.message);
                        });
                    } else {
                      alert("상품이 더 없습니다.");
                    }
                  }}>
                  상품 추가로드
                </button>
              </>
            }
          />
          <Route
            path="/detail/:id"
            element={
              // <Context1.Provider value={{ stock, shoes }}>
              <Detail pShoes={shoes} pRecentView={recentView} />
              // </Context1.Provider>
            }
          />

          <Route path="/cart" element={<Cart />} />

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
