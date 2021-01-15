import React from "react";
import { Switch, Badge } from "antd";

const Total = ({ number_of_slot }) => {
  return (
    <div style={{ border: "1px solid gray", width: "300px", margin: 20 }}>
      <div style={{ margin: 10 }}>
        <lable>
          Total Parking available: &nbsp;
          {number_of_slot.filter((x) => x.available === true).length}
        </lable>
        <br />
        <lable>
          Parking Taken: &nbsp;
          {number_of_slot.filter((x) => x.available === false).length}
        </lable>
      </div>
    </div>
  );
};

export default Total;
