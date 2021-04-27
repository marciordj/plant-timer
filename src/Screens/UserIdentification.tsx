import React from 'react';
import { Text, StyleSheet, SafeAreaView, View, Image, Dimensions } from 'react-native';

import colors from '../styles/colors';
import Emoji from '../assets/img/Emoji1.png';
import fonts from '../styles/fonts';
import { TextInput } from 'react-native-gesture-handler';

const UserIdentification = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>

        <View style={styles.header}>
          <Image source={Emoji} />
          <Text style={styles.title}>Como podemos chamar você ?</Text>
        </View>

        <View>
          <Text style={styles.text}>Digite um nome</Text>
          <Text>______________</Text>

        </View>

        <Text>Botao verde</Text>
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
  },
  header: {
    alignItems: 'center'
  },
  title: {
    fontSize: Dimensions.get('window').fontScale * 24,
    fontFamily: fonts.header,
    color: colors.heading
  },
  text: {
    fontFamily: fonts.text,
    color: colors.text,
    fontSize: Dimensions.get('window').fontScale * 14
  }
});

export default UserIdentification;
