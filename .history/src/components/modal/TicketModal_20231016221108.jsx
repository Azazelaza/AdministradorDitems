import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startHiddenModal } from "../../redux/uiSlice/thunk";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { InputForm } from "../ui/Forms/InputForm";
import { useForm } from "react-hook-form";
import styles from "../../styles/components/modal.module.scss";
import {
  startCreateProduct,
  startUpdateProduct,
} from "../../redux/productsSlice/thunk";
import { ImageForm } from "../ui/Forms/ImageForm";

export const ProductsModal = () => {
  const { modal, dataModal } = useSelector((state) => state.ui);

  return (
    <Modal
      size="lg"
      show={modal === "ticket" ? true : false}
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
