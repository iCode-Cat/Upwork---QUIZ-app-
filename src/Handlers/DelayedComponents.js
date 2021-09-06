import React, { useState, useEffect } from 'react';

// Delay components

const DelayedComponents = (props) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, props.delay);
  }, []);

  return loaded ? <>{props.children}</> : '';
};

export default DelayedComponents;
