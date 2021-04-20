import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import arrow from '../assets/Path.png';
import colors from '../styles/colors';

const Button = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Image source={arrow} style={{}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
    width: 56,
    height: 56,
    borderRadius: 15,
    marginBottom: 10,
  },
});

export default Button;
