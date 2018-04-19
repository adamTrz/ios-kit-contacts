import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Title1,
  Button,
  GroupedList,
  SearchBar,
  ThemeProvider,
  DefaultTheme,
  withTheme,
} from 'react-native-ios-kit';

import List from './List';

class Contacts extends React.Component {
  handleSearch = searchText => {};
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Button inline>Groups</Button>
          <Button inline>&#x2b;</Button>
        </View>
        <View style={styles.header}>
          <Title1 style={styles.title}>Contacts</Title1>
          <SearchBar animated withCancel onValueChange={this.handleSearch} />
        </View>
        <List />
      </View>
    );
  }
}

export default withTheme(Contacts);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  header: {},
});
