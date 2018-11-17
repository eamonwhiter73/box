import React from 'react';
import { StyleSheet, Text, View, Picker, TouchableHighlight } from 'react-native'; 

export default class SelectHours extends React.Component {
  render() {
    const tpd = this.props.navigation.getParam('tpd', 'two');

    return (
      <View styles={styles.container}>
        <Text>Number of times to dispense medication per day:</Text>
        <View styles={styles.choices}>
          {tpd != 'one' ? true : false &&
            <View>
              <View>
                <View styles={styles.choice}>
                  <Text>Morning:</Text>
                  <Picker
                    selectedValue={this.state.morning}
                    style={{ height: 50, width: 50 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({morning: itemValue})}>
                    <Picker.Item label='1' value={1}/>
                    <Picker.Item label='2' value={2}/>
                    <Picker.Item label='3' value={3}/>
                    <Picker.Item label='4' value={4}/>
                    <Picker.Item label='5' value={5}/>
                    <Picker.Item label='6' value={6}/>
                    <Picker.Item label='7' value={7}/>
                    <Picker.Item label='8' value={8}/>
                    <Picker.Item label='9' value={9}/>
                    {tpd === 'two' ? true : false &&
                      <View>
                        <Picker.Item label='10' value={10}/>
                        <Picker.Item label='11' value={11}/>
                      </View>
                    }
                  </Picker>
                  <Text>AM</Text>
                </View>
                <View>
                  {tpd === 'four' ? true : false &&
                    <View styles={styles.choice}>
                      <Text>Late morning:</Text>
                      <Picker
                        selectedValue={this.state.late_morning}
                        style={{ height: 50, width: 50 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({late_morning: itemValue})}>
                        <Picker.Item label='10' value={10}/>
                        <Picker.Item label='11' value={11}/>
                      </Picker>
                      <Text>AM</Text>
                    </View>
                  }
                </View>
              </View>
              <View>
                {tpd != 'two' ? true : false &&
                  <View styles={styles.choice}>
                    <Text>Afternoon</Text>
                    <Picker
                      selectedValue={this.state.afternoon}
                      style={{ height: 50, width: 50 }}
                      onValueChange={(itemValue, itemIndex) => this.setState({afternoon: itemValue})}>
                      <Picker.Item label='12' value={12}/>
                      <Picker.Item label='1' value={13}/>
                      <Picker.Item label='2' value={14}/>
                      <Picker.Item label='3' value={15}/>
                      <Picker.Item label='4' value={16}/>
                      <Picker.Item label='5' value={17}/>
                    </Picker>
                    <Text>PM</Text>
                  </View>
                }
              </View>
              <View styles={styles.choice}>
                <Text>Nighttime</Text>
                <Picker
                  selectedValue={this.state.nighttime}
                  style={{ height: 50, width: 50 }}
                  onValueChange={(itemValue, itemIndex) => this.setState({nighttime: itemValue})}>
                  {tpd === 'two' ? true : false &&
                    <View>
                      <Picker.Item label='12' value={12}/>
                      <Picker.Item label='1' value={13}/>
                      <Picker.Item label='2' value={14}/>
                      <Picker.Item label='3' value={15}/>
                      <Picker.Item label='4' value={16}/>
                      <Picker.Item label='5' value={17}/>
                    </View>
                  }
                  <Picker.Item label='6' value={18}/>
                  <Picker.Item label='7' value={19}/>
                  <Picker.Item label='8' value={20}/>
                  <Picker.Item label='9' value={21}/>
                  <Picker.Item label='10' value={22}/>
                  <Picker.Item label='11' value={23}/>
                  <Picker.Item label='12' value={24}/>
                </Picker>
                <Text>PM</Text>
              </View>
            </View>
          }
          {tpd === 'one' ? true : false &&
            <View style={styles.choices}>
              {tpd === 'shortcut' ? true : false &&
                <View>
                  <Text>What time would you like to start taking your medication every day?</Text>
                </View>
              }
              <Picker
                selectedValue={this.state.once}
                style={{ height: 50, width: 50 }}
                onValueChange={(itemValue, itemIndex) => this.setState({once: itemValue})}>
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
          }
        </View>
        <TouchableHighlight
          onPress={this.methodSelect.bind(this)}>
          <Text>SET</Text>
        </TouchableHighlight>
      </View>
    );
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
  }

  methodSelect = () => {
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  choices: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  choice: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
