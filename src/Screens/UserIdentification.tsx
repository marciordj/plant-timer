import React from 'react';
import { Text, StyleSheet, SafeAreaView, View } from 'react-native';
import colors from '../styles/colors';

const UserIdentification = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text>Emoji aqui</Text>
        <Text>Como podemos chamar você ?</Text>

        <Text>Digite um nome</Text>
        <Text>______________</Text>

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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserIdentification;
