import React, { useState } from "react";
import { Modal, Button, Form, Select } from "antd";

const Exit = (props) => {
  const { onSubmitCar } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onReset = () => {
    form.resetFields();
    handleCancel();
  };

  const onFinish = (values) => {
    values = {
      ...values,
      color: null,
      plate_no: null,
      available: true,
    };
    onSubmitCar(values);
    onReset();
    handleCancel();
  };

  return (
    <>
      <Button onClick={showModal} style={{ width: "200px" }} size="large">
        Exit Car
      </Button>

      <Modal title="Exit" visible={isModalVisible} footer={null} width={300}>
        <Form onFinish={onFinish} form={form}>
          <Form.Item name="slot_no">
            <Select placeholder="Select Parking Slot">
              {props.number_of_slot.map((item, index) => {
                return (
                  !item.available && (
                    <Select.Option key={index} value={item.slot_no}>
                      {item.slot_no}
                    </Select.Option>
                  )
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Confirm
            </Button>
            <Button onClick={onReset} style={{ marginLeft: 10 }}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Exit;
