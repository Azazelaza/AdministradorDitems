import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Modal, Row } from "react-bootstrap";
import { startHiddenModal } from "../../redux/uiSlice/thunk";
export const ChangeTicketModal = () => {
  const { modal } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(startHiddenModal());
  };
  return (
    <Modal
      size="md"
      show={modal === "ticket_status" ? true : false}
      onHide={handleClose}
      className="modal-ticket"
    >
      <Modal.Header closeButton>
        <Modal.Title>Cambiar estatus</Modal.Title>
      </Modal.Header>
      <Row>
        <Form.Select className="mb-3" size="lg">
          <option className="d-none">Selecciona una opción</option>
          <option value="2">En proceso</option>
          <option value="3">Completado</option>
          <option value="4">En espera</option>
          <option value="5">Cancelado</option>
        </Form.Select>
        <Button variant="primary" type="submit" /*onClick={handleSubmit}*/>
          Actualizar estado
        </Button>
      </Row>
    </Modal>
  );
};