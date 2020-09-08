import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

export default function UserInput({ setUserName }) {
  const [User, setUser] = useState("");

  const updateUser = (e) => {
    setUser(e.target.value);
    setUserName(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group as={Col} controlId="formBasicEmail">
          <Form.Label>Enter Github Username</Form.Label>
          <Form.Control
            size="md"
            type="text"
            placeholder="Enter name"
            value={User}
            onChange={updateUser}
          />
          <Form.Text className="text-muted">
            start typing and results will display
          </Form.Text>
        </Form.Group>
      </Form>
    </>
  );
}
