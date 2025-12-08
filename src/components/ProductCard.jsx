import styles from '../styles/ProductCard.module.css';
import { Card, CardContent, Typography, Button, Chip } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

function ProductCard({ id, name, price, inStock, onRemove }) {
  const cardContent = (
    <Card 
      className={styles.productCard}
      sx={{
        minWidth: 275,
        transition: 'transform 0.2s',
        opacity: inStock ? 1 : 0.6,
        border: inStock ? '2px solid #4CAF50' : '2px solid #ccc',
        backgroundColor: inStock ? '#fff' : '#f5f5f5',
        '&:hover': {
          transform: 'scale(1.05)',
        }
      }}
    >
      <CardContent className={!inStock ? 'outOfStockClass' : ''}>
        <Typography variant="h5" component="h3" gutterBottom>
          {name}
        </Typography>
        
        <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
          {price}
        </Typography>
        
        <Chip 
          label={inStock ? 'In Stock' : 'Out of Stock'}
          color={inStock ? 'success' : 'default'}
          size="small"
          sx={{ mb: 2 }}
        />
        
        <Button 
          variant="contained" 
          color="primary"
          startIcon={<ShoppingCartIcon />}
          disabled={!inStock}
          fullWidth
          sx={{
            mt: 1,
            mb: 1,
            backgroundColor: inStock ? '#1976d2' : '#ccc',
            '&:hover': {
              backgroundColor: inStock ? '#1565c0' : '#ccc',
            }
          }}
        >
          {inStock ? 'Add to Cart' : 'Unavailable'}
        </Button>

        <Button 
          variant="outlined" 
          color="error"
          startIcon={<DeleteIcon />}
          fullWidth
          onClick={() => onRemove(id)}
        >
          Remove
        </Button>
      </CardContent>
    </Card>
  );

  if (!inStock) {
    return <div className="outOfStockClass">{cardContent}</div>;
  }
  
  return cardContent;
}

export default ProductCard;