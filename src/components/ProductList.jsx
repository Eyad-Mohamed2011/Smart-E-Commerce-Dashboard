import React from 'react';
import { Row, Col, Alert, Spinner } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { useProducts } from '../hooks/useProducts';

const ProductList = ({ filteredProducts }) => {
  const { dispatch, loading } = useProducts();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch({ type: "DELETE_PRODUCT", payload: id });
    }
  };

  if (loading) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center py-5 mt-4">
        <Spinner animation="border" variant="primary" role="status" />
        <p className="mt-3 text-muted fw-bold">Loading inventory...</p>
      </div>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <Alert variant="info" className="text-center py-5 border-0 shadow-sm mt-3">
        <div className="mb-3 fs-1">📦</div>
        <h5 className="fw-bold">No Products Found</h5>
        <p className="text-muted mb-0">Try searching for something else or add a new item.</p>
      </Alert>
    );
  }

  return (
    <Row className="g-4 mt-1">
      {filteredProducts.map((product) => (
        <Col key={product.id} xs={12} md={6}>
          <ProductCard 
            product={product} 
            onDelete={handleDelete} 
          />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;