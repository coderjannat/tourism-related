
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/defaultHome/Home';
import Header from './components/shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './privateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFond';
import Success from './components/Success/Success';
import AddDestination from './components/Home/AddDestination/AddDestination';
import Tickets from './components/Tickets/Tickets';
import MyTickets from './components/My Tickets/MyTickets';
import AdminDashBoard from './components/Admin/AdminDashBoard/AdminDashBoard';
import AllTickets from './components/AllTickets/AllTickets';

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
      <Route path="/alltickets">
        <AllTickets></AllTickets>
      </Route>
      <Route path="/success">
       <Success></Success>
    </Route>
      <PrivateRoute path="/adminDashboard">
        <AdminDashBoard></AdminDashBoard>
      </PrivateRoute>
      
      <Route path="/adddestinations">
      <AddDestination/>
          </Route>

      <PrivateRoute path="/tickets/:id">
      <Tickets></Tickets>
          </PrivateRoute>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="*">
       <NotFound></NotFound>
      </Route>
    </Switch>
    </BrowserRouter>
  </AuthProvider>
  );
}

export default App;
