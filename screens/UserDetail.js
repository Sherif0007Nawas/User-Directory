import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';


export default function UserDetail({ route }) {
const { user } = route.params;
const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
return (
<ScrollView contentContainerStyle={styles.container}>
<Image source={{ uri: user.picture.large }} style={styles.avatar} />
<Text style={styles.name}>{fullName}</Text>
<View style={styles.row}>
<Text style={styles.label}>Email:</Text>
<Text style={styles.value}>{user.email}</Text>
</View>
<View style={styles.row}>
<Text style={styles.label}>Phone:</Text>
<Text style={styles.value}>{user.phone}</Text>
</View>
<View style={styles.row}>
<Text style={styles.label}>Location:</Text>
<Text style={styles.value}>{user.location.city}, {user.location.country}</Text>
</View>
</ScrollView>
);
}


const styles = StyleSheet.create({
container: { alignItems: 'center', padding: 20 },
avatar: { width: 160, height: 160, borderRadius: 80, marginBottom: 16 },
name: { fontSize: 20, fontWeight: '700', marginBottom: 12 },
row: { width: '100%', marginTop: 8 },
label: { fontWeight: '600' },
value: { marginTop: 4 }
});