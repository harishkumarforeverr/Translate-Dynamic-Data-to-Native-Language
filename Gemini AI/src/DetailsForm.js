import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./DetailsForm.css";
const DetailsForm = ({ onFinish }) => {
  return (
    <div className="DetailsForm">
      <h1> Translate to Telugu</h1>
      <Form
        initialValues={{
          AnyReason: "I am Happy now",
        }}
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
      >
        <div className="fieldContainer">
          <Form.Item
            label="Any Reason"
            name="AnyReason"
            rules={[
              {
                required: true,
                message: "Please input your Any Reason!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item className="submitBtn">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};
export default DetailsForm;
