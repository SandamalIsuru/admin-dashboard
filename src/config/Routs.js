import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/common/Layout'
import Dashboard from '../pages/dashboard'
import Documentation from '../pages/documentation'
import Login from '../pages/login'
import Marketplace from '../pages/marketplace'
import Portfolio from '../pages/portfolio'

const ProtectedRoute = ({ children }) => {
  const user = {}
  let location = useLocation()

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children
}

const Routs = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="portfolio">
            <Route
              index
              element={
                <ProtectedRoute>
                  <Portfolio />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route
            path="marketplace"
            element={
              <ProtectedRoute>
                <Marketplace />
              </ProtectedRoute>
            }
          />
          <Route
            path="documentation"
            element={
              <ProtectedRoute>
                <Documentation />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routs
