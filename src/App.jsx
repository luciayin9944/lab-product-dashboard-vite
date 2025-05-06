// import React, { useState } from 'react';
// import ProductList from './components/ProductList';

// const App = () => {
//   // TODO: Define initial product data
//   const products = [
//     { id: 1, name: "Mike", price: "$3.99", isStock: true},
//     { id: 2, name: "Sugar", price: "$5.99", inStock: true},
//     { id: 3, name: "Egg", price: "$4.99", inStock: true},
//     { id: 4, name: "Salt", price: "$1.99", inStock: false},
//     { id: 5, name: "Orange Juice", price: "$3.99", inStock: true}
//   ]

//   // TODO: Implement state to manage filtering

//   // TODO: Implement logic to filter products based on availability

//   return (
//     <div>
//       {/* TODO: Add 'Product Dashboard' title here */}
//       <h1>Product Dashboard</h1>
      
//       {/* TODO: Add buttons to allow filtering by availability */}

//       {/* TODO: Render the ProductList component and pass filtered products */}
//       <ProductList products={products} />
      
//     </div>
//   );
// };

// export default App;



import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  // Define initial product data
  const products = [
    { id: 1, name: "Mike", price: "$3.99", inStock: true },
    { id: 2, name: "Sugar", price: "$5.99", inStock: true },
    { id: 3, name: "Egg", price: "$4.99", inStock: true },
    { id: 4, name: "Salt", price: "$1.99", inStock: false },
    { id: 5, name: "Orange Juice", price: "$3.99", inStock: true }
  ];

  // Implement state to manage filtering
  const [filter, setFilter] = useState('all'); // 'all', 'inStock', or 'outOfStock'

  // Implement logic to filter products based on availability
  const filteredProducts = products.filter(product => {
    if (filter === 'inStock') return product.inStock;
    if (filter === 'outOfStock') return !product.inStock;
    return true; // 'all'
  });

  return (
    <div>
      {/* Add 'Product Dashboard' title here */}
      <h1>Product Dashboard</h1>

      {/* Add buttons to allow filtering by availability */}
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('inStock')}>In Stock</button>
        <button onClick={() => setFilter('outOfStock')}>Out of Stock</button>
      </div>

      {/* Render the ProductList component and pass filtered products */}
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;