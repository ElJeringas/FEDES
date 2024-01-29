import React from 'react'
import RootLayout from './layouts/RootLayout'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import BudgetedValues from './pages/BudgetedValues/BudgetedValues'
import ExecutedValues from './pages/ExecutedValues/ExecutedValues'
import Notifications from './pages/Notifications/Notifications'
import Dashboard from './pages/Dashboard/Dashboard'
import LogOut from './pages/LogOut/LogOut'
const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path='/' ></Route>
        <Route path='/BudgetedValues' element={<BudgetedValues/>}></Route>
        <Route path='/ExecutedValues' element={<ExecutedValues/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/notifications' element={<Notifications/>}></Route>
        <Route path='/logout' element={<LogOut/>}></Route>
      </Routes>
    </RootLayout>
  )
}

export default App