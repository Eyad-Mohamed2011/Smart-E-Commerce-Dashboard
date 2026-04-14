import React from 'react';
import { Navbar, Container, Badge } from 'react-bootstrap';
import { useProducts } from '../hooks/useProducts';

const Navigation = () => {
  const { products } = useProducts();

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm mb-4 py-3">
      <Container>
        <Navbar.Brand href="#" className="fw-bold d-flex align-items-center">
          <span className="me-2 fs-3 text-primary">📦</span>
          <div className="d-flex flex-column">
            <span className="lh-1">Inventory</span>
            <small className="text-muted fs-6 fw-normal">Manager Pro</small>
          </div>
        </Navbar.Brand>
        
        <div className="ms-auto">
          <Badge bg="primary" pill className="px-3 py-2">
            Total Items: {products.length}
          </Badge>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;