import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, SafeAreaView,Image,Text,ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function App({ navigation }) {

  const navigateToNotifications = () => {
    navigation.navigate('Notification'); 
  };

  const navigateToViewAllProjects = () => {
    navigation.navigate('View'); 
  };

  return (
    <SafeAreaView style={styles.container} className="bg-[#1e90ff]">
      
      <View style={styles.header} className="mt-[35px] p-4">
        <View style={styles.profileGroup}>
          <Image
            source={require('../assets/jenn.png')}
            style={styles.profileImage}
          />
          <View style={styles.greetingContainer}>
            <Text className="font-bold text-[13px] text-white ml-[10px]">Jennifer Lyine</Text>
            <Text className="font-thin text-[13px] text-white ml-[10px]"> Hi Jennifer, Good Morning</Text>
          </View>
        </View>

        <TouchableOpacity className="ml-[50px]" onPress={() => navigation.navigate('Menu')} accessibilityLabel="Menu">
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToNotifications} accessibilityLabel="Notifications" >
          <Ionicons name="notifications" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer} className="mt-[10px] w-[80%] ml-[20px] border border-gray-400 " >
        <Ionicons name="search" size={20} color="white" style={styles.searchIcon}   />
        <TextInput
          placeholder="Find your task"
          placeholderTextColor="white"
          style={styles.searchInput}
          className="font-thin"
        />
      </View>

      <View style={styles.projectsSection} className="w-full rounded-t-lg " >
        <View style={styles.projectsHeader}>
          <Text style={styles.projectsText}>Recent Projects</Text>
          <TouchableOpacity onPress={navigateToViewAllProjects} accessibilityLabel="View All Projects" >
            <Text style={styles.viewAllText} className="text-gray-400 font-bold">View All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="mt-4">
        
        <TouchableOpacity style={styles.projectCard} onPress={() => navigation.navigate('Game')} accessibilityLabel="Game" >
          <Image
            source={require('../assets/game.png')} 
            style={styles.projectImage}
          />
      
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.projectCard} onPress={() => navigation.navigate('Furniture')} accessibilityLabel="Furniture" >
          <Image
            source={require('../assets/furnite.png')} 
            style={styles.projectImage}
          />
          
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.tasksSection} className="mb-[80px]">
          <View style={styles.tasksHeader}>
            <Text style={styles.tasksText}>Today's Tasks</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText} className="text-gray-400 font-bold">View All</Text>
            </TouchableOpacity>
          </View>
   
          <TouchableOpacity style={styles.taskCard}>
            <Image
              source={require('../assets/calendar.png')} 
              style={styles.taskImage}
            />
          </TouchableOpacity>
        </View>



      
      <View style={styles.bottomBar}>
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color="#333"  />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="create-outline" size={24} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.plusButton} className="ml-[120px] mb-[15px]">
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

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center'
 
  }, profileGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 44,
    height: 45,
    borderRadius: 20, 
  
  },
  greetingContainer: {
    flexDirection: 'column',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,

  },
  searchIcon: {
    marginRight: 10, 
  },
  searchInput: {
    flex: 1, 
    fontSize: 13,
    color: '#000',
  },
  projectsSection: {
    backgroundColor: '#fff',
    flex: 1,  
    marginTop: 30,
    padding: 15,
    width: '100%',  
    alignSelf: 'stretch',  
  },
  projectsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  projectsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  viewAllText: {
    fontSize: 16,
   
  },
  projectCard: {
    width: 440,
    height: 270,
    marginRight: 12,
    backgroundColor: '#f9f9f9',
  },
  projectImage: {
    width: 440,
    height: 270,
    resizeMode: 'cover',  
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
    bottom: 15, 
    alignSelf: 'center',
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  tasksSection: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    alignSelf: 'stretch',
  },
  tasksHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
   tasksText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  taskCard: {
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  taskImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
});
