import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MenuScreen({ navigation }) {
  const [isHomeExpanded, setIsHomeExpanded] = useState(false);

  const toggleHomeMenu = () => {
    setIsHomeExpanded(!isHomeExpanded);
  };

  return (
    <View className="flex-1 bg-white">
    
      <View className="items-center">
        <Image
          source={require('../assets/logo.png')}
          className="w-full h-[110px] mb-5"
        />
     
        <View className="flex-row items-center mr-[110px]">
          <Image
            source={require('../assets/jenn.png')}
            className="w-[60px] h-[60px] rounded-full"
          />
          <View className="ml-3">
            <Text className="text-[16px] text-[#D3D3D3]">Good morning</Text>
            <Text className="text-[18px] font-bold text-[#333]">Jennifer Lyine</Text>
          </View>
        </View>
      </View>

      <View className="h-[1px] bg-[#ccc] my-5" />

      <Text className="text-[18px] font-bold text-[#D3D3D3] ml-3">MAIN MENU</Text>

      <ScrollView className="flex-1 ml-3" showsVerticalScrollIndicator={false}>
        <TouchableOpacity className="flex-row justify-between items-center py-4 border-b border-[#eee]" onPress={toggleHomeMenu} accessibilityLabel="Home">
          <View className="flex-row items-center">
            <Ionicons name="home-outline" size={24} color="#D3D3D3" />
            <Text className="text-[15px] font-bold text-[#333] ml-3">Home</Text>
          </View>
          <Ionicons 
            name={isHomeExpanded ? "chevron-down" : "chevron-forward-outline"} 
            size={20} 
            color="#333" 
          />
        </TouchableOpacity>
        
        {isHomeExpanded && (
          <View className="pl-12 bg-[#f9f9f9]">
            <TouchableOpacity className="py-2">
              <Text className="text-[14px] text-[#666]">Home 01</Text>
            </TouchableOpacity>
            <TouchableOpacity className="py-2">
              <Text className="text-[14px] text-[#666]">Home 02</Text>
            </TouchableOpacity>
            <TouchableOpacity className="py-2">
              <Text className="text-[14px] text-[#666]">Home 03</Text>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity className="flex-row justify-between items-center py-4 border-b border-[#eee]" accessibilityLabel="Page">
          <View className="flex-row items-center">
            <Ionicons name="document-outline" size={24} color="#D3D3D3" />
            <Text className="text-[15px] font-bold text-[#333] ml-3">Pages</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={20} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between items-center py-4 border-b border-[#eee]"  accessibilityLabel="Components">
          <View className="flex-row items-center">
            <Ionicons name="construct-outline" size={24} color="#D3D3D3" />
            <Text className="text-[15px] font-bold text-[#333] ml-3">Components</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={20} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between items-center py-4 border-b border-[#eee]" accessibilityLabel="Profile">
          <View className="flex-row items-center">
            <Ionicons name="person-outline" size={24} color="#D3D3D3" />
            <Text className="text-[15px] font-bold text-[#333] ml-3">Profile</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between items-center py-4 border-b border-[#eee]" accessibilityLabel="Chat">
          <View className="flex-row items-center">
            <Ionicons name="chatbubble-ellipses-outline" size={24} color="#D3D3D3" />
            <Text className="text-[15px] font-bold text-[#333] ml-3">Chat</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between items-center py-4 border-b border-[#eee]" accessibilityLabel="Logout">
          <View className="flex-row items-center">
            <Ionicons name="log-out-outline" size={24} color="#D3D3D3" />
            <Text className="text-[15px] font-bold text-[#333] ml-3">Logout</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

    </View>
  );
}
