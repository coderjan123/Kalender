import React, { useState } from "react"; // Import useState here
 // relativer Pfad zur Bilddatei
const Tagkalender = ({ Tag }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked((prevChecked) => !prevChecked); // Toggle the state
  };

  return (
    
      

    <div className="Umrandung_Tag">
      <p className="Hi">Tag {Tag}</p>
      <div className="checkbox" onClick={handleCheckboxClick}>
        {isChecked && <img src={"src/assets/components/image.png"} className="Checkmark"/>} {/* Show checkmark if checked */}
      </div>
    


    </div>
  );
};

export default Tagkalender;
