import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startHiddenModal } from "../../redux/uiSlice/thunk";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { InputForm } from "../ui/Forms/InputForm";
import { useForm } from "react-hook-form";
import styles from "../../styles/components/modal.module.scss";
import {
  startCreateMembership,
  startUpdateMembership,
} from "../../redux/membershipSlice/thunk";

export const MembershipModal = () => {
  const { modal, dataModal } = useSelector((state) => state.ui);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(startHiddenModal());
    reset();
  };

  const createMembership = (data) => {
    dispatch(startCreateMembership({ language: "ES", data: data }));
    handleClose();
  };

  const updateMembership = (data) => {
    dispatch(startUpdateMembership({ language: "ES", data: data }));
    handleClose();
  };

  useEffect(() => {
    reset(dataModal);
  }, [modal]);

  return (
    <Modal
      size="lg"
      show={modal === "planes" ? true : false}
      onHide={handleClose}
    >
      <Form
        onSubmit={handleSubmit(
          Object.keys(dataModal).length ? updateMembership : createMembership
        )}
      >
        <Modal.Header closeButton>
          <Modal.Title>Agregar Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalGeneral}>
          <Row>
            <Col sm={12}>
              <InputForm
                title="Nombre"
                InputName="name"
                register={register}
                errors={errors}
                FieldRequired={true}
              />
            </Col>
            <Col sm={12}>
              <InputForm
                title="Descripción corta"
                InputName="description"
                textArea={true}
                register={register}
                errors={errors}
                style={{ height: "100px" }}
                FieldRequired={true}
              />
            </Col>
            <Col sm={12}>
              <InputForm
                title="Descripción"
                InputName="benefits"
                textArea={true}
                register={register}
                errors={errors}
                style={{ height: "100px" }}
                FieldRequired={true}
              />
            </Col>
            <Col sm={12}>
              <InputForm
                title="Precio"
                InputName="price"
                textStart="$"
                register={register}
                errors={errors}
                FieldRequired={true}
              />
            </Col>
            <Col sm={12}>
              <Form.Group controlId="isActive" className="form-checkbox">
                <Form.Label>Activo</Form.Label>
                <Form.Check type={"checkbox"} {...register("isActive")} />
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Guardar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
