import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, FlatList, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CharacterItem from './CharacterItem';

function CountDown() {
const [isLoading, setLoading] = useState(true);
  const[joke, setJoke] = useState([]);

    const getJokeFromApiAsync = async () => {
          try {
            const response = await fetch('https://v2.jokeapi.dev/joke/christmas');
            const json = await response.json();
            setJoke(json);
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }
        };

  useState(() => {
    getJokeFromApiAsync();
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>count down</Text>
    </View>
  );
}

export default CountDown;