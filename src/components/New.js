import React, { useState } from "react";
import { Modal, Button, Input, Form, Select, Badge } from "antd";

const New = (props) => {
  const { onSubmitCar } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const onReset = () => {
    form.resetFields();
    handleCancel();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    values = {
      ...values,
      available: false,
    };

    onSubmitCar(values);
    handleCancel();
    onReset();
  };

  return (
    <>
      <span style={{ marginRight: "20px" }} />
      <Button
        type="primary"
        onClick={showModal}
        style={{ width: "200px" }}
        size="large"
      >
        New Car
      </Button>
      <Modal title="Add New" visible={isModalVisible} footer={null} width={300}>
        <Form onFinish={onFinish} form={form}>
          <Form.Item name="slot_no">
            <Select placeholder="Select Parking Slot">
              {props.number_of_slot.map((item, index) => {
                return (
                  item.available && (
                    <Select.Option key={index} value={item.slot_no}>
                      {item.slot_no}
                    </Select.Option>
                  )
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item name="color">
            <Select placeholder="Select Car Color">
              {props.colors.map((item, index) => {
                return (
                  <Select.Option key={index} value={item}>
                    <Badge color={item} text={item} />
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item name="plate_no">
            <Input placeholder="Input plate number" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button onClick={handleCancel} style={{ marginLeft: 10 }}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default New;
