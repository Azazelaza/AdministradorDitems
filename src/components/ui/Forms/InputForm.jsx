import React, { useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Swal from "sweetalert2";

export const InputForm = ({
  title,
  InputName,
  place = title,
  type = "text",
  register,
  FieldRequired = false,
  errors,
  value = "",
  max = 99,
  textArea = false,
  min = 0,
  input = "",
  textStart = "",
  className = "",
  ...props
}) => {
  return (
    <Form.Group>
      <Form.Label>{title}</Form.Label>
      <InputGroup className="mb-3">
        {textStart && (
          <InputGroup.Text style={{ backgroundColor: "transparent" }}>
            {textStart}
          </InputGroup.Text>
        )}
        <Form.Control
          {...register(InputName)}
          type={type}
          placeholder={place}
          as={textArea ? "textarea" : "input"}
          className={`${className} + ${
            errors[InputName] && "error-input-form"
          }`}
          {...props}
        />
      </InputGroup>
      {errors[InputName] && (
        <p className="text-danger">{errors[InputName]?.message}*</p>
      )}
    </Form.Group>
  );
};
