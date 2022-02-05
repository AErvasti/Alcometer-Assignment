import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import styles from '../style/style';

export default function Radiobutton({options,onPress}) {
  const [value, setValue] = useState('male');

  const handlePress = (selected) => {
    setValue(selected);
    onPress(selected);
  }

  return (
    <>
      {
        options.map((option) => (
          <View key={option.value} style={styles.buttonContainer}>
            <Text style={styles.radioLabel}>{option.label}</Text>
            <Pressable style={styles.circle} onPress={() => handlePress(option.value)}>
              {value === option.value && <View style={styles.checkedCircle} />}
            </Pressable>
          </View>
        ))}
    </>
  );
}

