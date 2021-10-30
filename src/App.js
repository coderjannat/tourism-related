
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/defaultHome/Home';
import Header from './components/shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './privateRoute/PrivateRoute';

import AddDestination from './components/Home/AddDestination/AddDestination';
import Tickets from './components/Tickets/Tickets';
import MyTickets from './components/My Tickets/MyTickets';
import AdminDashBoard from './components/Admin/AdminDashBoard/AdminDashBoard';

function App() {
  return (
  <AuthProvider>
    <BrowserRouter>
    <Header></Header>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/mytickets">
        <MyTickets></MyTickets>
      </Route>
      <PrivateRoute path="/adminDashboard">
        <AdminDashBoard></AdminDashBoard>
      </PrivateRoute>
      
      <PrivateRoute path="/tickets">
      <Tickets></Tickets>
          </PrivateRoute>
      <PrivateRoute path="/destinations/:id">
            <AddDestination/>
          </PrivateRoute>
      <Route path="/login">
        <Login></Login>
      </Route>
    </Switch>
    </BrowserRouter>
  </AuthProvider>
  );
}

export default App;
