import { Col } from "react-bootstrap";

let Listing = (props) => {
  return (
    <Col md={4}>
      <img src={props.pShoes[props.pIndex].url} width="80%" alt="" />
      <h4>{props.pShoes[props.pIndex].title}</h4>
      <p>{props.pShoes[props.pIndex].content}</p>
    </Col>
  );
};

export default Listing;
