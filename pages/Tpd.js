import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

export default class Tpd extends React.Component {

  static navigationOptions = ({navigation}) => {
    capitalizeTitle = (string) => {
      if(string == 'daily' || string == 'weekly') {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      else if(string == 'custom daily') {
        let first_word_done = string.charAt(0).toUpperCase() + string.slice(1, 6);
        let completed = string.charAt(7).toUpperCase() + string.slice(8);
        return first_word_done + ' ' + completed;
      }
    }

    return { title: this.capitalizeTitle(navigation.state.params.strategy) }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.per_day_text}>Number of times to dispense medication per day:</Text>
        <View style={styles.choices}>
          <View style={styles.section}>
            <TouchableOpacity
              style={{...(this.state.strategy === 'daily' ? styles.button : styles.split_button), backgroundColor: this.state.backgroundColor1}}
              onPress={() => this.state.strategy === 'daily' ? this.methodSelect('one') : this.holdMethodSelect(1)}>
                <Text style={{...(this.state.strategy === 'daily' ? styles.button_text : styles.split_button_text), backgroundColor: this.state.backgroundColor1}}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{...(this.state.strategy === 'daily' ? styles.button : styles.split_button), backgroundColor: this.state.backgroundColor2}}
              onPress={() => this.state.strategy === 'daily' ? this.methodSelect('two') : this.holdMethodSelect(2)}>
                <Text style={{...(this.state.strategy === 'daily' ? styles.button_text : styles.split_button_text), backgroundColor: this.state.backgroundColor2}}>2</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.section}>
            <TouchableOpacity
              style={{...(this.state.strategy === 'daily' ? styles.button : styles.split_button), backgroundColor: this.state.backgroundColor3}}
              onPress={() => this.state.strategy === 'daily' ? this.methodSelect('three') : this.holdMethodSelect(3)}>
                <Text style={{...(this.state.strategy === 'daily' ? styles.button_text : styles.split_button_text), backgroundColor: this.state.backgroundColor3}}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{...(this.state.strategy === 'daily' ? styles.button : styles.split_button), backgroundColor: this.state.backgroundColor4}}
              onPress={() => this.state.strategy === 'daily' ? this.methodSelect('four') : this.holdMethodSelect(4)}>
                <Text style={{...(this.state.strategy === 'daily' ? styles.button_text : styles.split_button_text), backgroundColor: this.state.backgroundColor4}}>4</Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.state.strategy != 'daily' &&
          <View style={styles.section_column}>
            <View>
              {this.state.strategy === 'custom daily' &&
                <Text style={styles.choose_day_text}>Choose the days you would like to dispense your medication:</Text>
              }
            </View>
            <View>
              {this.state.strategy === 'weekly' &&
                <Text style={styles.choose_day_weekly_text}>Choose which day of the week you would like to dispense your medication:</Text>
              }
            </View>
            <View>
              <View style={styles.choices_row}>
                <TouchableOpacity style={{...styles.day_button, backgroundColor:this.state.backgroundColormon}}
                    onPress={() => this.holdDaysSelect('mon')}>
                  <Text style={{...styles.day_button_text, backgroundColor:this.state.backgroundColormon}}>Mon</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.day_button, backgroundColor:this.state.backgroundColortue}}
                    onPress={() => this.holdDaysSelect('tue')}>
                  <Text style={{...styles.day_button_text, backgroundColor:this.state.backgroundColortue}}>Tue</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.day_button, backgroundColor:this.state.backgroundColorwed}}
                    onPress={() => this.holdDaysSelect('wed')}>
                  <Text style={{...styles.day_button_text, backgroundColor:this.state.backgroundColorwed}}>Wed</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.day_button, backgroundColor:this.state.backgroundColorthur}}
                    onPress={() => this.holdDaysSelect('thur')}>
                  <Text style={{...styles.day_button_text, backgroundColor:this.state.backgroundColorthur}}>Thur</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.day_button, backgroundColor:this.state.backgroundColorfri}}
                    onPress={() => this.holdDaysSelect('fri')}>
                  <Text style={{...styles.day_button_text, backgroundColor:this.state.backgroundColorfri}}>Fri</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.day_button, backgroundColor:this.state.backgroundColorsat}}
                    onPress={() => this.holdDaysSelect('sat')}>
                  <Text style={{...styles.day_button_text, backgroundColor:this.state.backgroundColorsat}}>Sat</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.day_button, backgroundColor:this.state.backgroundColorsun}}
                    onPress={() => this.holdDaysSelect('sun')}>
                  <Text style={{...styles.day_button_text, backgroundColor:this.state.backgroundColorsun}}>Sun</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        }
        <View>
          {this.state.strategy != 'daily' &&
            <TouchableOpacity
              onPress={this.next}
              style={styles.next_button}>
              <Text style={styles.next_text}>NEXT</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
    );
  }

  methodSelect = (strategy) => {
    const { navigate } = this.props.navigation;
    navigate('SelectHours', { tpd: strategy });
  }

  changeTpdButtonColor = (strategy) => {
    const key = 'backgroundColor' + strategy.toString();
    if(this.state[key] === '#7498da') {
      this.setState({[key]: '#cd91d4'});
      return '#cd91d4';
    }
    else {
      this.setState({[key]: '#7498da'});
      return '#7498da';
    }
  }

  changeDaysButtonColor = (strategy) => {
    const key = 'backgroundColor' + strategy;
    if(this.state.strategy === 'custom_daily') {
      this.state[key] === '#7498da' ? this.setState({[key]: '#cd91d4'}) : this.setState({[key]: '#7498da'});
    }
    else if(this.state.strategy === 'weekly') {
      if(this.state[key] === '#7498da' && this.state.days.length === 0) {
        this.setState({[key]: '#cd91d4'});
      }
      else if(this.state[key] === '#cd91d4') {
        this.setState({[key]: '#7498da'});
      }
    }
  }

  holdMethodSelect = (strategy) => {
    if(this.state.customMethod == null) {
      const buttonColor = this.changeTpdButtonColor(strategy);
      buttonColor === '#cd91d4' ? this.setState({customMethod: strategy}) : this.setState({customMethod: null})
    }
    else if(this.state.customMethod != null && this.state.customMethod == parseInt(strategy)) {
      this.changeTpdButtonColor(strategy);
      this.setState({customMethod: null});
    }
  }

  arrayRemove = (arr, value) => {
    return arr.filter(function(ele){
       return ele != value;
    });
  }

  holdDaysSelect = (day) => {
    let days = this.state.days;

    if(this.state.strategy === 'custom daily') {
      this.changeDaysButtonColor(day);

      days.indexOf(day) > -1 ? this.arrayRemove(days, day) : days.push(day);
    }
    else if(this.state.strategy === 'weekly') {
      if(this.state.days.length === 0) {
        this.changeDaysButtonColor(day);
        days.push(day);
      }
      else {
        this.changeDaysButtonColor(day);

        days = this.arrayRemove(days, day);
      }
    }

    this.setState({days: days});
  }

  next = () => {
    const { navigate } = this.props.navigation;
    navigate('SelectHours', { tpd: this.state.customMethod != null ? this.state.customMethod.toString() : null, days: this.state.days });
  }

  componentDidMount() {
    this.setState({strategy: this.props.navigation.getParam('strategy', '')});

    for (var i = 1; i < 5; i++) {
      const key = 'backgroundColor'+i.toString();
      this.setState({[key]: '#7498da'});
    }
  }

  constructor() {
    super();

    this.methodSelect = this.methodSelect.bind(this);
    this.changeTpdButtonColor = this.changeTpdButtonColor.bind(this);
    this.changeDaysButtonColor = this.changeDaysButtonColor.bind(this);
    this.holdMethodSelect = this.holdMethodSelect.bind(this);
    this.next = this.next.bind(this);
    this.holdDaysSelect = this.holdDaysSelect.bind(this);

    this.state = {
      customMethod: null,
      days: [],
      backgroundColormon: '#7498da',
      backgroundColortue: '#7498da',
      backgroundColorwed: '#7498da',
      backgroundColorthur: '#7498da',
      backgroundColorfri: '#7498da',
      backgroundColorsat: '#7498da',
      backgroundColorsun: '#7498da',
      strategy: null
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 15
  },
  choices: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  choices_row: {
    flex: 0.8,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  per_day_text: {
    marginTop: 70,
  },
  choose_day_text: {
    marginTop: 15,
    marginBottom: 15
  },
  choose_day_weekly_text: {
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 15,
    paddingRight: 15
  },
  section: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    width: Dimensions.get('window').width
  },
  section_column: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width
  },
  button_text: {
    flex: 1,
    alignSelf: 'center',
    color: 'white',
    fontWeight: '700',
    marginTop: 80,
  },
  button: {
    padding: 30,
    width: Dimensions.get('window').width / 2 - 22.5,
  },
  day_button: {
    paddingBottom: 1,
    width: Dimensions.get('window').width / 7 - 5,
    margin: 2,
  },
  day_button_text: {
    flex: 1,
    alignSelf: 'center',
    color: 'white',
    fontWeight: '700',
    marginTop: 60,
  },
  split_button: {
    paddingBottom: 1,
    width: Dimensions.get('window').width / 2 - 22.5,
  },
  split_button_text: {
    flex: 1,
    alignSelf: 'center',
    color: 'white',
    fontWeight: '700',
    marginTop: 37.5,
  },
  next_button: {
    width: Dimensions.get('window').width - 10,
    backgroundColor: '#7498da',
    padding: 30
  },
  next_text: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: '700',
    backgroundColor: '#7498da'
  }
});
