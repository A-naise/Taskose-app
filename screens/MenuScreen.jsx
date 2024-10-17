import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MenuScreen({ navigation }) {
  const [isHomeExpanded, setIsHomeExpanded] = useState(false);

  const toggleHomeMenu = () => {
    setIsHomeExpanded(!isHomeExpanded);
  };

  const navigateToPages = () => {
    navigation.navigate('Page');
  };

  const navigateToComponents = () => {
    navigation.navigate('Components');
  };



  return (
    <View style={styles.container}>
    
      <View style={styles.header}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
     
        <View style={styles.profileSection}>
          <Image
            source={require('../assets/jenn.png')}
            style={styles.profileImage}
          />
          <View style={styles.profileText}>
            <Text style={styles.goodMorningText}>Good morning</Text>
            <Text style={styles.profileNameText}>Jennifer Lyine</Text>
          </View>
        </View>
      </View>

      <View style={styles.horizontalLine} />

      <Text style={styles.mainMenuTitle}>MAIN MENU</Text>

      <ScrollView style={styles.menuList} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.menuItem} onPress={toggleHomeMenu} accessibilityLabel="Home">
          <View style={styles.menuItemContent}>
            <Ionicons name="home-outline" size={24} color="#D3D3D3" />
            <Text style={styles.menuItemText}>Home</Text>
          </View>
          <Ionicons 
            name={isHomeExpanded ? "chevron-down" : "chevron-forward-outline"} 
            size={20} 
            color="#333" 
          />
        </TouchableOpacity>
        {isHomeExpanded && (
          <View style={styles.subMenu}>
            <TouchableOpacity style={styles.subMenuItem} accessibilityLabel="Home 01">
              <Text style={styles.subMenuText}>Home 01</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.subMenuItem} accessibilityLabel="Home 02">
              <Text style={styles.subMenuText}>Home 02</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.subMenuItem} accessibilityLabel="Home 03">
              <Text style={styles.subMenuText}>Home 03</Text>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity style={styles.menuItem} onPress={navigateToPages} accessibilityLabel="Page">
          <View style={styles.menuItemContent}>
            <Ionicons name="document-outline" size={24} color="#D3D3D3" />
            <Text style={styles.menuItemText}>Pages</Text>
          </View>
          <Ionicons 
            name="chevron-forward-outline" 
            size={20} 
            color="#333" 
          />
        </TouchableOpacity>

    
        <TouchableOpacity style={styles.menuItem} onPress={navigateToComponents} accessibilityLabel="Components">
          <View style={styles.menuItemContent}>
            <Ionicons name="construct-outline" size={24} color="#D3D3D3" />
            <Text style={styles.menuItemText}>Components</Text>
          </View>
          <Ionicons 
            name="chevron-forward-outline" 
            size={20} 
            color="#333" 
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} accessibilityLabel="Profile">
          <View style={styles.menuItemContent}>
            <Ionicons name="person-outline" size={24} color="#D3D3D3" />
            <Text style={styles.menuItemText}>Profile</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} accessibilityLabel="Chat">
          <View style={styles.menuItemContent}>
            <Ionicons name="chatbubble-ellipses-outline" size={24} color="#D3D3D3" />
            <Text style={styles.menuItemText}>Chat</Text>
          </View>
        </TouchableOpacity>

      
        <TouchableOpacity style={styles.menuItem} accessibilityLabel="Logout">
          <View style={styles.menuItemContent}>
            <Ionicons name="log-out-outline" size={24} color="#D3D3D3" />
            <Text style={styles.menuItemText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  header: {
    alignItems: 'center',
  },
  logo: {
    width: '100%', 
    height: 110,
    marginBottom: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 110, 
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileText: {
    marginLeft: 15,
  },
  goodMorningText: {
    fontSize: 16,
    color: '#D3D3D3',
  },
  profileNameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  mainMenuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D3D3D3',
    marginLeft: 15,
  },
  menuList: {
    flex: 1,
    marginLeft: 15,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 15,
    marginLeft: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  subMenu: {
    paddingLeft: 50,
    backgroundColor: '#f9f9f9',
  },
  subMenuItem: {
    paddingVertical: 10,
  },
  subMenuText: {
    fontSize: 14,
    color: '#666',
  },
});
