import React, { useEffect, useMemo } from "react";
import styles from "../../styles/views/dashboard/Pagecontent.module.scss";
import { Accordion, Button, Col, Form, Row } from "react-bootstrap";
import { InputForm } from "../../components/ui/Forms/InputForm";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  startPostDataPageContent,
  startSetPageContent,
} from "../../redux/pageSlice/thunk";
import Loading from "../../components/ui/Loading";

export default function Pagecontent() {
  const { page_id } = useSelector((state) => state.pageContent);
  const { data } = useSelector((state) => state.pageContent);
  const dispatch = useDispatch();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(startSetPageContent());
  }, [page_id]);

  useEffect(() => {
    reset(data);
  }, [data]);

  const submitProp = (dataForm) => {
    dispatch(startPostDataPageContent(dataForm));
  };

  const { loading } = useSelector((state) => state.ui);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.contentPageWeb}>
      <Form onSubmit={handleSubmit(submitProp)}>
        <Row>
          <h1>Banner</h1>
          <Col xs={6}>
            <InputForm
              title="Titulo"
              InputName="TitleBanner"
              register={register}
              errors={errors}
            />
          </Col>
          <Col xs={6}>
            <InputForm
              title="Imagen"
              type="file"
              InputName="image1Trace"
              register={register}
              errors={errors}
            />
          </Col>

          <h1>Slider</h1>
          <Col xs={12}>
            <InputForm
              title="Titulo"
              InputName="TitleSlide"
              register={register}
              errors={errors}
            />
            <InputForm
              title="Descripción"
              InputName="DescripcionSlide"
              register={register}
              errors={errors}
            />
            <InputForm
              title="Imagen"
              type="file"
              InputName="imagenSlide"
              register={register}
              errors={errors}
            />
          </Col>
          <h1>Rastro</h1>
          <Col xs={12}>
            <InputForm
              title="Titulo"
              InputName="TitleTrace"
              register={register}
              errors={errors}
            />
            <InputForm
              title="Descripción"
              InputName="DescriptionTrace"
              register={register}
              errors={errors}
            />
          </Col>
          <Col xs={4} className="px-2">
            <InputForm
              title="Texto izquierda"
              InputName="TextLeftTrace"
              register={register}
              errors={errors}
            />
          </Col>
          <Col xs={4} className="px-2">
            <InputForm
              title="Imagen"
              type="file"
              InputName="image1Trace"
              register={register}
              errors={errors}
            />
          </Col>
          <Col xs={4} className="px-2">
            <InputForm
              title="Texto derecha"
              InputName="TextRightTrace"
              register={register}
              errors={errors}
            />
          </Col>
          <h1>¿Como funciona?</h1>
          <h4>Sección 1</h4>
          <Col xs={12}>
            <InputForm
              title="Titulo"
              InputName="TitleSection1"
              register={register}
              errors={errors}
            />
            <InputForm
              title="Descripción"
              InputName="DescriptionSection1"
              register={register}
              errors={errors}
            />
          </Col>
          <h4>Sección 2</h4>
          <Col xs={12}>
            <InputForm
              title="Titulo"
              InputName="TitleSection2"
              register={register}
              errors={errors}
            />
            <InputForm
              title="Descripción"
              InputName="DescriptionSection2"
              register={register}
              errors={errors}
            />
          </Col>
          <h4>Sección 3</h4>
          <Col xs={12}>
            <InputForm
              title="Titulo"
              InputName="TitleSection3"
              register={register}
              errors={errors}
            />
            <InputForm
              title="Descripción"
              InputName="DescriptionSection3"
              register={register}
              errors={errors}
            />
          </Col>
          <h4>Sección 4</h4>
          <Col xs={12}>
            <InputForm
              title="Titulo"
              InputName="TitleSection4"
              register={register}
              errors={errors}
            />
            <InputForm
              title="Descripción"
              InputName="DescriptionSection4"
              register={register}
              errors={errors}
            />
          </Col>
          <h4>Sección 5</h4>
          <Col xs={12}>
            <InputForm
              title="Titulo"
              InputName="TitleSection5"
              register={register}
              errors={errors}
            />
            <InputForm
              title="Descripción"
              InputName="DescriptionSection5"
              register={register}
              errors={errors}
            />
          </Col>
          <h1>Seguridad</h1>
          <Col>
            <InputForm
              title="Titulo"
              InputName="TitleSecurity"
              register={register}
              errors={errors}
            />
            <InputForm
              title="Descripción"
              InputName="DescriptionSecurity"
              register={register}
              errors={errors}
              className="mb-3"
            />
          </Col>
          <h4>Sección 1</h4>
          <Col>
            <InputForm
              title="Titulo"
              InputName="TitleSecuritySection1"
              register={register}
              errors={errors}
            />
            <InputForm
              title="Descripcion"
              InputName="DescriptionSecuritySection1"
              register={register}
              errors={errors}
            />
          </Col>
          <h4>Sección 2</h4>
          <Col>
            <InputForm
              title="Titulo"
              InputName="TitleSecuritySection2"
              register={register}
              errors={errors}
            />
            <InputForm
              title="Descripcion"
              InputName="DescriptionSecuritySection2"
              register={register}
              errors={errors}
            />
          </Col>
          <h4>Sección 3</h4>
          <Col>
            <InputForm
              title="Titulo"
              InputName="TitleSecuritySection3"
              register={register}
              errors={errors}
            />
            <InputForm
              title="Descripcion"
              InputName="DescriptionSecuritySection3"
              register={register}
              errors={errors}
            />
          </Col>
        </Row>
        <Button type="submit" className="mt-5 ms-auto d-block">
          Guardar Información
        </Button>
      </Form>
    </div>
  );
}
