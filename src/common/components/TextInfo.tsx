import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';

interface ITextInfoProps {
  label: string;
  value: string | number | number[] | string[];
}

export const TextInfo: FC<ITextInfoProps> = ({label, value}) => (
  <Text style={styles.textStyle}>
    {label}: {value}
  </Text>
);

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    fontFamily: 'kanit_semi_bold',
  },
});
