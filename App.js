/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      principle: 0,
      loanAmount: '',
      rate: '',
      term: ''
    }
  }

  calculatePrinciple (loanAmount, rate, term) {
    const monthlyRate = rate / 1200;
    
    let principle = (loanAmount * monthlyRate) / (1 - Math.pow(1 / (1 + monthlyRate), term))

    this.setState({principle: principle.toFixed(2)})
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Mortgage Calculator</Text>
        <Text style={styles.headerText}>Desired Loan Amount <Text style={{color: 'red'}}>*</Text></Text>
        <TextInput 
          style={styles.input}
          placeholder='$'
          placeholderTextColor='black'
          value={this.state.loanAmount}
          onChangeText={(text) => this.setState({loanAmount: text})}/>
        <Text style={styles.headerText}>Estimated APR</Text>
        <TextInput
          style={styles.input}
          placeholder='%'
          placeholderTextColor='black'
          value={this.state.rate}
          onChangeText={(text) => this.setState({rate: text})} />
        <Text style={styles.headerText}>Desired Term</Text>
        <TextInput 
          style={styles.input}
          value={this.state.term}
          onChangeText={(text) => this.setState({term: text})} />
        <TouchableOpacity style={styles.calculateButton} onPress={() => this.calculatePrinciple(this.state.loanAmount, this.state.rate, this.state.term)}>
          <Text style={styles.calculatorText}>Calculate</Text>
        </TouchableOpacity>
          <Text style={styles.principleText}>Your Monthly Principle would be: <Text style={{color: '#002d82', fontWeight: 'bold'}}>${this.state.principle}</Text></Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  title: {
    marginTop: 50,
    marginBottom: 15,
    fontSize: 27,
    fontWeight: 'bold',
    color: '#002d82'
  },
  headerText: {
    color: '#454745',
    marginTop: 5,
    marginBottom: 5
  },
  input: {
    borderColor: '#797373',
    borderWidth: 1,
    height: 50,
    width: '100%'
  },
  calculateButton: {
    borderColor: '#002d82',
    borderWidth: 2,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  calculatorText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#002d82'
  },
  principleText: {
    color: '#454745',
    marginTop: 35,
    fontSize: 20
  }
});

export default App;
