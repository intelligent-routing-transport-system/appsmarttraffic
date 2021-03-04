import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

const Animeted: React.FC = (props) => {
  const view = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(
      view,
      {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true
      }
    ).start();
  }, [view])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: view         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

export default Animeted;