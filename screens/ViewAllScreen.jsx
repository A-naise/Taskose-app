import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
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
    <View className="flex-1 bg-white mt-10 p-5">
      <View className="flex-row items-center justify-between mb-5">
        <TouchableOpacity onPress={() => navigation.goBack()} accessibilityLabel="Back">
          <Ionicons name="arrow-back-outline" size={24} color="#333" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-gray-800">My Projects</Text>
        <Ionicons name="search-outline" size={24} color="#333" />
      </View>

      <View className="flex-row items-center justify-between mb-2">
        <TouchableOpacity className="flex-row items-center border border-gray-300 rounded-md p-2 flex-1 mr-2 bg-blue-50" onPress={toggleFilterDropdown} accessibilityLabel="Filter Dropdown">
          <Ionicons name="grid-outline" size={16} color="#808080" className="mr-1" />
          <Text className="text-sm text-gray-500 flex-1">{selectedFilter}</Text>
          <Ionicons name={filterVisible ? "chevron-up" : "chevron-down"} size={16} color="#808080" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center bg-blue-50 p-2 rounded-md" onPress={() => console.log("Filter button pressed")} accessibilityLabel="Filter">
          <Ionicons name="filter-outline" size={16} color="#808080" />
          <Text className="text-sm text-gray-500 ml-1">Filter</Text>
        </TouchableOpacity>
      </View>

      {filterVisible && (
        <View className="absolute top-20 left-5 bg-white border border-gray-300 rounded-md shadow-lg z-10 w-11/12 max-h-24">
          <TouchableOpacity onPress={() => handleFilterSelect("Board")} className="flex-row items-center p-3">
            <Ionicons name="grid-outline" size={16} color="#808080" className="mr-2" />
            <Text className="text-sm text-gray-500">Board</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleFilterSelect("List")} className="flex-row items-center p-3">
            <Ionicons name="list-outline" size={16} color="#808080" className="mr-2" />
            <Text className="text-sm text-gray-500">List</Text>
          </TouchableOpacity>
        </View>
      )}

      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 60 }} showsVerticalScrollIndicator={false}>
        {projects.map(project => (
          <TouchableOpacity key={project.id} className="mb-3 items-center" onPress={() => navigateToProject(project.name)}>
            <Image source={project.image} className="w-full h-52 rounded-lg object-cover" />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 h-[60px] bg-white flex-row justify-around items-center shadow-md">
          <TouchableOpacity>
            <Ionicons name="menu" size={24} color="#333" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="create-outline" size={24} color="#333" />
          </TouchableOpacity>

          <TouchableOpacity className="w-[60px] h-[60px] rounded-full bg-[#1e90ff] flex items-center justify-center">
            <Ionicons name="add" size={32} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="chatbubble-ellipses-outline" size={24} color="#333" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="person-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
    </View>
  );
}
