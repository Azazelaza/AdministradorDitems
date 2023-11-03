import React from "react";
import { useSelector } from "react-redux";
import { Col, Modal, Row } from "react-bootstrap";
import { startHiddenModal } from "../../redux/uiSlice/thunk";
export const TicketModal = () => {
  const { modal, dataModal } = useSelector((state) => state.ui);
  const handleClose = () => {
    dispatch(startHiddenModal());
  };
  return (
    <Modal
      size="lg"
      show={modal === "tickets" ? true : false}
      onHide={handleClose}
    >
      <Row>
        <h1>Solicitante</h1>
        <Col>{dataModal.request_user_id}</Col>
        <h1>Contacto</h1>
        <Col>{dataModal.user_email}</Col>
        <h1>Problema</h1>
        <Col>{dataModal.incident}</Col>
        <h4>Descripción</h4>
        <Col>{dataModal.description}</Col>
        <h4>Estatus</h4>
        <Col>{dataModal.status_name}</Col>
      </Row>
    </Modal>
  );
};
