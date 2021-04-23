import React, { useCallback } from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Entypo';

import wateringImage from '../assets/watering.png';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

// ! Não da pra colocar padding no SafeAreaView

const Welcome = () => {
  const navigation = useNavigation();

  const openUserIdentifier = useCallback(
    () => navigation.navigate('UserIdentification'),
    [navigation],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'} suas plantas de {'\n'} forma fácil
        </Text>

        <Image
          source={wateringImage}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>

        <TouchableOpacity style={styles.button} onPress={openUserIdentifier}>
          <Icon name="chevron-thin-right" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: fonts.header,
    fontSize: 28,
    lineHeight: 34,
    color: colors.heading,
    textAlign: 'center',
    marginTop: 15,
  },
  image: {
    height: Dimensions.get('window').width * 0.7,
  },
  subtitle: {
    fontFamily: fonts.text,
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
  buttonIcon: {
    fontSize: 20,
    color: colors.white,
  },
});

export default Welcome;
