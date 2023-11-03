import { setTickets } from "./ticketsSlice"
import { FirebaseDB } from "../../firebase/config"
import Swal from "sweetalert2"
import { UiAppLoad, UiLoadingApp } from "../uiSlice/uiSlice"
import { Call } from "../../hooks/apiRequest"

export const startGetTickets = (statusId, data) => {
    return async (dispatch) => {
        dispatch(UiLoadingApp())
        const products = await Call(
            `/ticket/status/${data.id}`,
            'PUT',
            { status: statusId }
        )
        dispatch(setTickets(products.data));
        dispatch(UiAppLoad())
    }
}

export const startUpdateTickets = ({ language, data }) => {
    return async (dispatch) => {



        Swal.fire(
            'Completado',
            'Se actualizo el ticket correctamente',
            'success'
        )

        dispatch(startGetTickets());
    }
}

/* export const startDeleteMembership = ({ language, id }) => {
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
                const docRef = doc(FirebaseDB, `Pagina/${language}/MemberShip/${id}`);
                await deleteDoc(docRef);

                dispatch(startGetMembership(
                    { language: 'ES' }
                ));

                Swal.fire(
                    'Eliminado!',
                    'El plan fue eliminado.',
                    'success'
                )
            }
        })

    }
} */