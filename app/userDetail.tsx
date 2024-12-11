import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function UserDetail() {
  const route = useRoute();
  const { userId } = route.params;
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error(error));
  }, [userId]);

  if (!user) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Phone: {user.phone}</Text>
      <Text>Website: {user.website}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
