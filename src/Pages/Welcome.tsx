import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

import wateringImage from '../assets/watering.png';

import colors from '../styles/colors';

const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'} suas plantas de {'\n'} forma fácil
      </Text>

      <Image source={wateringImage} style={styles.image} resizeMode="contain" />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Icon name="chevron-small-right" size={30} color="#FFF" />
      </TouchableOpacity>
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
    height: Dimensions.get('window').width * 0.7,
  },
  subtitle: {
    fontFamily: 'Jost-Regular',
    fontSize: 17,
    color: colors.text,
    textAlign: 'center',
    paddingHorizontal: 18,
    lineHeight: 25,
  },
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

export default Welcome;
