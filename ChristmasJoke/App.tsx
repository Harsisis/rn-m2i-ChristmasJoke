import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {HomePage} from './src/components/homepage/HomePage';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CountDown} from './src/components/countdown/CountDown';

export type TStackRoute = {
  ['/home']: any;
  ['/countDown']: any;
};

const Stack = createStackNavigator<TStackRoute>();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView
      style={{...backgroundStyle, flex: 1}}
      forceInset={{top: 'always'}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator
          transparentCard={true}
          transitionConfig={{
            containerStyle: {
              backgroundColor: 'transparent',
            },
          }}
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="/home">
          <Stack.Screen name="/home" component={HomePage} />
          <Stack.Screen name="/countDown" component={CountDown} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;