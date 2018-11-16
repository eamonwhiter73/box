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
    const strategy = this.props.navigation.getParam('strategy', '');

    return (
      <View style={styles.container}>
        <Text style={styles.per_day_text}>Number of times to dispense medication per day:</Text>
        <View style={styles.choices}>
          <View style={styles.section}>
            <TouchableOpacity
              style={strategy === 'daily' ? styles.button : styles.split_button}
              onPress={() => this.methodSelect('one')}>
                <Text style={strategy === 'daily' ? styles.button_text : styles.split_button_text}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={strategy === 'daily' ? styles.button : styles.split_button}
              onPress={() => this.methodSelect('two')}>
                <Text style={strategy === 'daily' ? styles.button_text : styles.split_button_text}>2</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.section}>
            <TouchableOpacity
              style={strategy === 'daily' ? styles.button : styles.split_button}
              onPress={() => this.methodSelect('three')}>
                <Text style={strategy === 'daily' ? styles.button_text : styles.split_button_text}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={strategy === 'daily' ? styles.button : styles.split_button}
              onPress={() => this.methodSelect('four')}>
                <Text style={strategy === 'daily' ? styles.button_text : styles.split_button_text}>4</Text>
            </TouchableOpacity>
          </View>
        </View>
        {strategy === 'custom daily' &&
          <View style={styles.section_column}>
            <Text style={styles.choose_day_text}>Choose the days you would like to dispense your medication:</Text>
            <View style={styles.choices_row}>
              <TouchableOpacity style={styles.day_button}>
                <Text style={styles.day_button_text}>Mon</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.day_button}>
                <Text style={styles.day_button_text}>Tue</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.day_button}>
                <Text style={styles.day_button_text}>Wed</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.day_button}>
                <Text style={styles.day_button_text}>Thur</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.day_button}>
                <Text style={styles.day_button_text}>Fri</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.day_button}>
                <Text style={styles.day_button_text}>Sat</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.day_button}>
                <Text style={styles.day_button_text}>Sun</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
        {strategy === 'weekly' &&
          <View style={styles.section_column}>
            <Text style={styles.choose_day_weekly_text}>Choose which day of the week you would like to dispense your medication:</Text>
            <View style={styles.choices_row}>
              <TouchableOpacity style={styles.day_button}>
                <Text style={styles.day_button_text}>Mon</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.day_button}>
                <Text style={styles.day_button_text}>Tue</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.day_button}>
                <Text style={styles.day_button_text}>Wed</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.day_button}>
                <Text style={styles.day_button_text}>Thur</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.day_button}>
                <Text style={styles.day_button_text}>Fri</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.day_button}>
                <Text style={styles.day_button_text}>Sat</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.day_button}>
                <Text style={styles.day_button_text}>Sun</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      </View>
    );
  }

  methodSelect = (strategy) => {
    const { navigate } = this.props.navigation;
    navigate('SelectHours', { tpd: strategy });
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
    flex: 1,
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
    backgroundColor: '#7498da',
    color: 'white',
    fontWeight: '700',
    marginTop: 80,
  },
  button: {
    padding: 30,
    backgroundColor: '#7498da',
    width: Dimensions.get('window').width / 2 - 22.5
  },
  day_button: {
    paddingBottom: 1,
    backgroundColor: '#7498da',
    width: Dimensions.get('window').width / 7 - 5,
    margin: 2
  },
  day_button_text: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#7498da',
    color: 'white',
    fontWeight: '700',
    marginTop: 80,
  },
  split_button: {
    paddingBottom: 1,
    backgroundColor: '#7498da',
    width: Dimensions.get('window').width / 2 - 22.5
  },
  split_button_text: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#7498da',
    color: 'white',
    fontWeight: '700',
    marginTop: 45,
  },
});
