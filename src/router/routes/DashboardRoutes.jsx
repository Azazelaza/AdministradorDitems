import React, { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Sidebar } from '../../components/layout/Sidebar';
import styles from '../../styles/layout/Dashboard.module.scss'
import Loading from '../../components/ui/Loading';

const Home = lazy(() => import("../../views/dashboard/Home"))
const Menu = lazy(() => import("../../views/dashboard/Menu"))
const Membership = lazy(() => import("../../views/dashboard/Membership"))
const Products = lazy(() => import("../../views/dashboard/Products"))
const RecordPet = lazy(() => import("../../views/dashboard/RecordPet"))
const Pagecontent = lazy(() => import("../../views/dashboard/Pagecontent"))
const Tickets = lazy(() => import("../../views/dashboard/Tickets"))
const Users = lazy(() => import("../../views/dashboard/Users"))
const Profile = lazy(() => import("../../views/dashboard/Profile"))
const Orders = lazy(() => import("../../views/dashboard/Orders"))
const Invoices = lazy(() => import("../../views/dashboard/Invoices"))

export const DashboardRoutes = () => {
    return (
        <div className={styles.dashboardTemplate}>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Header />
                <div className={styles.container}>
                    <Routes>
                        <Route exact path="/" element={
                            <Suspense fallback={<Loading />}>
                                <Home />
                            </Suspense>
                        } />
                        <Route exact path="/menu" element={
                            <Suspense fallback={<Loading />}>
                                <Menu />
                            </Suspense>
                        } />
                        <Route exact path="/orders" element={
                            <Suspense fallback={<Loading />}>
                                <Orders />
                            </Suspense>
                        } />
                        <Route exact path="/invoices" element={
                            <Suspense fallback={<Loading />}>
                                <Invoices />
                            </Suspense>
                        } />
                        <Route exact path="/membership" element={
                            <Suspense fallback={<Loading />}>
                                <Membership />
                            </Suspense>
                        } />
                        <Route exact path="/records" element={
                            <Suspense fallback={<Loading />}>
                                <RecordPet />
                            </Suspense>
                        } />
                        <Route exact path="/content" element={
                            <Suspense fallback={<Loading />}>
                                <Pagecontent />
                            </Suspense>
                        } />
                        <Route exact path="/tickets" element={
                            <Suspense fallback={<Loading />}>
                                <Tickets />
                            </Suspense>
                        } />
                        <Route exact path="/users" element={
                            <Suspense fallback={<Loading />}>
                                <Users />
                            </Suspense>
                        } />
                        <Route exact path="/products" element={
                            <Suspense fallback={<Loading />}>
                                <Products />
                            </Suspense>
                        } />
                        <Route exact path="/profile" element={
                            <Suspense fallback={<Loading />}>
                                <Profile />
                            </Suspense>
                        } />
                        <Route path="/*" element={
                            <Suspense fallback={<Loading />}>
                                <Navigate to='/' />
                            </Suspense>
                        } />
                    </Routes>
                </div>
                <Footer />
            </div>
        </div>
    )
}
