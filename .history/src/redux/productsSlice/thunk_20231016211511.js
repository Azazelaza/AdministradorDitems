import { setProducts } from "./productsSlice"
import { UiAppLoad, UiLoadingApp } from "../uiSlice/uiSlice"
import Swal from "sweetalert2"
import { Call } from "../../hooks/apiRequest";

export const startGetProduct = () => {
    return async (dispatch) => {
        dispatch(UiLoadingApp())
        const products = await Call(
            `products/company/${localStorage.getItem('company_id')}`,
            'GET',
        )
        dispatch(setProducts(products.data));
        dispatch(UiAppLoad())
    }
}

export const startCreateProduct = ({ data }) => {
    return async (dispatch) => {
        data.company_id = localStorage.getItem('company_id');

        await Call(
            `userAdmin/products`,
            'POST',
            data
        )
        Swal.fire(
            'Completado',
            'Se agrego el plan correctamente',
            'success'
        )

        dispatch(startGetProduct());
    }
}
export const startUpdateProduct = ({ data }) => {
    return async (dispatch) => {
        data.company_id = localStorage.getItem('company_id');

        await Call(
            `userAdmin/products/${data.id}`,
            'PUT',
            data
        )

        Swal.fire(
            'Completado',
            'Se actualizo el plan correctamente',
            'success'
        )

        dispatch(startGetProduct());
    }
}

export const startDeleteProduct = ({ id }) => {
    return async (dispatch) => {
        Swal.fire({
            title: 'Seguro que quieres eliminarlo?',
            text: "Esta acción no se podra revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, Eliminar'
        }).then(async (result) => {
            if (result.success) {
                const products = await Call(
                    `userAdmin/products/${id}`,
                    'DELETE',
                )
                if (products.success) {
                    dispatch(startGetProduct());
                    Swal.fire(
                        'Eliminado!',
                        'El plan fue eliminado.',
                        'success'
                    )
                }
                Swal.fire(
                    'Ooops!',
                    'Ocurrio un error intentalo mas tarde.',
                    'error'
                )
            }
        })

    }
}