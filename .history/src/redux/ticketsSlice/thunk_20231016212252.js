import { setTickets } from "./ticketsSlice"
import { FirebaseDB } from "../../firebase/config"
import Swal from "sweetalert2"
import { UiLoadingApp } from "../uiSlice/uiSlice"
import { Call } from "../../hooks/apiRequest"

export const startGetTickets = ({ language }) => {
    return async (dispatch) => {
        dispatch(UiLoadingApp())
        const products = await Call(
            `userAdmin/tickets/company/${localStorage.getItem('company_id')}`,
            'GET',
        )
        dispatch(setTickets(products.data));
        dispatch(UiAppLoad())
    }
}

export const startUpdateTickets = ({ language, data }) => {
    return async (dispatch) => {
        const docRef = doc(FirebaseDB, `Incidencias/${data.id}`);
        await setDoc(docRef, data, { merge: true })

        Swal.fire(
            'Completado',
            'Se actualizo la incidencia correctamente',
            'success'
        )

        dispatch(startTickets());
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