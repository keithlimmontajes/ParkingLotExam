import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Switch, Badge } from "antd";

const Exit = ({ number_of_slot }) => {
  const columns = [
    {
      name: "Title",
      selector: "slot_no",
    },
    {
      name: " Color",
      selector: "color",
      cell: (a) => {
        return (
          <div>
            {a.color ? <Badge color={a.color} text={a.color} /> : "n/a"}
          </div>
        );
      },
    },
    {
      name: "Plate No",
      selector: "plate_no",
      cell: (a) => {
        return <div>{a.plate_no ? a.plate_no : "n/a"}</div>;
      },
    },
    {
      name: "Available?",
      selector: "available",
      cell: (a) => {
        return (
          <div>
            <Switch checked={a.available} /> {a.available ? "Open" : "Taken"}
          </div>
        );
      },
    },
  ];

  return (
    <DataTable
      title="Parking Lot Management"
      columns={columns}
      data={number_of_slot}
    />
  );
};

export default Exit;
