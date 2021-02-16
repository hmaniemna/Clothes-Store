import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap"
import {BrowserRouter, Link } from "react-router-dom"
import "./NavBar-style.css"
export default function NavBarr() {

  return (
    <Navbar className ="nav" bg="light" expand="lg">
      <Navbar.Brand href="#home">Clothes Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="">
           <BrowserRouter>
               <Link className="ml-5 black" to="/">Home</Link>
               <Link className="ml-5 black" to="/men">Men</Link>
               <Link className="mx-5 black" to="/women">Women</Link>
           </BrowserRouter>
         
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}