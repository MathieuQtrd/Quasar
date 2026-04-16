import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Container } from 'react-bootstrap'

import TaskDashboard from './components/TaskDashboard'
import TaskDetails from './pages/TaskDetails'
import HomePage from './pages/HomePage'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        {/* Page principale : Homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Restriction d'accès */}
        <Route path="/dashboard"
          element={
            <ProtectedRoute>
              <Container fluid className='bg-light min-vh py-4'>
                <TaskDashboard />
              </Container>
            </ProtectedRoute>
          }
        />

        <Route path="/task/:id"
          element={
            <ProtectedRoute>
              <Container fluid className='bg-light min-vh py-4'>
                <TaskDetails />
              </Container>
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  );
}