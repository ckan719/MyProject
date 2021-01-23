import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from "react";
import Categories from './categories'
import Customers from "./customers";
import Region from "./region";
import Employees from "./employees";
import Shippers from "./shippers";
import Orders from "./orders";
import Product from "./products";
import OrderDetails from "./orderDetails";
import Supplier from "./supplier";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

function App() {
  const styleli = {
    float: 'left',
    textAlign: 'center',
    listStyleType: 'none',
    padding: '10px'
  }
  const [collapsed, setCollapsed] = React.useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);


  return (
    <Router>
      <Navbar color="faded" light>
        <NavbarBrand className="mr-auto"><Link to="/">Trang chủ</Link></NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem onClick={toggleNavbar}>
              <NavLink><Link to="/user/categories">Catagries</Link></NavLink>
            </NavItem>
            <NavItem onClick={toggleNavbar}>
              <NavLink><Link to="/user/customers">Customers</Link></NavLink>
            </NavItem>
            <NavItem onClick={toggleNavbar}>
              <NavLink><Link to="/user/region">Region</Link></NavLink>
            </NavItem>
            <NavItem onClick={toggleNavbar}>
              <NavLink><Link to="/user/employee">Employees</Link></NavLink>
            </NavItem>
            <NavItem onClick={toggleNavbar}>
              <NavLink><Link to="/user/shippers">Shippers</Link></NavLink>
            </NavItem>
            <NavItem onClick={toggleNavbar}>
              <NavLink><Link to="/user/orders">Orders</Link></NavLink>
            </NavItem>
            <NavItem onClick={toggleNavbar}>
              <NavLink><Link to="/user/products">Products</Link></NavLink>
            </NavItem>
            <NavItem onClick={toggleNavbar}>
              <NavLink><Link to="/user/orderDetails">OrderDetails</Link></NavLink>
            </NavItem>
            <NavItem onClick={toggleNavbar}>
              <NavLink><Link to="/user/supplier">Supplier</Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Switch>
        <Route path="/user/customers" exact>
          <Customers />
        </Route>
        <Route path="/user/categories" exact>
          <Categories />
        </Route>
        <Route path="/user/region" exact>
          <Region />
        </Route>
        <Route path="/user/employee" exact>
          <Employees />
        </Route>
        <Route path="/user/shippers" exact>
          <Shippers />
        </Route>
        <Route path="/user/orders" exact>
          <Orders />
        </Route>
        <Route path="/user/products" exact>
          <Product />
        </Route>
        <Route path="/user/orderDetails" exact>
          <OrderDetails />
        </Route>
        <Route path="/user/supplier" exact>
          <Supplier />
        </Route>
        <Route path="/">
          <div>
            <br></br>
            <h1>Nguyễn Công Nhật</h1>
            <h1>Phạm Văn Minh</h1>
            <h1>Phạm Hùng Vương</h1>
          </div>
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
