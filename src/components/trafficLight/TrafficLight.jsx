import React, { useState, useEffect } from 'react';
import './TrafficLight.css';

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState('red');
  
  // حذف state ای که استفاده نمی‌شد
  const getDuration = (light) => {
    switch(light) {
      case 'red': return 5000;    // 5 ثانیه
      case 'green': return 4000;  // 4 ثانیه
      case 'yellow': return 2000; // 2 ثانیه
      default: return 2000;
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveLight(prevLight => {
        if (prevLight === 'red') return 'green';
        if (prevLight === 'green') return 'yellow';
        return 'red';
      });
    }, getDuration(activeLight));
    
    return () => clearTimeout(timer);
  }, [activeLight]);

  return (
    <div className="traffic-light-system">
      <div className="traffic-light">
        <div className="light-housing">
          <div className={`light red ${activeLight === 'red' ? 'active' : ''}`}>
            <div className="light-core"></div>
            <div className="light-glow"></div>
          </div>
          <div className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}>
            <div className="light-core"></div>
            <div className="light-glow"></div>
          </div>
          <div className={`light green ${activeLight === 'green' ? 'active' : ''}`}>
            <div className="light-core"></div>
            <div className="light-glow"></div>
          </div>
        </div>
        <div className="traffic-light-base"></div>
      </div>
      <div className="traffic-light-stand"></div>
    </div>
  );
};

export default TrafficLight;