import { FlatList, Text, StyleSheet, Platform, Image, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react'
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const [users, setUser] = useState([]);
    const [error, setError] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
      const getUser = async () => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(json => setUser(json))
          .catch(err => {
              setError(err.message)
            })
        }
      getUser();
    }, [])

  const renderItem = ({ item }) => {
      const handlePress = () => {
          navigation.navigate('UserDetail', { userId: item.id });
      };
    return (
      <TouchableOpacity onPress={handlePress} style={styles.cardContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.name}> Nama : {item.name}</Text>
            <Text style={styles.email}> Email : {item.email}</Text>
          </View>
      </TouchableOpacity>
    )
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 14,
        margin: 6,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 0 },
        elevation: 3,
    },
    textContainer: {
        justifyContent: 'center',
        flexShrink: 1,
        flexWrap: 'wrap',
    },
    name: {
        fontSize: 16,
        flexShrink: 1,
    },
    email: {
        fontSize: 14,
        flexShrink: 1,
        color: '#555',
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
});
