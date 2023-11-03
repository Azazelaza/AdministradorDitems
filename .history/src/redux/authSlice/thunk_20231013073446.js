import Swal from "sweetalert2";
import { setLogin, logout, renew } from "./authSlice"
import { Call } from "../../hooks/apiRequest";

export const startLoginAdmin = (data) => {
    return async (dispatch) => {
        dispatch(renew());

        const login = await Call(
            'admin/login',
            'POST',
            data)
        if (login.success) {
            localStorage.setItem('token', login.token);
            dispatch(setLogin(login.user));
            dispatch(renew());
            return true;
        }
        else {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'error',
                title: 'El correo o la contraseña es incorrecto'
            })
        }

        dispatch(renew());

        return false
    }
}

export const checkUserLogin = () => {
    return async (dispatch) => {
        dispatch(renew());

        const login = await Call(
            'admin/check',
            'POST',
            { 'remember_token': localStorage.getItem('token') ?? '' }
        )

        if (login.success) {
            localStorage.setItem('token', login.token);
            dispatch(setLogin(login.user))
            return true;
        } else {
            localStorage.clear();

            const Toast = Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'error',
                title: 'Vuelve a iniciar sesión'
            })
        }

        dispatch(renew());
    }
}

export const startLogOut = () => {
    return async (dispatch) => {
        dispatch(renew());
        localStorage.removeItem('token')
        dispatch(logout());
    }
}