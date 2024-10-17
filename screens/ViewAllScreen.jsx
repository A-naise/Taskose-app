import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ViewAllProjects({ navigation }) {
  const projects = [
    { id: 1, name: "Game Project", image: require('../assets/game.png') },
    { id: 2, name: "Furniture Project", image: require('../assets/furnite.png') },
  ];

  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Board");

  const toggleFilterDropdown = () => {
    setFilterVisible(!filterVisible);
  };

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    setFilterVisible(false);
  };

  const navigateToProject = (projectName) => {
    if (projectName === "Game Project") {
      navigation.navigate('Game');
    } else if (projectName === "Furniture Project") {
      navigation.navigate('Furniture');
    }
  };

  return (
    <View style={styles.container} className="mt-[40px]">
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} accessibilityLabel="Back">
          <Ionicons name="arrow-back-outline" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Projects</Text>
        <Ionicons name="search-outline" size={24} color="#333" style={styles.searchIcon} />
      </View>

      <View style={styles.filterContainer}>

        <TouchableOpacity style={styles.dropdown} onPress={toggleFilterDropdown} accessibilityLabel="Filter Dropdown">
          <Ionicons name="grid-outline" size={16} color="#808080" style={styles.dropdownIcon} />
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
          <TouchableOpacity onPress={() => handleFilterSelect("Board")} style={styles.dropdownItem}>
            <Ionicons name="grid-outline" size={16} color="#808080" style={styles.dropdownItemIcon} />
            <Text style={styles.dropdownItemText}>Board</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleFilterSelect("List")} style={styles.dropdownItem}>
            <Ionicons name="list-outline" size={16} color="#808080" style={styles.dropdownItemIcon} />
            <Text style={styles.dropdownItemText}>List</Text>
          </TouchableOpacity>
        </View>
      )}


      <ScrollView style={styles.projectsList} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {projects.map(project => (
            <TouchableOpacity key={project.id} style={styles.projectItem} onPress={() => navigateToProject(project.name)}>
              <Image source={project.image} style={styles.projectImage} />
            </TouchableOpacity>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    backgroundColor: '#F0F8FF',
  },
  dropdownIcon: {
    marginRight: 5,
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
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    elevation: 3,
    zIndex: 1000,
    width: '90%',
    maxHeight: 100,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  dropdownItemIcon: {
    marginRight: 10,
  },
  dropdownItemText: {
    fontSize: 14,
    color: '#808080',
  },
  projectsList: {
    flex: 1,
  },
  projectItem: {
    marginBottom: 15,
    alignItems: 'center',
  },
  projectImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  projectName: {
    marginTop: 5,
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
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
