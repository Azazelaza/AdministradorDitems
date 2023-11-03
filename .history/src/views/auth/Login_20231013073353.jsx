import React, { useEffect, useState } from "react";
import styles from "../../styles/views/auth/Login.module.scss";
import { Button, Form, Image, InputGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
/* import logo from '../../assets/logo/logopetid.svg'
 */ import { startLoginAdmin } from "../../redux/authSlice/thunk";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../../validates/validations";

export default function Login() {
  const { checking } = useSelector((state) => state.auth);
  const [showPass, setShowPass] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(login) });

  const loginMail = async (data) => {
    if (dispatch(startLoginAdmin(data))) {
      navigate('/dashboard/')
    }
  };

  return (
    <>
      <Row className={styles.authArea}>
        <div className="m-auto">
          <form onSubmit={handleSubmit(loginMail)} className={styles.login}>
            <Image src="/logo.png" width={200} />
            <InputGroup className={styles.inputs}>
              <InputGroup.Text id="icon-email">
                <FontAwesomeIcon icon={faEnvelope} />
              </InputGroup.Text>
              <Form.Control {...register("email")} placeholder="Usuario" />
            </InputGroup>
            <InputGroup className={styles.inputs}>
              <InputGroup.Text id="icon-pass">
                <FontAwesomeIcon icon={faKey} />
              </InputGroup.Text>
              <Form.Control
                type={!showPass ? "password" : "text"}
                {...register("password")}
                onDragEnter={() => loginMail()}
                placeholder="Contraseña"
              />
              <InputGroup.Text
                onClick={() => setShowPass((e) => !e)}
                id="icon-show"
              >
                {showPass ? (
                  <FontAwesomeIcon icon={faEyeSlash} />
                ) : (
                  <FontAwesomeIcon icon={faEye} />
                )}
              </InputGroup.Text>
            </InputGroup>
            {Boolean(Object.keys(errors).length) && (
              <div className="alert alert-danger">
                {Object.keys(errors).map((item) => (
                  <p>{errors[item].message}</p>
                ))}
              </div>
            )}
            <Button disabled={checking} type="submit" variant="fourth">
              Ingresar
            </Button>
          </form>
        </div>
      </Row>
    </>
  );
}
