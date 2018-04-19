/* @flow */
import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import { GroupedList, withTheme, Body } from 'react-native-ios-kit';

const data = [
  { firstName: 'John', lastName: 'Appleseed', id: Math.random() },
  { firstName: 'Kate', lastName: 'Bell', id: Math.random() },
  { firstName: 'Anna', lastName: 'Haro', id: Math.random() },
  { firstName: 'Daniel', lastName: 'Higgins Jr', id: Math.random() },
  { firstName: 'David', lastName: 'Taylor', id: Math.random() },
  { firstName: 'Hank M.', lastName: 'Zakroff', id: Math.random() },
];

// const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#';

class AvatarExample extends React.Component {
  state = {
    data,
    // sections: ALPHABET.split(''), // Optional!
  };

  groupBy = item => item.lastName.slice(0, 1);

  renderItem = ({ item }) => (
    <View key={item.id} style={styles.item}>
      <Body>{item.firstName}</Body>
      <Body style={styles.lastName}>{item.lastName}</Body>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <GroupedList
          items={this.state.data}
          // sections={this.state.sections}
          renderItem={this.renderItem}
          groupBy={this.groupBy}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'green',
  },
  item: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  lastName: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default withTheme(AvatarExample);
