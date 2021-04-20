import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text} from 'react-native';

import wateringImage from '../assets/watering.png';
import Button from '../components/Button';

import colors from '../styles/colors';

const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'} suas plantas de {'\n'} forma fácil
      </Text>

      <Image source={wateringImage} style={styles.image} />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <Button />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  title: {
    fontFamily: 'Jost-SemiBold',
    fontSize: 32,
    color: colors.heading,
    textAlign: 'center',
    marginTop: 15,
  },
  image: {
    width: 292,
    height: 284,
  },
  subtitle: {
    fontFamily: 'Jost-Regular',
    fontSize: 17,
    color: colors.text,
    textAlign: 'center',
    paddingHorizontal: 18,
    lineHeight: 25,
  },
});

export default Welcome;
