import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as data from "../data.js";

let Listing = (props) => {
  let navigate = useNavigate();

  let number = props.pShoes[props.pIndex].id + 1;

  return (
    <Col
      md={4}
      className="shoeList"
      onClick={() => {
        navigate("/detail/" + props.pIndex);
      }}>
      {/* <img src={props.pShoes[props.pIndex].url} width="80%" alt="" /> */}
      <img src={data.url + number + ".jpg"} width="80%" alt="" />
      <h4>{props.pShoes[props.pIndex].title}</h4>
      <p>{props.pShoes[props.pIndex].content}</p>
      <p>{props.pShoes[props.pIndex].price}</p>
    </Col>
  );
};

export default Listing;
