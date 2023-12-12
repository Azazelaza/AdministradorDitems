import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Modal, Row } from "react-bootstrap";
import { startHiddenModal } from "../../redux/uiSlice/thunk";
import { useForm } from "react-hook-form";
import { startUpdateInvoice } from "../../redux/InvoiceSlice/thunk";

export const StatusInvoice = () => {
  const { modal, dataModal } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();
  const handleClose = () => {
    dispatch(startHiddenModal());
  };

  const changeStatus = (status) => {
    dispatch(startUpdateInvoice({ invoice_id: dataModal.id, status }));
    handleClose();
  };
  return (
    <Modal
      size="md"
      show={modal === "invoice_status" ? true : false}
      onHide={handleClose}
      className="modal-ticket"
    >
      <Modal.Header closeButton>
        <Modal.Title>Cambiar estatus</Modal.Title>
      </Modal.Header>
      <Row>
        <Form onSubmit={handleSubmit(changeStatus)}>
          <Form.Select {...register("status")} className="mb-3" size="lg">
            <option className="d-none">Selecciona una opción</option>
            <option value="1">Recibida</option>
            <option value="2">Enviada</option>
            <option value="3">Procesando</option>
            <option value="4">En espera</option>
            <option value="5">Completada</option>
            <option value="6">Cancelar</option>
          </Form.Select>
          <Button variant="primary" type="submit">
            Actualizar estado
          </Button>
        </Form>
      </Row>
    </Modal>
  );
};
