// HomeScreen.js
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

export default function HomeScreen({ navigation }) {
  const handleLogout = () => {
    Alert.alert('Keluar', 'Anda telah keluar', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('SignIn'),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
          source={require("../../../assets/img/profile.jpeg")} 
          style={styles.profilePicture}
        />
        <Text style={styles.profileName}>Lubar Amien</Text>
        <Text style={styles.profileEmail}>lubaramien@gmail.com</Text>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="star" size={20} color="black" style={styles.icon} />
          <Text style={styles.menuText}>Important</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="trash" size={20} color="black" style={styles.icon} />
          <Text style={styles.menuText}>Trash</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="settings" size={20} color="black" style={styles.icon} />
          <Text style={styles.menuText}>Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="information-circle" size={20} color="black" style={styles.icon} />
          <Text style={styles.menuText}>About App</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuItem, styles.logout]} onPress={handleLogout}>
          <Ionicons name="log-out" size={20} color="black" style={styles.icon} />
          <Text style={[styles.menuText, styles.logoutText]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  profile: {
    alignItems: 'center',
    marginBottom: 50,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },
  profileEmail: {
    fontSize: 16,
    color: 'gray',
  },
  menu: {
    width: '80%',
  },
  menuItem: {
    backgroundColor: '#EEEDEB',
    padding: 15,
    borderRadius: 30,
    marginBottom: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },
  menuText: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 5,
  },
  icon: {
    marginRight: 10,
  },
  
  logoutText: {
    color: '#26282B',
  },
});
