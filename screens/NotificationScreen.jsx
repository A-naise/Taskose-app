import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';
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
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 p-5 mt-10">
        <View className="flex-row items-center justify-between mb-5">
          <TouchableOpacity onPress={() => navigation.goBack()} accessibilityLabel="Back">
            <Ionicons name="arrow-back-outline" size={24} color="#333" />
          </TouchableOpacity>
          <Text className="text-lg font-bold text-gray-800">Notifications</Text>
          <Ionicons name="search-outline" size={24} color="#333" />
        </View>

        <View className="flex-row items-center justify-between mb-2">
          <TouchableOpacity 
            className="flex-row items-center border border-gray-300 rounded-md px-3 py-2 bg-[#F0F8FF]" 
            onPress={toggleFilterDropdown} 
            accessibilityLabel="Filter Dropdown"
          >
            <Text className="text-gray-600">{selectedFilter}</Text>
            <Ionicons name={filterVisible ? "chevron-up" : "chevron-down"} size={16} color="#808080" />
          </TouchableOpacity>

          <TouchableOpacity 
            className="flex-row items-center border border-gray-300 rounded-md px-3 py-2 bg-[#F0F8FF] ml-3" 
            onPress={() => console.log("Filter button pressed")} 
            accessibilityLabel="Filter"
          >
            <Ionicons name="filter-outline" size={16} color="#808080" />
            <Text className="text-gray-600 ml-1">Filter</Text>
          </TouchableOpacity>
        </View>

        {filterVisible && (
          <View className="absolute top-20 left-5 bg-[#F0F8FF] border border-gray-300 rounded-md w-4/5 max-h-30 z-50">
            <TouchableOpacity onPress={() => handleFilterSelect("All")} className="px-4 py-2">
              <Text className="text-gray-600">All</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleFilterSelect("Unread")} className="px-4 py-2">
              <Text className="text-gray-600">Unread</Text>
            </TouchableOpacity>
          </View>
        )}

        <ScrollView contentContainerStyle={{ paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
          <View className="flex-row justify-between items-center mt-3 mb-2">
            <Text className="text-lg font-bold text-gray-800">Unread</Text>
            <TouchableOpacity accessibilityLabel="More options for Unread">
              <Ionicons name="ellipsis-horizontal" size={20} color="#333" />
            </TouchableOpacity>
          </View>

          {notifications.slice(0, 2).map(notification => (
            <View key={notification.id} className="flex-row items-center py-4 border-b border-gray-200">
              <Image source={notification.profileImage} className="w-10 h-10 rounded-full mr-3" />
              <View className="flex-1">
                <Text className="text-gray-800">
                  <Text className="font-bold">{notification.name} </Text>
                  {notification.message}
                </Text>
                <Text className="text-gray-500 text-sm mt-1">{notification.time}</Text>
              </View>
            </View>
          ))}

          <View className="h-px bg-gray-200 my-4" />

          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-lg font-bold text-gray-800">Yesterday</Text>
            <TouchableOpacity>
              <Ionicons name="ellipsis-horizontal" size={20} color="#333" />
            </TouchableOpacity>
          </View>

          {notifications.slice(2).map(notification => (
            <View key={notification.id} className="flex-row items-center py-4 border-b border-gray-200">
              <Image source={notification.profileImage} className="w-10 h-10 rounded-full mr-3" />
              <View className="flex-1">
                <Text className="text-gray-800">
                  <Text className="font-bold">{notification.name} </Text>
                  {notification.message}
                </Text>
                <Text className="text-gray-500 text-sm mt-1">{notification.time}</Text>
              </View>
            </View>
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
    </SafeAreaView>
  );
}
