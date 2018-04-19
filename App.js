import * as React from 'react';
import { ThemeProvider } from 'react-native-ios-kit';

import Contacts from './src/Contacts';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <Contacts />
      </ThemeProvider>
    );
  }
}

export default App;
