import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Row } from "react-bootstrap";
import { startHiddenModal } from "../../redux/uiSlice/thunk";
export const TicketModal = () => {
  const { modal, dataModal } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(startHiddenModal());
  };
  return (
    <Modal
      size="xl"
      show={modal === "ticket_status" ? true : false}
      onHide={handleClose}
      className="modal-ticket"
    >
      <Row>
        <h4>Estatus</h4>
        <Form.Select size="lg">
          <option className="d-none">Selecciona una opción</option>
        </Form.Select>
      </Row>
    </Modal>
  );
};
