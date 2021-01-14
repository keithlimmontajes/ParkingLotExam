import React from "react";
import ModalNew from "./components/New";
import ModalExit from "./components/Exit";
import Display from "./components/Display";
import { data, color } from "./data";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      number_of_slot: data,
      colors: color,
    };
  }

  onSubmitCar = (props) => {
    let objectTobeChange = this.state.number_of_slot;
    let findIndex = objectTobeChange.findIndex(
      (x) => x.slot_no === props.slot_no
    );

    let findItem = objectTobeChange[findIndex];
    findItem = props;

    this.updateItem(findIndex, findItem);
  };

  updateItem = (index, value) => {
    const arr = this.state.number_of_slot;
    arr[index] = value;
    this.setState({ number_of_slot: arr });
  };

  render() {
    return (
      <div style={{ margin: 50 }}>
        <ModalNew {...this.state} onSubmitCar={this.onSubmitCar} />
        <span style={{ marginRight: "20px" }} />
        <ModalExit {...this.state} onSubmitCar={this.onSubmitCar} />
        <Display {...this.state} />
      </div>
    );
  }
}

export default App;
