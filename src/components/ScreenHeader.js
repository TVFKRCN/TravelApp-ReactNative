import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { sizes, spacing } from '../constants/theme';

const ScreenHeader = ({ mainTitle, secondTitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{mainTitle}</Text>
      <Text style={styles.secondTitle}>{secondTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.l,
    paddingVertical: spacing.l,
  },
  mainTitle: {
    fontSize: sizes.title,
    fontWeight: 'bold',
  },
  secondTitle: {
    fontSize: sizes.title,
  },
});

export default ScreenHeader;
