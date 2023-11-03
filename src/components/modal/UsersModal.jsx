import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startHiddenModal } from '../../redux/uiSlice/thunk';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { InputForm } from '../ui/Forms/InputForm';
import { useForm } from 'react-hook-form';
import styles from '../../styles/components/modal.module.scss';
import { startCreateuser } from '../../redux/usersSlice/thunk';

export const UsersModal = () => {
    const { modal } = useSelector(state => state.ui);
    const { reset, register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(startHiddenModal());
        reset();
    }

    const createProduct = (data) => {
/*         dispatch(startCreateuser({ language: 'ES', data: data }));
 */        handleClose();
    }

    return (
        <Modal size='lg' show={modal === 'planes' ? true : false} onHide={handleClose} >
            <Form onSubmit={handleSubmit(createProduct)}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Plan</Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.modalGeneral}>
                    <Row>
                        <Col sm={12}>
                            <InputForm
                                title='Nombre'
                                InputName='name'
                                register={register}
                                errors={errors}
                                FieldRequired={true}
                            />
                        </Col>
                        <Col sm={12}>
                            <InputForm
                                title='Descripción'
                                InputName='description'
                                textArea={true}
                                register={register}
                                errors={errors}
                                style={{ height: '100px' }}
                                FieldRequired={true}
                            />
                        </Col>
                        <Col sm={12}>
                            <InputForm
                                title='Beneficios'
                                InputName='benefits'
                                textArea={true}
                                register={register}
                                errors={errors}
                                style={{ height: '100px' }}
                                FieldRequired={true}
                            />
                        </Col>
                        <Col sm={12}>
                            <InputForm
                                title='Precio'
                                InputName='price'
                                textStart='$'
                                register={register}
                                errors={errors}
                                FieldRequired={true}
                            />
                        </Col>
                        <Col sm={6}>
                            {/* <InputForm
                                title='Imagen (PNG)'
                                InputName='image'
                                type='file'
                                register={register}
                                errors={errors}
                            /> */}
                        </Col>
                    </Row>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" type='submit' onClick={handleSubmit}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal >
    )
}
