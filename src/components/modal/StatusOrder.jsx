import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Modal, Row } from "react-bootstrap";
import { startHiddenModal } from "../../redux/uiSlice/thunk";
import { useForm } from "react-hook-form";
import { startUpdateTickets } from "../../redux/ticketsSlice/thunk";
import { startUpdateOrder } from "../../redux/orderSlice/thunk";
export const StatusOrder = () => {
  const { modal, dataModal } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();
  const handleClose = () => {
    dispatch(startHiddenModal());
  };

  const changeStatus = (status) => {
    dispatch(startUpdateOrder({order_id: dataModal.id, status}));
    handleClose();
  };
  return (
    <Modal
      size="md"
      show={modal === "status_order" ? true : false}
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
            <option value="Recibida">Recibida</option>
            <option value="Enviada">Enviada</option>
            <option value="Procesando">Procesando</option>
            <option value="En espera">En espera</option>
            <option value="Completada">Completada</option>
            <option value="Cancelada">Cancelar</option>
          </Form.Select>
          <Button variant="primary" type="submit">
            Actualizar estado
          </Button>
        </Form>
      </Row>
    </Modal>
  );
};
