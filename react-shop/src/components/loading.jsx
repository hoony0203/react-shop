import styled from "styled-components";

let Load = styled.div`
  font-size: 100px;
  width: 300px;
  position: relative;
  height: 500px;
  background: cadetblue;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

let Loading = () => {
  return (
    <>
      <Load>로딩중입니다</Load>
    </>
  );
};

export { Load, Loading };
