import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

// Components
import Navigation from './components/Navbar';
import SearchBar from './components/SearchBar';
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';

// Hooks & Context
import { useProducts } from './hooks/useProducts';

function App() {
  const { products, loading, dispatch } = useProducts();
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);

  // Auto-focus search on mount
  useEffect(() => {
    if (searchRef.current) searchRef.current.focus();
  }, []);

  // Filter Logic (Optimized with useMemo)
  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  return (
    <div className="app-wrapper">
      <Navigation />
      
      <Container className="py-4">
        <header className="text-center mb-5">
          <h1 className="display-5 fw-bold text-dark">Inventory Dashboard</h1>
          <p className="text-muted">Manage your stock levels and product pricing in real-time.</p>
        </header>

        <Row className="justify-content-center mb-4">
          <Col lg={8}>
            <SearchBar 
              value={search} 
              onChange={setSearch} 
              searchRef={searchRef} 
            />
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg={4}>
            <div className="sticky-top" style={{ top: '20px' }}>
              <AddProductForm />
            </div>
          </Col>

          <Col lg={8}>
            {loading ? (
              <div className="text-center py-5">
                <Spinner animation="border" variant="primary" />
                <p className="mt-3 text-muted fw-semibold">Fetching Inventory...</p>
              </div>
            ) : (
              <ProductList filteredProducts={filteredProducts} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;