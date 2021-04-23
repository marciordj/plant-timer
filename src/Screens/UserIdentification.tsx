import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import colors from '../styles/colors';

const UserIdentification = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello User</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
});

export default UserIdentification;
