import './App.css';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from "@mui/styles";
import { createTheme } from '@mui/material/styles';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import AdminMain from './admin/pages/AdminMain/AdminMain'
import Menu from './pages/Menu/Menu';
import Details from './pages/Details/Details';
import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment/Payment';
import Order from './pages/Order/Order';
import History from './pages/History/History';
import CartProvider from './context/CartContext';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AdminMenu from './admin/pages/AdminMenu/AdminMenu';
import AdminEdit from './admin/pages/AdminEdit/AdminEdit';
import AdminOrder from './admin/pages/AdminOrder/AdminOrder';
import AdminTotal from './admin/pages/AdminTotal/AdminTotal';
import AdminRole from './admin/pages/AdminRole/AdminRole';
import Users from './admin/pages/Member/Users/Users';
import Staffs from './admin/pages/Member/Staffs/Staffs';
function App() {
  let theme = createTheme();

  return (
    <CartProvider>
      <Router>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Routes>
            {/* user path */}
            <Route exact path='/' element={<Main />} />
            <Route exact path='/menu/:category' element={<Menu />} />
            <Route exact path='/details/:id' element={<Details />} />
            <Route exact path='/user/order' element={<Order />}/>
            <Route exact path='/user/history' element={<History />}/>
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/payment' element={<Payment />} />
            {/* admin path */}
            <Route exact path="/admin/add-menu" element={<AdminMain />} />
            <Route exact path='/admin' element={<AdminMenu/>} />
            <Route exact path='/admin/edit-menu/:id' element={<AdminEdit/>} />
            <Route exact path='/admin/order' element={<AdminOrder/>} />
            <Route exact path='/admin/total' element={<AdminTotal/>} />
            <Route exact path='/admin/role' element={<AdminRole/>} />
            <Route exact path='/admin/users' element={<Users/>} />
            <Route exact path='/admin/staffs' element={<Staffs/>} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </Router>
    </CartProvider>

  );
}

export default App;
