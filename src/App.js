import './App.css';
import { ReactComponent as BayouSVG } from './assets/bayoutextsvg.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MenuScreen from './screens/MenuScreen/MenuScreen'
import CartScreen from './screens/CartScreen/CartScreen'
import EmployeeScreen from './screens/EmployeeScreen/EmployeeScreen'
import ManagerScreen from './screens/ManagerScreen/ManagerScreen'
import PosScreen from './screens/PosScreen/PosScreen'

function App() {

  return (
    <Router>
      <main className='app'>
        <Routes>
          <Route path='/' element={<MenuScreen />} />
          <Route path='/manager' element={<ManagerScreen />} />
          <Route path='/pos' elemenet={<PosScreen />} />
          <Route path='/cart' element={<CartScreen />} />
          <Route path='/employee' element={<EmployeeScreen />} />
        </Routes>
      </main>
    </Router>
  )
  }

export default App;
