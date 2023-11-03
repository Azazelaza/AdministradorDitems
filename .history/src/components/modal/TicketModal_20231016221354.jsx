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
    >
      <>
        <h1>Solicitante</h1>
        <div>{dataModal.request_user_id}</div>
        <h1>Contacto</h1>
        <div>{dataModal.user_email}</div>
        <h1>Problema</h1>
        <div>{dataModal.incident}</div>
        <h4>Descripción</h4>
        <div>{dataModal.description}</div>
        <h4>Estatus</h4>
        <div>{dataModal.status_name}</div>
      </>
    </Modal>
  );
};
