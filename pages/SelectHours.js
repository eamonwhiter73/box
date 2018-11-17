import React from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity, ScrollView, Dimensions } from 'react-native'; 

export default class SelectHours extends React.Component {
  render() {
    let tpd = this.props.navigation.getParam('tpd', 'two');

    switch(tpd) {
    case '1':
      tpd = 'one';
      break;
    case '2':
      tpd = 'two';
      break;
    case '3':
      tpd = 'three';
      break;
    case '4':
      tpd = 'four';
      break;
    default:
      //alert(tpd);
    }

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {this.showMultiple(tpd)}
        {this.showOnce(tpd)}
      </ScrollView>
    );
  }

  showMultiple = (tpd) => {
    if(tpd != 'one' && tpd != 'one/shortcut') {
      return (
        <View style={{flex: 0, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.instructions}>Please select a time for each period of the day:</Text>
          <View style={styles.choices}>  
            <View style={styles.choice}>
              <Text style={styles.bold}>Morning</Text>
              {this.showMorning(tpd)}
              <Text style={[styles.am_pm, styles.bold]}>AM</Text>
            </View>
            {this.showLateMorning(tpd)}
            {this.showAfternoon(tpd)}     
            <View style={styles.choice}>
              <Text style={styles.bold}>Nighttime</Text>
              {this.showNighttime(tpd)}
              <Text style={[styles.am_pm, styles.bold]}>PM</Text>
            </View>
          </View>
        </View>
      )
    }   
  }

  showMorning = (tpd) => {
    if(tpd === 'two') {
      return (
        <Picker
          selectedValue={this.state.morning}
          onValueChange={(itemValue, itemIndex) => this.setState({morning: itemValue})}
          
          itemStyle={{backgroundColor: 'white', width: 100}}>
          <Picker.Item label='1' value={1}/>
          <Picker.Item label='2' value={2}/>
          <Picker.Item label='3' value={3}/>
          <Picker.Item label='4' value={4}/>
          <Picker.Item label='5' value={5}/>
          <Picker.Item label='6' value={6}/>
          <Picker.Item label='7' value={7}/>
          <Picker.Item label='8' value={8}/>
          <Picker.Item label='9' value={9}/>
          <Picker.Item label='10' value={10}/>
          <Picker.Item label='11' value={11}/>
        </Picker>
      )
    }
    else {
      return (
        <Picker
          selectedValue={this.state.morning}
          onValueChange={(itemValue, itemIndex) => this.setState({morning: itemValue})}
          
          itemStyle={{backgroundColor: 'white', width: 100}}>
          <Picker.Item label='1' value={1}/>
          <Picker.Item label='2' value={2}/>
          <Picker.Item label='3' value={3}/>
          <Picker.Item label='4' value={4}/>
          <Picker.Item label='5' value={5}/>
          <Picker.Item label='6' value={6}/>
          <Picker.Item label='7' value={7}/>
          <Picker.Item label='8' value={8}/>
          <Picker.Item label='9' value={9}/>
        </Picker>
      )
    }
  }

  showLateMorning = (tpd) => {
    if(tpd === 'four') {
      return (
        <View style={styles.choice}>
          <Text style={styles.bold}>Late morning</Text>
          <Picker
            selectedValue={this.state.late_morning}
            onValueChange={(itemValue, itemIndex) => this.setState({late_morning: itemValue})}
            
            itemStyle={{backgroundColor: 'white', width: 100}}>
            <Picker.Item label='6' value={6}/>
            <Picker.Item label='7' value={7}/>
            <Picker.Item label='8' value={8}/>
            <Picker.Item label='9' value={9}/>
            <Picker.Item label='10' value={10}/>
            <Picker.Item label='11' value={11}/>
            <Picker.Item label='11' value={12}/>
          </Picker>
          <Text style={[styles.am_pm, styles.bold]}>AM</Text>
        </View>
      )
    }
  }

  showAfternoon = (tpd) => {
    if(tpd != 'two') {
      return (
        <View style={styles.choice}>
          <Text style={styles.bold}>Afternoon</Text>
          <Picker
            selectedValue={this.state.afternoon}
            onValueChange={(itemValue, itemIndex) => this.setState({afternoon: itemValue})}
            
            itemStyle={{backgroundColor: 'white', width: 100}}>
            <Picker.Item label='12' value={12}/>
            <Picker.Item label='1' value={13}/>
            <Picker.Item label='2' value={14}/>
            <Picker.Item label='3' value={15}/>
            <Picker.Item label='4' value={16}/>
            <Picker.Item label='5' value={17}/>
            <Picker.Item label='6' value={18}/>
          </Picker>
          <Text style={[styles.am_pm, styles.bold]}>PM</Text>
        </View>
      )
    }
  }

  showNighttime = (tpd) => {
    if(tpd != 'two') {
      return (
        <Picker
          selectedValue={this.state.nighttime}
          onValueChange={(itemValue, itemIndex) => this.setState({nighttime: itemValue})}
          
          itemStyle={{backgroundColor: 'white', width: 100}}>
          <Picker.Item label='6' value={18}/>
          <Picker.Item label='7' value={19}/>
          <Picker.Item label='8' value={20}/>
          <Picker.Item label='9' value={21}/>
          <Picker.Item label='10' value={22}/>
          <Picker.Item label='11' value={23}/>
          <Picker.Item label='12' value={24}/>
        </Picker>
      )
    }
    else {
      return (
        <Picker
          selectedValue={this.state.nighttime}
          onValueChange={(itemValue, itemIndex) => this.setState({nighttime: itemValue})}
          
          itemStyle={{backgroundColor: 'white', width: 100}}>
          <Picker.Item label='12' value={12}/>
          <Picker.Item label='1' value={13}/>
          <Picker.Item label='2' value={14}/>
          <Picker.Item label='3' value={15}/>
          <Picker.Item label='4' value={16}/>
          <Picker.Item label='5' value={17}/>
          <Picker.Item label='6' value={18}/>
          <Picker.Item label='7' value={19}/>
          <Picker.Item label='8' value={20}/>
          <Picker.Item label='9' value={21}/>
          <Picker.Item label='10' value={22}/>
          <Picker.Item label='11' value={23}/>
          <Picker.Item label='12' value={24}/>
        </Picker>
      )
    }
  }

  showOnce = (tpd) => {
    if(tpd === 'one' || tpd == 'one/shortcut') {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.once_choices}>
            <Text style={{paddingLeft: 15, paddingRight: 15}}>What time would you like to start taking your medication every day?</Text> 
            <Picker
              selectedValue={this.state.once}
              onValueChange={(itemValue, itemIndex) => this.setState({once: itemValue})}
              
              itemStyle={{backgroundColor: 'white', width: 100}}>
              <Picker.Item label='1 AM' value={1}/>
              <Picker.Item label='2 AM' value={2}/>
              <Picker.Item label='3 AM' value={3}/>
              <Picker.Item label='4 AM' value={4}/>
              <Picker.Item label='5 AM' value={5}/>
              <Picker.Item label='6 AM' value={6}/>
              <Picker.Item label='7 AM' value={7}/>
              <Picker.Item label='8 AM' value={8}/>
              <Picker.Item label='9 AM' value={9}/>
              <Picker.Item label='10 AM' value={10}/>
              <Picker.Item label='11 AM' value={11}/>
              <Picker.Item label='12 PM' value={12}/>
              <Picker.Item label='1 PM' value={13}/>
              <Picker.Item label='2 PM' value={14}/>
              <Picker.Item label='3 PM' value={15}/>
              <Picker.Item label='4 PM' value={16}/>
              <Picker.Item label='5 PM' value={17}/>
              <Picker.Item label='6 PM' value={18}/>
              <Picker.Item label='7 PM' value={19}/>
              <Picker.Item label='8 PM' value={20}/>
              <Picker.Item label='9 PM' value={21}/>
              <Picker.Item label='10 PM' value={22}/>
              <Picker.Item label='11 PM' value={23}/>
              <Picker.Item label='12 PM' value={24}/>
            </Picker>
          </View>
        </View>
      )
    }
  }

  methodSelect = () => {
    
  }

  constructor() {
    super();
    this.state = {
      morning: 5,
      late_morning: 10,
      afternoon: 14,
      nighttime: 8,
      once: 12
    }

    this.showMorning = this.showMorning.bind(this);
    this.showLateMorning = this.showLateMorning.bind(this);
    this.showAfternoon = this.showAfternoon.bind(this);
    this.showNighttime = this.showNighttime.bind(this);
    this.showOnce = this.showOnce.bind(this);
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  choices: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  once_choices: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  choice: {
    flex: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructions: {
    flex: 0,
    alignSelf: 'center',
    marginBottom: 30
  },
  am_pm: {
    marginBottom: 45
  },
  bold: {
    fontWeight: '700'
  },
});
