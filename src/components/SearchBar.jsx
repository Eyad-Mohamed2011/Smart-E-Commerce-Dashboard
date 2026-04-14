import React from 'react';
import { Form, InputGroup, Card, Button } from 'react-bootstrap';

const SearchBar = ({ value, onChange, searchRef }) => {
  return (
    <Card className="mb-4 border-0 shadow-sm overflow-hidden">
      <InputGroup size="lg">
        <InputGroup.Text className="bg-white border-0 ps-4">
          <span className="text-muted">🔍</span>
        </InputGroup.Text>
        <Form.Control
          ref={searchRef}
          type="text"
          placeholder="Search products by name..."
          className="border-0 py-3 shadow-none"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ fontSize: '1.1rem' }}
        />
        {value && (
          <Button 
            variant="white" 
            className="border-0 text-muted px-3"
            onClick={() => onChange("")}
          >
            ✕
          </Button>
        )}
      </InputGroup>
    </Card>
  );
};

export default SearchBar;