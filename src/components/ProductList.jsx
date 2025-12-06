import ProductCard from './ProductCard';
import { Grid, Container, Alert } from '@mui/material';

function ProductList({ products, onRemoveProduct }) {
  const allOutOfStock = products.every(product => !product.inStock);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {allOutOfStock && (
        <Alert severity="warning" sx={{ mb: 3 }}>
          Sorry, no products are currently in stock.
        </Alert>
      )}
      
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard 
              id={product.id}
              name={product.name}
              price={product.price}
              inStock={product.inStock}
              onRemove={onRemoveProduct}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductList;
