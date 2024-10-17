import React from 'react';
import { View, TextInput, TouchableOpacity, SafeAreaView, Image, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App({ navigation }) {
  
  const navigateToNotifications = () => {
    navigation.navigate('Notification'); 
  };

  const navigateToViewAllProjects = () => {
    navigation.navigate('View'); 
  };

  return (
    <SafeAreaView className="flex-1 bg-[#1e90ff]">
      
      <View className="flex-row justify-between items-center mt-[35px] p-4">
        <View className="flex-row items-center">
          <Image
            source={require('../assets/jenn.png')}
            className="w-[44px] h-[45px] rounded-full"
          />
          <View className="flex-col">
            <Text className="font-bold text-[13px] text-white ml-[10px]">Jennifer Lyine</Text>
            <Text className="font-thin text-[13px] text-white ml-[10px]"> Hi Jennifer, Good Morning</Text>
          </View>
        </View>

        <TouchableOpacity className="ml-[50px]" onPress={() => navigation.navigate('Menu')} accessibilityLabel="Menu">
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToNotifications} accessibilityLabel="Notifications">
          <Ionicons name="notifications" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      <View className="mt-[10px] w-[80%] ml-[20px] border border-gray-400 flex-row items-center rounded-lg">
        <Ionicons name="search" size={20} color="white" className="mr-2" />
        <TextInput
          placeholder="Find your task"
          placeholderTextColor="white"
          className="flex-1 font-thin text-white"
        />
      </View>

      <View className="bg-white flex-1 mt-7 p-4 rounded-t-lg">
        <View className="flex-row justify-between items-center">
          <Text className="text-[18px] font-bold text-[#333]">Recent Projects</Text>
          <TouchableOpacity onPress={navigateToViewAllProjects} accessibilityLabel="View All Projects">
            <Text className="text-gray-400 font-bold text-[16px]">View All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="mt-4">
          <TouchableOpacity className="w-[440px] h-[270px] mr-3 bg-[#f9f9f9]" onPress={() => navigation.navigate('Game')} accessibilityLabel="Game">
            <Image
              source={require('../assets/game.png')}
              className="w-full h-full object-cover"
            />
          </TouchableOpacity>
          
          <TouchableOpacity className="w-[440px] h-[270px] mr-3 bg-[#f9f9f9]" onPress={() => navigation.navigate('Furniture')} accessibilityLabel="Furniture">
            <Image
              source={require('../assets/furnite.png')}
              className="w-full h-full object-cover"
            />
          </TouchableOpacity>
        </ScrollView>

        <View className="bg-white mb-[80px] rounded-t-lg">
          <View className="flex-row justify-between items-center">
            <Text className="text-[18px] font-bold text-[#333]">Today's Tasks</Text>
            <TouchableOpacity>
              <Text className="text-gray-400 font-bold">View All</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity className="rounded-lg bg-[#f9f9f9]">
            <Image
              source={require('../assets/calendar.png')}
              className="w-full h-[100px] object-cover"
            />
          </TouchableOpacity>
        </View>

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
