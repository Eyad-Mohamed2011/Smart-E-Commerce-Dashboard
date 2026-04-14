import React, { useState } from 'react';
import { Card, Button, Badge, Stack } from 'react-bootstrap';
import EditProductModal from './EditProductModal';

const ProductCard = ({ product, onDelete }) => {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <>
      <Card className="h-100 shadow-sm border-0 mb-3 bg-white">
        <Card.Body className="d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <div>
              <Card.Title className="h5 fw-bold mb-1">{product.name}</Card.Title>
              <Badge bg={product.inStock ? "success-subtle" : "danger-subtle"} 
                     className={product.inStock ? "text-success" : "text-danger"}>
                {product.inStock ? "● In Stock" : "○ Out of Stock"}
              </Badge>
            </div>
            <h4 className="text-primary fw-bold">${product.price}</h4>
          </div>

          <Card.Text className="text-muted small flex-grow-1">
            Product ID: {product.id.toString().slice(-6)}
          </Card.Text>

          <Stack direction="horizontal" gap={2} className="mt-3">
            <Button 
              variant="outline-primary" 
              className="w-100 btn-sm fw-semibold"
              onClick={() => setShowEdit(true)}
            >
              Edit
            </Button>
            <Button 
              variant="outline-danger" 
              className="w-100 btn-sm fw-semibold"
              onClick={() => onDelete(product.id)}
            >
              Delete
            </Button>
          </Stack>
        </Card.Body>
      </Card>

      <EditProductModal 
        show={showEdit} 
        handleClose={() => setShowEdit(false)} 
        product={product} 
      />
    </>
  );
};

export default ProductCard;