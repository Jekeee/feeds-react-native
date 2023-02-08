import React from 'react';
import {Provider} from 'react-redux';
import {Store} from './src/store';
import {NativeBaseProvider} from 'native-base';
import RootNavigation from './src/navigations/RootNavigation';

const App = () => {
  return (
    <Provider store={Store}>
      <NativeBaseProvider>
        <RootNavigation />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
