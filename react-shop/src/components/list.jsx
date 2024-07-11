import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

let Listing = (props) => {
  let navigate = useNavigate();

  return (
    <Col
      md={4}
      onClick={() => {
        navigate("/detail/" + props.pIndex);
      }}>
      <img src={props.pShoes[props.pIndex].url} width="80%" alt="" />
      <h4>{props.pShoes[props.pIndex].title}</h4>
      <p>{props.pShoes[props.pIndex].content}</p>
      <p>{props.pShoes[props.pIndex].price}</p>
    </Col>
  );
};

export default Listing;
