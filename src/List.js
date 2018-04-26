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

class AvatarExample extends React.Component {
  state = {
    data,
  };

  groupBy = item => item.lastName.slice(0, 1);

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Body>{item.firstName}</Body>
      <Body style={styles.lastName}>{item.lastName}</Body>
    </View>
  );

  render() {
    const { searchText } = this.props;
    const items = this.state.data.filter(
      person =>
        person.firstName.includes(searchText) ||
        person.lastName.includes(searchText)
    );
    return (
      <GroupedList
        items={items}
        renderItem={this.renderItem}
        groupBy={this.groupBy}
        keyExtractor={item => item.id}
      />
    );
  }
}

const styles = StyleSheet.create({
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
