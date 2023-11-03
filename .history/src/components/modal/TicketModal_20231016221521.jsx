import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Modal, Row } from "react-bootstrap";
import { startHiddenModal } from "../../redux/uiSlice/thunk";
export const TicketModal = () => {
  const { modal, dataModal } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(startHiddenModal());
  };
  return (
    <Modal
      size="lg"
      show={modal === "tickets" ? true : false}
      onHide={handleClose}
      className="modal-ticket"
    >
      <Row>
        <h1>Solicitante</h1>
        <Col xs={12}>{dataModal.request_user_id}</Col>
        <h1>Contacto</h1>
        <Col xs={12}>{dataModal.user_email}</Col>
        <h1>Problema</h1>
        <Col xs={12}>{dataModal.incident}</Col>
        <h4>Descripción</h4>
        <Col xs={12}>
          <p>{dataModal.description}</p>
        </Col>
        <h4>Estatus</h4>
        <Col xs={12}>{dataModal.status_name}</Col>
      </Row>
    </Modal>
  );
};
