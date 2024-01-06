import React, { useState } from 'react';
import './Switch.css'; // Import the CSS for styling

const Icon = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="switch-container">
      <label className={`switch ${isChecked ? 'checked' : ''}`}>
        <input type="checkbox" checked={isChecked} onChange={handleToggle} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Icon;
