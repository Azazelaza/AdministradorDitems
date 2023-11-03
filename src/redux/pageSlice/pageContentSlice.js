import { createSlice } from '@reduxjs/toolkit';

const initialStatus = {
    page_id: localStorage.getItem("company_id") ?? 1,
    data: []
}

export const PageContent = createSlice({
    name: 'PageContent',
    initialState: initialStatus,
    reducers: {
        setPageId: (state, { payload }) => {
            state.page_id = payload
        },
        setPageContent: (state, { payload }) => {
            state.data = payload
        }
    }
})

export const { setPageId, setPageContent } = PageContent.actions;
export default PageContent.reducer