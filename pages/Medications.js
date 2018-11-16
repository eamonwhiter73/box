import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default class Medications extends React.Component {
  render() {
    return (
      <View styles={styles.container}>
        <FlatList
          data={[{key: 'Vyvanse'}, {key: 'Adderall'}]}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.row}
              onPress={() => this.showMedication(item)}>
                <Text style={styles.row_text}>
                  {item.key}
                </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }

  showMedication = (item) => {
    const {navigate} = this.props.navigation;
    navigate('Shortcuts', { name: item.key });
  }

  constructor() {
    super();
    this.showMedication = this.showMedication.bind(this);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row_text: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#7498da',
    color: 'white',
    fontWeight: '700'
  },
  row: {
    paddingBottom: 30,
    paddingTop: 30,
    backgroundColor: '#7498da',
    borderBottomWidth: 1,
    borderBottomColor: '#ececec'
  }
});
