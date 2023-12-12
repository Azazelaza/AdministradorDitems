import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Modal, Row } from "react-bootstrap";
import { startHiddenModal } from "../../redux/uiSlice/thunk";
import dayjs from "dayjs";
export const OrderModal = () => {
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
      show={modal === "order" ? true : false}
      onHide={handleClose}
      className="modal-ticket"
    >
      <Row>
        <h4>Usuario</h4>
        <Col xs={4}>{dataModal.user.name}</Col>
        <Col xs={4}>{dataModal.user.email}</Col>
        <Col xs={4}>{dataModal.user.phone}</Col>
        <h4>Producto</h4>
        <Col xs={4}>Nombre: {dataModal.products.product.name}</Col>
        <Col xs={4}>Precio: ${dataModal.products.product.price}</Col>
        <Col xs={4}>Cantidad: {dataModal.products.product.quantity}</Col>
        <h4>Detalles</h4>
        <Col xs={12}>Costo de envio: $150.00</Col>
        <Col xs={12}>
          Fecha de creación:{" "}
          {dayjs(dataModal.created_at).format("YYYY-MM-DD HH:mm")}
        </Col>
        <Col xs={12}>Estado: {dataModal.status}</Col>
        <Col xs={12}>Pagado en: {dataModal.payment_type}</Col>
        <h4>Detalles de envio</h4>
        <Col xs={12}>
          <p>Calle: {dataModal.address_shipping.street}</p>
          <p>Numero exterior: {dataModal.address_shipping.number_outside}</p>
          <p>
            Numero interior:{" "}
            {dataModal.address_shipping.number_inside ?? "No añadido"}
          </p>
          <p>Estado: {dataModal.state.name}</p>
          <p>Ciudad: {dataModal.address_shipping.city}</p>
          <p>Colonia: {dataModal.address_shipping.suburb}</p>
          <p>Codigo Postal: {dataModal.address_shipping.zip}</p>
          <p>Notas: {dataModal.address_shipping.notes}</p>
        </Col>
      </Row>
    </Modal>
  );
};
