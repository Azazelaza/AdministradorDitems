import { setMembership } from "./memberShipSlice"
import { UiAppLoad, UiLoadingApp } from "../uiSlice/uiSlice"
import Swal from "sweetalert2"
import { Call } from "../../hooks/apiRequest";

export const startGetMembership = () => {
    return async (dispatch) => {
        dispatch(UiLoadingApp())
        const memberShip = await Call(
            `membership/company/${localStorage.getItem('company_id')}`,
            'GET',
        )
        if (memberShip.success) {
            dispatch(setMembership(memberShip));
        }
        dispatch(UiAppLoad())
    }
}

export const startCreateMembership = ({ data }) => {
    return async (dispatch) => {
        data.company_id = localStorage.getItem('company_id');

        await Call(
            `userAdmin/membership`,
            'POST',
            data
        );
        Swal.fire(
            'Completado',
            'Se agrego el plan correctamente',
            'success'
        );
        dispatch(startGetMembership());
    }
}
export const startUpdateMembership = ({ data }) => {
    return async (dispatch) => {
        data.company_id = localStorage.getItem('company_id');

        await Call(
            `userAdmin/membership/${data.id}`,
            'PUT',
            data
        )

        Swal.fire(
            'Completado',
            'Se actualizo el plan correctamente',
            'success'
        )

        dispatch(startGetMembership());
    }
}

export const startDeleteMembership = ({ id }) => {
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
            if (result.isConfirmed) {
                const memberShip = await Call(
                    `userAdmin/membership/${id}`,
                    'DELETE',
                )
                if (memberShip.success) {
                    dispatch(startGetMembership());
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