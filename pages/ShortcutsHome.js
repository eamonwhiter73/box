import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

export default class ShortcutsHome extends React.Component {

  static navigationOptions = ({navigation}) => {
    return { title: navigation.state.params.name, headerTransparent: true }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.every_text}>Take medication every:</Text>
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.methodSelect('four')}>
              <Text style={styles.button_text}>4 hrs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.methodSelect('six')}>
              <Text style={styles.button_text}>6 hrs</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.methodSelect('twelve')}>
              <Text style={styles.button_text}>12 hrs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.methodSelect('twenty_four')}>
              <Text style={styles.button_text}>24 hrs</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.schedule_text}>Customize medication schedule:</Text>
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.methodSelect('daily')}>
              <Text style={styles.button_text}>Daily</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.methodSelect('custom_daily')}>
              <Text style={styles.button_text}>Custom Daily</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.section, styles.weekly]}>
          <TouchableOpacity
            style={styles.weekly_button}
            onPress={() => this.methodSelect('weekly')}>
              <Text style={styles.button_text}>Weekly</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  methodSelect = (strategy) => {
    const { navigate } = this.props.navigation;
    switch(strategy) {
    case 'four':
      
      break;
    case 'six':
      
      break;
    case 'twelve':
      
      break;
    case 'twenty_four':
      
      break;
    case 'daily':
      navigate('Tpd', { strategy: 'daily' });
      break;
    case 'weekly':
      navigate('Tpd', { strategy: 'weekly' });
      break;
    case 'custom_daily':
      navigate('Tpd', { strategy: 'custom daily' });
      break;
    default:
      alert("Something went wrong when selecting your strategy, please try again.");
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 15
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
  every_text: {
    marginTop: 60,
  },
  schedule_text: {
    marginTop: 15,
  },
  weekly: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_text: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#7498da',
    color: 'white',
    fontWeight: '700',
    marginTop: 10,
  },
  button: {
    padding: 30,
    backgroundColor: '#7498da',
    width: Dimensions.get('window').width / 2 - 22.5
  },
  section_weekly: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: Dimensions.get('window').width
  },
  weekly_button: {
    padding: 30,
    backgroundColor: '#7498da',
    width: Dimensions.get('window').width - 30
  }
});
