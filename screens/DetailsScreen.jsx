import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DetailsScreen({ navigation }) {

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} accessibilityLabel="Back">
              <Ionicons name="arrow-back-outline" size={24} color="#333" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>NFT Landing Page</Text>
            <View style={styles.rightIcons}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')} accessibilityLabel="Home">
                <Ionicons name="home-outline" size={24} color="#333" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log("Download pressed")} accessibilityLabel="Download" style={styles.iconButton}>
                <Ionicons name="download-outline" size={24} color="#333" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log("More options pressed")} accessibilityLabel="More Options" style={styles.iconButton}>
                <Ionicons name="ellipsis-horizontal" size={24} color="#333" />
              </TouchableOpacity>
            </View>
          </View>

          <Image source={require('../assets/game.png')} style={styles.projectImage} />

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor amet sint. Velit officia consequat duis non deserunt enim velit mollit. Do Exercitation veniam min...
              <Text style={styles.seeDetailsText}> See Details</Text>
            </Text>
          </View>

          <View style={styles.row}>
        <Ionicons name="people-outline" size={24} color="#333" />
        <Text style={styles.label}>Team</Text>
        <View style={styles.avatars}>
          <Image  source={require('../assets/team.png')} className="w-[160px] h-[25px] ml-[60px]"/>
          <Ionicons name="add-circle-outline" size={20} color="blue"  className="ml-[15px]"/>
     
        </View>
      </View>

    
      <View style={styles.row}>
        <Ionicons name="person-outline" size={24} color="#333" />
        <Text style={styles.label}>Leader</Text>
        <Image style={styles.leaderAvatar} source={require('../assets/rafi.png')}  />
        <Text style={styles.leaderName}>Rafi Islam Apon (you)</Text>
      </View>

     
      <View style={styles.row}>
        <Ionicons name="checkmark-circle-outline" size={24} color="#333" />
        <Text style={styles.label}>Status</Text>
        <TouchableOpacity style={styles.statusButton} className="bg-[#FF007F]">
          <Text style={styles.statusText}>To Do</Text>
        </TouchableOpacity>
      </View>

    
      <View style={styles.row}>
        <Ionicons name="calendar-outline" size={24} color="#333" />
        <Text style={styles.label}>Due Date</Text>
        <Text style={styles.dueDate}>Dec 27, 2024</Text>
      </View>

 
      <View style={styles.row}>
        <Ionicons name="attach-outline" size={24} color="#333" />
        <Text style={styles.label}>Attachment</Text>
        <View style={styles.attachmentContainer}>
          <Text style={styles.attachmentText}>References.pdf</Text>
          <TouchableOpacity style={styles.addAttachmentButton}>
            <Ionicons name="add-circle-outline" size={15} color="#fff" />
            <Text style={styles.addAttachmentText} className="ml-[5px]">Add</Text>
          </TouchableOpacity>
        </View>
      </View>


      <TouchableOpacity style={styles.customSectionButton}>
        <Text style={styles.customSectionText}>Add Custom Section</Text>
      </TouchableOpacity>

     
      <Text style={styles.subtaskHeader}>Sub Task (3)</Text>
      <View style={styles.subtasksContainer}>
        <View style={styles.subtaskItem}>
          <View style={styles.subtaskIndicatorCompleted} />
          <Text style={styles.subtaskText}>Define Problem with Client</Text>
          <Ionicons name="checkmark-circle" size={24} color="green" />
        </View>
        <View style={styles.subtaskItem}>
          <View style={styles.subtaskIndicatorPending} />
          <Text style={styles.subtaskText}>Create Wireframe and User Flow</Text>
          <Ionicons name="ellipse-outline" size={24} color="#ccc" />
        </View>
        <View style={styles.subtaskItem}>
          <View style={styles.subtaskIndicatorPending} />
          <Text style={styles.subtaskText}>Project set up & Brief</Text>
          <Ionicons name="ellipse-outline" size={24} color="#ccc" />
        </View>
      </View>

   
      <TouchableOpacity style={styles.addSubtaskButton}>
        <Ionicons name="add-circle-outline" size={24} color="#fff" />
        <Text style={styles.addSubtaskText}>Add New Sub Task</Text>
      </TouchableOpacity>



         </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 80, 
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 15,
  },
  projectImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  descriptionText: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  seeDetailsText: {
    color: '#1e90ff',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionLabel: {
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  avatars: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
  leaderAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 60,
  },
  leaderName: {
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
  },
  statusButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft: 70,
  },
  statusText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  dueDate: {
    marginLeft: 60,
    fontSize: 14,
    color: '#333',
  },
  attachmentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 40,
  },
  attachmentText: {
    fontSize: 14,
    color: '#333',
    marginRight: 10,
  },
  addAttachmentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e90ff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  addAttachmentText: {
    color: '#fff',
    fontSize: 12,
  },
  customSectionButton: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 30,
  },
  customSectionText: {
    color: 'blue',
    fontSize: 14,
  },
  subtaskHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  subtasksContainer: {
    marginBottom: 20,
  },
  subtaskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  subtaskIndicatorCompleted: {
    width: 5,
    height: 40,
    backgroundColor: 'green',
    borderRadius: 5,
    marginRight: 10,
  },
  subtaskIndicatorPending: {
    width: 5,
    height: 40,
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
  },
  subtaskText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  addSubtaskButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'blue',
    paddingVertical: 15,
    borderRadius: 20,
    justifyContent: 'center',
  },
  addSubtaskText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
 


});
