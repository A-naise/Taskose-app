import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function PagesScreen({ navigation }) {
  const pages = [
    'Boarding 01',
    'Boarding 02',
    'Boarding 03',
    'Sign In',
    'Sign Up',
    'Sign Up Verify Code Email',
    'Sign Up Verify Phone',
    'Successfully',
    'Forgot Pass',
    'Forgot Pass With Mail',
    'Forgot Pass With Phone',
    'Verify Code',
    'Create New Password',
    'Successfully 02',
    'My Task',
    'My Task Calendar View',
    'Empty Task',
    'My Project (Board View)',
    'My Project (List View)',
    'Task Detail Calendar',
    'Project Details',
    'Create New Task',
    'Add Task',
    'Share Task',
    'Invite Colleagues',
    'Select Role',
    'Empty Notification',
    'Empty Inbox',
    'New Message',
    'Detail Message',
    'Chat Contact',
    'Chat Details',
    'Profile',
    'Edit Profile',
    'Help Search',
    'Help Search Result',
  ];

  return (
    <View style={styles.container}>

      <ScrollView style={styles.pagesList} showsVerticalScrollIndicator={false}>
        {pages.map((page, index) => (
          <TouchableOpacity key={index} style={styles.pageItem} accessibilityLabel={page}>
            <Text style={styles.pageText}>{page}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

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
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#ccc',
    marginBottom: 20,
  },
  pagesList: {
    flex: 1,
  },
  pageItem: {
    paddingVertical: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  pageText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
});
