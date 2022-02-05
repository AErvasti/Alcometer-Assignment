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
  const [message, setMessage] = useState('');
  
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

  const pickerBottles = [];
  for (let i = 1;i < 25;i++) {
    pickerBottles.push(
      <Picker.Item 
        key={'row' + i}
        label={i.toString() + ' bottles'}
        value={i.toString()}
      />
    )
  }

  const pickerTime = [];
  for (let i = 1;i < 25;i++) {
    pickerTime.push(
      <Picker.Item
        key={'row' + i}
        label={i.toString() + ' hours'}
        value={i.toString()}
      />
    )
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
      } else if (gender==='female'){
        result = gramsLeft/(weight * 0.6);
      } else {
        setMessage('Choose a gender');
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
      return 'yellow'
    }
    if (alcoholLevel >= 0.495) {
      return 'red'
    }
  }

  return (
    <View style={styles.form}>
      <View style={styles.row}>
        <Text style={styles.label}>Weight</Text>
        <TextInput 
          style={styles.inputContainer}
          value={weight}
          onChangeText={text => setWeight(text)} keyboardType='decimal-pad'/>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Bottles</Text>
        <View style={styles.picker}>
          <Picker
            mode='dropdown'
            selectedValue={bottles}
            onValueChange={(itemValue) =>
              setBottles(itemValue)}>
            {pickerBottles}
          </Picker>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Time</Text>
        <View style={styles.picker}>
          <Picker
            mode='dropdown'
            selectedValue={time}
            onValueChange={(itemValue) =>
              setTime(itemValue)}>
            {pickerTime}
          </Picker>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Gender</Text>
        <Radiobutton options={genderValues} onPress={(value) => {setGender(value)}}/>
      </View>
      <View style={styles.result}>
        <Text style={{color:chooseColor(),fontSize:50}}>{alcoholLevel.toFixed(2)}</Text>
      </View>
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
