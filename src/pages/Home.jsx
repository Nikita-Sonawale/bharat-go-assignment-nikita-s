import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    axios
      .get('https://api.escuelajs.co/api/v1/products')
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data); // Initially show all products
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    if (selectedCategory === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category.name === selectedCategory)
      );
    }
  };

  return (
    <div>
      {/* Category Buttons */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {['All', 'Clothes', 'Electronics', 'Furnitures', 'Toys'].map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            style={{
              padding: '10px 20px',
              backgroundColor: category === cat ? 'black' : 'gray',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid or No Items Message */}
      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center', fontSize: '18px', color: '#555' }}>
          No items found in this category.
        </p>
      )}
    </div>
  );
}

export default Home;