import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, { name: newItem, count }]);
      setNewItem(''); // Clear input field after saving
      setCount(0); // Reset the counter after saving
    }
  };

  // Check what items array looks like
  console.log(items);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '10px',
          marginTop: '20px',
        }}
      >
        {/* Input field to add new item */}
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
          style={{ marginRight: '10px' }}
        />
        <div>
          <span style={{ marginRight: '10px' }}>Count: {count}</span>
          <button onClick={decrement}>Decrement</button>
          <button onClick={increment} style={{ marginRight: '5px' }}>
            Increment
          </button>
        </div>
      </div>
      {/* Conditional rendering to check if counter is negative */}
      {count < 0 && (
        <p style={{ color: 'red', textAlign: 'center' }}>
          Counter cannot be negative
        </p>
      )}
      <button
        disabled={count < 0} // Disable button if counter is negative
        onClick={addItem}
        style={{ marginBottom: '20px' }}
      >
        Save Item
      </button>

      {/* Looping through items array and rendering each item */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}: {item.count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Counter;
