import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Categories from './categories'
import Customers from "./customers";
import Region from "./region";
import Employees from "./employees";
import Shippers from "./shippers";
import Orders from "./orders";
import Product from "./products";
import OrderDetails from "./orderDetails";
import Supplier from "./supplier";

function App() {
  const styleli = {
    float: 'left',
    textAlign: 'center',
    listStyleType: 'none',
    padding: '10px'
  }


  return (
    <Router>
      <div style={{'height':'40px'}}>
        <ul>
          <li style={styleli} >
            <Link to="/">Home</Link>
          </li>
          <li style={styleli}>
            <Link to="/user/categories">Catagries</Link>
          </li>
          <li style={styleli}>
            <Link to="/user/customers">Customers</Link>
          </li>
          <li style={styleli}>
            <Link to="/user/region">Region</Link>
          </li>
          <li style={styleli}>
            <Link to="/user/employee">Employees</Link>
          </li>
          <li style={styleli}>
            <Link to="/user/shippers">Shippers</Link>
          </li>
          <li style={styleli}>
            <Link to="/user/orders">Orders</Link>
          </li>
          <li style={styleli}>
            <Link to="/user/products">Products</Link>
          </li>
          <li style={styleli}>
            <Link to="/user/orderDetails">OrderDetails</Link>
          </li>
          <li style={styleli}>
            <Link to="/user/supplier">Supplier</Link>
          </li>
        </ul>
      </div>
      <br></br>
      <Switch>
        <Route path="/user/customers">
          <Customers />
        </Route>
        <Route path="/user/categories">
          <Categories />
        </Route>
        <Route path="/user/region">
          <Region />
        </Route>
        <Route path="/user/employee">
          <Employees />
        </Route>
        <Route path="/user/shippers">
          <Shippers />
        </Route>
        <Route path="/user/orders">
          <Orders />
        </Route>
        <Route path="/user/products">
          <Product />
        </Route>
        <Route path="/user/orderDetails">
          <OrderDetails />
        </Route>
        <Route path="/user/supplier">
          <Supplier />
        </Route>
        <Route path="/">
          <div>
            <br></br>
            <h1>Hello World !</h1>
          </div>
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
