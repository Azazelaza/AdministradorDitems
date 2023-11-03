import React, { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Loading from '../../components/ui/Loading'

const Login = lazy(() => import("../../views/auth/Login"))

export const AuthRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={
                    <Suspense fallback={<Loading />}>
                        <Login />
                    </Suspense>
                } />
                <Route path="/*" element={
                    <Suspense fallback={<Loading />}>
                        <Navigate to='/' />
                    </Suspense>
                } />
            </Routes>
        </>
    )
}


