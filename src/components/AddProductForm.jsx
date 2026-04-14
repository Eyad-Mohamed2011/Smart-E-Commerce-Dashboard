import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useProducts } from '../hooks/useProducts';

const AddProductForm = () => {
  const { dispatch } = useProducts();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [inStock, setInStock] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newProduct = {
      id: Date.now(),
      name,
      price: Number(price),
      inStock
    };

    dispatch({ type: "ADD_PRODUCT", payload: newProduct });
    
    // Reset Form
    setName('');
    setPrice('');
    setInStock(true);
  };

  return (
    <Card className="border-0 shadow-sm p-4">
      <h4 className="fw-bold mb-4">Add New Product</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className="small fw-bold">Product Name</Form.Label>
          <Form.Control 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Headphones" 
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="small fw-bold">Price ($)</Form.Label>
          <Form.Control 
            type="number" 
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="0.00" 
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check 
            type="checkbox" 
            label="In Stock" 
            checked={inStock}
            onChange={(e) => setInStock(e.target.checked)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 py-2">
          Add Product
        </Button>
      </Form>
    </Card>
  );
};

export default AddProductForm;