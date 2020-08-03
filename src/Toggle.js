import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

export const Toggle = () => {
  const [isToggled, setToggle] = useState(false);

  const fade = useSpring({
    opacity: isToggled ? 1 : 0.5,
    color: isToggled ? '#000' : 'green',
    fontSize: isToggled ? '2rem' : '5rem',
  });

  return (
    <div>
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
      <animated.h1 style={fade}>Hello</animated.h1>
    </div>
  );
};
