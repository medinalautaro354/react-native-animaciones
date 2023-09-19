import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const screens: string[] = ['PanGesture'];

const Home = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={screens}
      renderItem={({item}) => (
        <Button
          title={item}
          onPress={() => navigation.navigate('PanGesture')}
        />
      )}
    />
  );
};

export default Home;
