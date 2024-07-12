import { Table } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { changeName, plusAge } from "../store/userSlice.js";
import { plusCount } from "../store.js";

export { Cart };

let Cart = () => {
  //   let a = useSelector((state) => {
  //     return state;
  //   });

  //   let user = useSelector((state) => {
  //     return state.user;
  //   });

  let user = useSelector((state) => state.user);
  let stock = useSelector((state) => state.stock);
  let cart = useSelector((state) => state.cart);

  let dispatch = useDispatch();

  return (
    <div>
      {user.name}
      {user.age}
      <button
        onClick={() => {
          dispatch(plusAge(3));
        }}>
        나이증가
      </button>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>{<Product />}</tbody>
      </Table>
    </div>
  );
};

let Product = () => {
  let cart = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  return cart.map((item, i) => (
    <>
      <tr key={i}>
        <td>{cart[i].id}</td>
        <td>{cart[i].name}</td>
        <td>{cart[i].count}</td>
        <td>
          <button
            className={cart[i].id}
            onClick={(e) => {
              let id = parseInt(e.target.className);
              let a = { id: id, i: i };
              // console.log(id);
              //dispatch(changeName());
              dispatch(plusCount(a));
            }}>
            +
          </button>
        </td>
      </tr>
    </>
  ));
};
