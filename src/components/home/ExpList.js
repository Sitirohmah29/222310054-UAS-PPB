import React from 'react';
import { FlatList } from 'react-native';
import ListItem from './List';
import { DataList } from '../data/List';


const ExpList = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <ListItem item={item} navigation={navigation} />
  );

  return <FlatList data={DataList} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />;
};

export default ExpList;
