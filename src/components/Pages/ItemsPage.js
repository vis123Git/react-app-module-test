import React from 'react';

const ItemsPage = () => {
  const posts = [
    { id: 1, name: 'Item 1', description: 'Description for Item 1' },
    { id: 2, name: 'Item 2', description: 'Description for Item 2' },
  ];

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {posts.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsPage;
