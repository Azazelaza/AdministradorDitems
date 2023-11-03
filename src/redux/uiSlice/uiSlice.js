import { createSlice } from '@reduxjs/toolkit';

const initialStatus = {
    loading: 1,
    modal: '',
    dataModal: {},
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState: initialStatus,
    reducers: {
        UiLoadingApp: (state) => {
            state.loading = 1
        },
        UiAppLoad: (state) => {
            state.loading = 0
        },
        ShowModal: (state, { payload }) => {
            state.modal = payload
        },
        HiddenModal: (state) => {
            state.modal = ''
            state.dataModal = {}
        },
        SetDataModal: (state, { payload }) => {
            state.dataModal = payload
        }
    }
})

export const { UiLoadingApp, UiAppLoad, SetDataModal, ShowModal, HiddenModal } = uiSlice.actions;
export default uiSlice.reducer