import { useState } from "react";
import "./App.css";

function App() {
  const [carts, setCarts] = useState([]);  // State to manage carts
  const [input, setInput] = useState("");  // State for the input field

  // Function to add a cart item
  const addCart = () => {
    if (input.trim() === "") return;  // Prevent adding empty cart item
    const newCart = { id: Date.now(), Text: input, completed: false };  // Create new cart item with Text as the label
    setCarts([...carts, newCart]);  // Add new cart item to the carts list
    setInput("");  // Clear the input field after adding
  };

  // Function to toggle cart completion (for marking completed items)
  const toggleCartCompletion = (id) => {
    const updatedCarts = carts.map((cart) =>
      cart.id === id ? { ...cart, completed: !cart.completed } : cart
    );
    setCarts(updatedCarts);  // Update the carts with new completion status
  };

  return (
    <>
      <div>
        <h1>Add Cart</h1>
        <div>
          <input
            type="text"
            value={input}  // Bind input value to the state
            onChange={(e) => setInput(e.target.value)}  // Update input value on change
            placeholder="Enter item name"  // Optional: add placeholder for clarity
          />
          <button onClick={addCart}>Add Cart</button>  {/* Add item on click */}
        </div>
        
        {/* Render the list of cart items */}
        <ul>
          {carts.map((cart) => (
            <li key={cart.id} className={cart.completed ? "completed" : ""}>
              <span onClick={() => toggleCartCompletion(cart.id)}>
                {cart.Text}  {/* Ensure you are using 'Text' here (case-sensitive) */}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

