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
import { yupResolver } from "@hookform/resolvers/yup";
import { products } from "../../validates/validations";

export const ProductsModal = () => {
  const { modal, dataModal } = useSelector((state) => state.ui);
  const {
    reset,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(products) });
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(startHiddenModal());
    reset();
  };

  const createProduct = (data) => {
    if (!Object.keys(dataModal).length) {
      dispatch(startCreateProduct({ data: data }));
    } else {
      dispatch(startUpdateProduct({ data: data }));
    }

    handleClose();
  };

  useEffect(() => {
    reset(dataModal);
    console.log(dataModal);
  }, [modal]);

  return (
    <Modal
      size="lg"
      show={modal === "product" ? true : false}
      onHide={handleClose}
    >
      <Form onSubmit={handleSubmit(createProduct)}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalGeneral}>
          <Row>
            <Col sm={6}>
              <InputForm
                title="Nombre"
                InputName="name"
                register={register}
                errors={errors}
                FieldRequired={true}
              />
            </Col>
            <Col sm={6}>
              <InputForm
                title="Subtitulo"
                InputName="subtitle"
                register={register}
                errors={errors}
                FieldRequired={true}
              />
            </Col>
            <InputForm
              title="Descripción"
              InputName="description"
              textArea={true}
              register={register}
              errors={errors}
              style={{ height: "100px" }}
              FieldRequired={true}
            />
            <Col sm={6}>
              <InputForm
                title="Precio"
                InputName="price"
                textStart="$"
                register={register}
                errors={errors}
                FieldRequired={true}
              />
            </Col>
            <Col sm={6}>
              <ImageForm
                name="image"
                errors={errors}
                setValue={setValue}
                text="Imagen de producto"
                data={dataModal.image ?? []}
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
