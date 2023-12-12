import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Modal, Row } from "react-bootstrap";
import { startHiddenModal } from "../../redux/uiSlice/thunk";
import dayjs from "dayjs";
export const InvoiceModal = () => {
  const { modal, dataModal } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(startHiddenModal());
  };
  console.log(dataModal);
  if (!Object.keys(dataModal).length) {
    return <></>;
  }
  return (
    <Modal
      size="xl"
      show={modal === "invoice" ? true : false}
      onHide={handleClose}
      className="modal-ticket"
    >
      <Row>
        <h4>Solicitante</h4>
        <Col xs={4}>{dataModal.bussiness_name}</Col>
        <h4>Datos</h4>
        <Col xs={6}>RFC: {dataModal.rfc}</Col>
        <Col xs={6}>CFDI: {dataModal.cfdis.name}</Col>
        <Col xs={6}>Orden #: {dataModal.order_id}</Col>
        <Col xs={6}>Usuario solicitante: {dataModal.user_id}</Col>
        <Col xs={12}>
          Fecha de creación:{" "}
          {dayjs(dataModal.created_at).format("YYYY-MM-DD HH:mm")}
        </Col>
        <Col xs={12}>Estado: {dataModal.status_name}</Col>
        <h4>Detalles de envio</h4>
        <Col xs={12}>
          <p>Calle: {dataModal.address_invoice.street}</p>
          <p>Numero exterior: {dataModal.address_invoice.number_outside}</p>
          <p>
            Numero interior:{" "}
            {dataModal.address_invoice.number_inside ?? "No añadido"}
          </p>
          <p>Estado: {dataModal.state.name}</p>
          <p>Ciudad: {dataModal.address_invoice.city}</p>
          <p>Colonia: {dataModal.address_invoice.suburb}</p>
        </Col>
      </Row>
    </Modal>
  );
};
