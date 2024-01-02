import { useState } from "react"

// Define a functional component called InputShortener that accepts a prop setInputValue
const InputShortener = ({ setInputValue }) => {

  // Initialize a state variable 'value' with an initial value of an empty string
  const [value, setValue] = useState("");

  // Define a function 'handleClick' to be called when the button is clicked
  const handleClick = () => {
    // Call the 'setInputValue' function with the current 'value' state
    // This is likely used to update some state in a parent component
    setInputValue(value);
    // Reset the 'value' state to an empty string after updating the parent component's state
    setValue("");
  }

  return (
    // Render the component's JSX
    <div className="inputContainer">
      <h1>URL <span>Shortener</span></h1>
      <div>
        <input
          type="text"
          placeholder="Paste a link to shorten it.."
          // Bind the 'value' state to the input field's value attribute
          value={value}
          // Attach an event handler that updates the 'value' state when the input changes
          onChange={e => setValue(e.target.value)}  
        />
        {/* Render a button with an event handler to trigger the 'handleClick' function */}
        <button onClick={handleClick}>shorten</button>
      </div>
    </div>
  )
}

export default InputShortener