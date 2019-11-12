import React from "react";
import Login from "./works/Login";
import ModalComp from "./works/ModalComp";

class Base extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to Ant-D Base</h1>
        <ModalComp>
          <Login />
        </ModalComp>
      </div>
    );
  }
}

export default Base;
