import { View, Text, Pressable, TextInput, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, { useState } from 'react';
import Radiobutton from './RadioButton';
import styles from '../style/style';

export default function Form() {
  const [weight, setWeight] = useState('');
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');

  const [alcoholLevel, setAlcoholLevel] = useState(0);
  
  const genderValues = [
    {
      label: 'Male',
      value: 'male'
    },
    {
      label: 'Female',
      value: 'female'
    }
  ]

  const pickerBottles = ' bottles';
  const pickerTime = ' hours';
  
  function PickerItemsList(unit) {
    const pickerItems = [];
    for (let i = 1;i < 25; i++) {
      pickerItems.push(
        <Picker.Item
          key={'row' + i}
          label={i.toString() + unit}
          value={i.toString()}
        />
      )
    }
    return pickerItems;
  }

  function calculate() {
    let grams = bottles*0.33*8*4.5;
    let gramsLeft = grams - (weight/10) * time;
    let result = 0;
    if (weight==='') {
      Alert.alert(
        'Note',
        'Please enter your weight (kg)'
      ) 
    } else {
      if (gender==='male') {
        result = gramsLeft/(weight * 0.7);
      } else {
        result = gramsLeft/(weight * 0.6);
      }
      if(result < 0) {
        result = 0;
      }
      setAlcoholLevel(result);
    }
  }

  function chooseColor() {
    if (alcoholLevel === 0) {
      return 'green'
    }
    if (alcoholLevel < 0.495) {
      return 'orange'
    }
    if (alcoholLevel >= 0.495) {
      return 'red'
    }
  }

  return (
    <View style={styles.form}>
  {/* Weight */}
      <View style={styles.row}>
        <Text style={styles.label}>Weight</Text>
        <TextInput 
          style={styles.inputContainer}
          value={weight}
          onChangeText={text => setWeight(text.replace(',', '.'))}
          maxLength={5}
          keyboardType='decimal-pad'/>
      </View>
  {/* Bottles */}
      <View style={styles.row}>
        <Text style={styles.label}>Bottles</Text>
        <View style={styles.picker}>
          <Picker
            mode='dropdown'
            selectedValue={bottles}
            onValueChange={(itemValue) =>
              setBottles(itemValue)}>
            {PickerItemsList(pickerBottles)}
          </Picker>
        </View>
      </View>
  {/* Time */}
      <View style={styles.row}>
        <Text style={styles.label}>Time</Text>
        <View style={styles.picker}>
          <Picker
            mode='dropdown'
            selectedValue={time}
            onValueChange={(itemValue) =>
              setTime(itemValue)}>
            {PickerItemsList(pickerTime)}
          </Picker>
        </View>
      </View>
  {/* Gender */}
      <View style={styles.row}>
        <Text style={styles.label}>Gender</Text>
        <Radiobutton options={genderValues} onPress={(value) => {setGender(value)}}/>
      </View>
  {/* Blood alcohol level result*/}
      <View style={styles.result}>
        <Text style={{color:chooseColor(),fontSize:50}}>
          {alcoholLevel.toFixed(2)}
        </Text>
      </View>
  {/* Calculate button */}
      <View style={styles.row}>
        <Pressable 
				style={styles.button}
				onPress={() => calculate()}>
					<Text style={styles.buttonText}>
						Calculate
					</Text>
			  </Pressable>
      </View>
    </View>
  );
}
