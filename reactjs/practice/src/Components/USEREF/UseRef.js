import React, { useRef } from "react";

function UseRefExample() {
  const reference = useRef(null);

  const handleFocus = () => {
    reference.current.focus(); // Focus the element
    reference.current.style.border = "2px solid blue"
    reference.current.style.borderRadius = "5px"
    reference.current.style.padding = "10px"

  };

  const handleBlur = () => {
    reference.current.blur(); // Remove focus from the element
    reference.current.style.border = "none"
    reference.current.style.borderRadius = "0"
    reference.current.style.padding = "0"

  };

  const handleTextChange = () => {
    reference.current.textContent = "Updated Text"; // Change the text content of the element
  };

  const handleScroll = () => {
    reference.current.scrollIntoView({ behavior: "smooth", block: "center" }); // Scroll the element into view
  };

  return (
    <>
      <p ref={reference} tabIndex={-1} >
        This is a paragraph. Click the button to change properties.
      </p>
      <button onClick={handleFocus}>Focus on Paragraph</button>
      <button onClick={handleBlur}>Blur the Paragraph</button>
      <button onClick={handleTextChange}>Change Text</button>
      <button onClick={handleScroll}>Scroll to Paragraph</button>
    </>
  );
}

export default UseRefExample;
