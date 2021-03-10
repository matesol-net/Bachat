import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import Store from './application/redux/Store';
import Root from './application/navigation/Root';

const App = () => {
  return(
    <Provider store={Store}>
      <Root />
    </Provider>
  );
}

export default App;