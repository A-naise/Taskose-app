import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NotificationScreen({ navigation }) {
  const notifications = [
    { id: 1, name: "Rafi Islam Apon", message: "mentioned you on NFT Website and Mobile App Design", time: "Today at 10:04 AM", profileImage: require('../assets/rafi.png') },
    { id: 2, name: "Zara Yasmin Tasnim", message: "mentioned you on Redesign Dashboard Finance", time: "Today at 10:04 AM", profileImage: require('../assets/zara.png') },
    { id: 3, name: "David Malan", message: "mentioned you on Real Estate Website Design Project", time: "Yesterday at 2:40 PM", profileImage: require('../assets/david.png') },
    { id: 4, name: "Ikram Islam Tamim", message: "mentioned you on Architecture Web Design Project", time: "Yesterday at 1:10 PM", profileImage: require('../assets/ikram.png') },
  ];

  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const toggleFilterDropdown = () => {
    setFilterVisible(!filterVisible);
  };

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    setFilterVisible(false);
    
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container} className="mt-[40px]">
 
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} accessibilityLabel="Back">
            <Ionicons name="arrow-back-outline" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Notifications</Text>
          <Ionicons name="search-outline" size={24} color="#333" style={styles.searchIcon} />
        </View>

 
        <View style={styles.filterContainer}>
        
          <TouchableOpacity style={styles.dropdown} onPress={toggleFilterDropdown} accessibilityLabel="Filter Dropdown">
            <Text style={styles.dropdownText}>{selectedFilter}</Text>
            <Ionicons name={filterVisible ? "chevron-up" : "chevron-down"} size={16} color="#808080" />
          </TouchableOpacity>

    
          <TouchableOpacity style={styles.filterButton} onPress={() => console.log("Filter button pressed")} accessibilityLabel="Filter">
            <Ionicons name="filter-outline" size={16} color="#808080" />
            <Text style={styles.filterButtonText}>Filter</Text>
          </TouchableOpacity>
        </View>

        
        {filterVisible && (
          <View style={styles.dropdownMenu}>
            <TouchableOpacity onPress={() => handleFilterSelect("All")} style={styles.dropdownItem}>
              <Text style={styles.dropdownItemText}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleFilterSelect("Unread")} style={styles.dropdownItem}>
              <Text style={styles.dropdownItemText}>Unread</Text>
            </TouchableOpacity>
          </View>
        )}

   
        <ScrollView style={styles.notificationList} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
     
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Unread</Text>
            <TouchableOpacity accessibilityLabel="More options for Unread">
              <Ionicons name="ellipsis-horizontal" size={20} color="#333" />
            </TouchableOpacity>
          </View>
          {notifications.slice(0, 2).map(notification => (
            <View key={notification.id} style={styles.notificationItem}>
              <Image source={notification.profileImage} style={styles.profileImage} />
              <View style={styles.notificationTextContainer}>
                <Text style={styles.notificationText}>
                  <Text style={styles.notificationName}>{notification.name} </Text>
                  {notification.message}
                </Text>
                <Text style={styles.notificationTime}>{notification.time}</Text>
              </View>
            </View>
          ))}

          <View style={styles.separator} />

       
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Yesterday</Text>
            <TouchableOpacity>
              <Ionicons name="ellipsis-horizontal" size={20} color="#333" />
            </TouchableOpacity>
          </View>
          {notifications.slice(2).map(notification => (
            <View key={notification.id} style={styles.notificationItem}>
              <Image source={notification.profileImage} style={styles.profileImage} />
              <View style={styles.notificationTextContainer}>
                <Text style={styles.notificationText}>
                  <Text style={styles.notificationName}>{notification.name} </Text>
                  {notification.message}
                </Text>
                <Text style={styles.notificationTime}>{notification.time}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

      
        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.bottomIcon}>
            <Ionicons name="menu" size={24} color="#333" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomIcon}>
            <Ionicons name="create-outline" size={24} color="#333" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.plusButton} className="ml-[120px] mb-[15px]" onPress={() => console.log("Add button pressed")} accessibilityLabel="Add">
            <Ionicons name="add" size={32} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomIcon}>
            <Ionicons name="chatbubble-ellipses-outline" size={24} color="#333" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomIcon}>
            <Ionicons name="person-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
   
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  searchIcon: {
    marginLeft: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    flex: 1,
    backgroundColor: '#F0F8FF',
  },
  dropdownText: {
    fontSize: 14,
    color: '#808080',
    flex: 1,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F8FF',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 30, 
  },
  filterButtonText: {
    fontSize: 14,
    color: '#808080',
    marginLeft: 5,
  },
  dropdownMenu: {
    position: 'absolute',
    top: 80,
    left: 20,
    backgroundColor: '#F0F8FF',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    elevation: 3,
    zIndex: 1000,
    width: '90%',
    maxHeight: 120,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  dropdownItemText: {
    fontSize: 14,
    color: '#808080',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationList: {
    flex: 1,
    marginBottom: 20, 
  },
  scrollContent: {
    paddingBottom: 20, 
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  notificationTextContainer: {
    flex: 1,
  },
  notificationText: {
    fontSize: 15,
    color: '#333',
  },
  notificationName: {
    fontWeight: 'bold',
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
  },
   bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 19, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  plusButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1e90ff', 
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20, 
    alignSelf: 'center',
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  }
});
