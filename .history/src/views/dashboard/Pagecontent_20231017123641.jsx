import React, { useEffect, useMemo, useState } from "react";
import styles from "../../styles/views/dashboard/Pagecontent.module.scss";
import { Button, Col, Form, Row } from "react-bootstrap";
import { InputForm } from "../../components/ui/Forms/InputForm";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  startPostDataPageContent,
  startSetPageContent,
} from "../../redux/pageSlice/thunk";
import Loading from "../../components/ui/Loading";
import { ImageForm } from "../../components/ui/Forms/ImageForm";

export default function Pagecontent() {
  const { page_id } = useSelector((state) => state.pageContent);
  const { data } = useSelector((state) => state.pageContent);
  const dispatch = useDispatch();
  const {
    reset,
    register,
    handleSubmit,
    setValue,
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
      <Form className="m-5" onSubmit={handleSubmit(submitProp)}>
        <Row>
          <h1>Principal</h1>
          <Col xs={6}>
            <ImageForm
              name="logoBanner"
              setValue={setValue}
              text="Logo del banner"
              data={data.logoBanner}
            />
          </Col>
          <Col xs={6}>
            <ImageForm
              name="logoPrincipal"
              setValue={setValue}
              text="Logo"
              data={data.logoPrincipal}
            />
          </Col>
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
            <ImageForm
              name="imageBanner"
              setValue={setValue}
              text="Imagen"
              data={data.imageBanner}
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
            <ImageForm
              name="imagenSlide"
              setValue={setValue}
              text="Imagen"
              data={data.imagenSlide}
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
            <ImageForm
              name="image1Trace"
              setValue={setValue}
              text="Imagen"
              data={data.image1Trace}
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
          <Col xs={6}>
            <ImageForm
              name="functionlateral"
              setValue={setValue}
              text="Imagen lateral"
              data={data.functionlateral}
            />
          </Col>
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
          <Col xs={6}>
            <ImageForm
              name="seguritylateral"
              setValue={setValue}
              text="Imagen lateral"
              data={data.seguritylateral}
            />
          </Col>
          <h4>Descripción final</h4>
          <Col xs={12}>
            <InputForm
              title="Descripcion final"
              InputName="localizated"
              register={register}
              errors={errors}
            />
          </Col>
          <Col xs={4}>
            <ImageForm
              name="deviceleft"
              setValue={setValue}
              text="Dispositivo izquierda"
              data={data.deviceleft}
            />
          </Col>
          <Col xs={4}>
            <ImageForm
              name="deviceright"
              setValue={setValue}
              text="Dispositivo derecha"
              data={data.deviceright}
            />
          </Col>
          <Col xs={4}>
            <ImageForm
              name="imagelateraldevice"
              setValue={setValue}
              text="Imagen derecha"
              data={data.imagelateraldevice}
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
