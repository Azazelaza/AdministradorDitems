import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice/authSlice.js'
import pageContentSlice from './pageSlice/pageContentSlice.js'
import uiSlice from './uiSlice/uiSlice.js'
import productsSlice from './productsSlice/productsSlice.js'
import membershipSlice from './membershipSlice/memberShipSlice.js'
import usersSlice from './usersSlice/usersSlice.js'
import ticketsSlice from './ticketsSlice/ticketsSlice.js'
import orderSlice from './orderSlice/slice.js'
import invoiceSlice from './InvoiceSlice/slice.js'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        pageContent: pageContentSlice,
        ui: uiSlice,
        products: productsSlice,
        membership: membershipSlice,
        users: usersSlice,
        tickets: ticketsSlice,
        orders: orderSlice,
        invoices: invoiceSlice,
    }
})