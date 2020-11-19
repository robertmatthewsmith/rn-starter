import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'friend #1', age: 33 },
        { name: 'friend #2', age: 54 },
        { name: 'friend #3', age: 44 },
        { name: 'friend #4', age: 55 },
        { name: 'friend #5', age: 66 },
        { name: 'friend #6', age: 77 },
        { name: 'friend #7', age: 97 },
        { name: 'friend #8', age: 55 },
        { name: 'friend #9', age: 39 }
       
    ]
    return (
        <FlatList
        keyExtractor={(friend) => friend.name }
        data={friends} renderItem={({item}) => {
            return <Text style={styles.textStyle} >{item.name} - age {item.age}</Text>
            ;
        }}/>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical:50
    }
});

export default ListScreen;
