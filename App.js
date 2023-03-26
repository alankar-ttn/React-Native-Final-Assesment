import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './config/navigation/Routes';
import {Provider} from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
