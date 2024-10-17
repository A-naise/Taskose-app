import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DetailsScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }} showsVerticalScrollIndicator={false}>
        <View className="flex-1 p-5">
          <View className="flex-row items-center justify-between mt-8 mb-5">
            <TouchableOpacity onPress={() => navigation.goBack()} accessibilityLabel="Back">
              <Ionicons name="arrow-back-outline" size={24} color="#333" />
            </TouchableOpacity>
            <Text className="text-lg font-bold text-gray-800">NFT Landing Page</Text>
            <View className="flex-row items-center">
              <TouchableOpacity onPress={() => navigation.navigate('Home')} accessibilityLabel="Home">
                <Ionicons name="home-outline" size={24} color="#333" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log("Download pressed")} accessibilityLabel="Download" className="ml-4">
                <Ionicons name="download-outline" size={24} color="#333" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log("More options pressed")} accessibilityLabel="More Options" className="ml-4">
                <Ionicons name="ellipsis-horizontal" size={24} color="#333" />
              </TouchableOpacity>
            </View>
          </View>

          <Image source={require('../assets/game.png')} className="w-full h-52 rounded-lg object-cover mb-5" />

          <View className="mb-5">
            <Text className="text-lg font-bold text-gray-800">Description</Text>
            <Text className="text-base text-gray-800 mt-1">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor amet sint. Velit officia consequat duis non deserunt enim velit mollit. Do Exercitation veniam min...
              <Text className="text-blue-600"> See Details</Text>
            </Text>
          </View>

          <View className="flex-row items-center mb-5">
            <Ionicons name="people-outline" size={24} color="#333" />
            <Text className="font-bold text-gray-800 ml-2">Team</Text>
            <View className="flex-row ml-2">
              <Image source={require('../assets/team.png')} className="w-40 h-6" />
              <Ionicons name="add-circle-outline" size={20} color="#1e90ff" className="ml-3" />
            </View>
          </View>

          <View className="flex-row items-center mb-5">
            <Ionicons name="person-outline" size={24} color="#333" />
            <Text className="font-bold text-gray-800 ml-2">Leader</Text>
            <Image source={require('../assets/rafi.png')} className="w-10 h-10 rounded-full ml-5" />
            <Text className="ml-2 text-gray-800">Rafi Islam Apon (you)</Text>
          </View>

          <View className="flex-row items-center mb-5">
            <Ionicons name="checkmark-circle-outline" size={24} color="#333" />
            <Text className="font-bold text-gray-800 ml-2">Status</Text>
            <TouchableOpacity className="bg-[#FF007F] rounded-full py-1 px-4 ml-3">
              <Text className="text-white font-bold text-xs">To Do</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center mb-5">
            <Ionicons name="calendar-outline" size={24} color="#333" />
            <Text className="font-bold text-gray-800 ml-2">Due Date</Text>
            <Text className="ml-5 text-gray-800">Dec 27, 2024</Text>
          </View>

          <View className="flex-row items-center mb-5">
            <Ionicons name="attach-outline" size={24} color="#333" />
            <Text className="font-bold text-gray-800 ml-2">Attachment</Text>
            <View className="flex-row items-center ml-5">
              <Text className="text-gray-800 mr-2">References.pdf</Text>
              <TouchableOpacity className="bg-[#1e90ff] flex-row items-center rounded-full py-1 px-2">
                <Ionicons name="add-circle-outline" size={15} color="#fff" />
                <Text className="text-white text-xs ml-1">Add</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity className="bg-gray-200 py-3 rounded-full mb-8">
            <Text className="text-blue-600 text-center text-base">Add Custom Section</Text>
          </TouchableOpacity>

          <Text className="text-lg font-bold text-gray-800 mb-3">Sub Task (3)</Text>
          <View className="mb-5">
            {["Define Problem with Client", "Create Wireframe and User Flow", "Project set up & Brief"].map((task, index) => (
              <View key={index} className="flex-row items-center bg-gray-100 py-2 px-4 rounded-lg mb-2">
                <View className={`w-1 h-10 ${index === 0 ? 'bg-green-500' : 'bg-gray-300'} rounded-lg mr-2`} />
                <Text className="text-gray-800 flex-1">{task}</Text>
                <Ionicons name={index === 0 ? "checkmark-circle" : "ellipse-outline"} size={24} color={index === 0 ? "green" : "#ccc"} />
              </View>
            ))}
          </View>

          <TouchableOpacity className="bg-[#1e90ff] flex-row items-center rounded-full py-3 justify-center">
            <Ionicons name="add-circle-outline" size={24} color="#fff" />
            <Text className="text-white ml-2">Add New Sub Task</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
