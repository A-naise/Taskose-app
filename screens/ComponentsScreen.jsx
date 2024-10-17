import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function ComponentsScreen({ navigation }) {
  const components = [
    { name: 'Alert', icon: 'notifications-outline', library: 'Ionicons' }, 
    { name: 'Avatar', icon: 'person-circle-outline', library: 'Ionicons' },
    { name: 'Button', icon: 'power-outline', library: 'Ionicons' }, 
    { name: 'Radio Button', icon: 'radio-button-on-outline', library: 'Ionicons' },
    { name: 'Input', icon: 'enter-outline', library: 'Ionicons' },
    { name: 'Badge', icon: 'checkmark-done-outline', library: 'Ionicons' }, 
    { name: 'Button Group', icon: 'list-outline', library: 'Ionicons' },
    { name: 'Card', icon: 'card-outline', library: 'Ionicons' },
    { name: 'Charts', icon: 'bar-chart-outline', library: 'Ionicons' },
    { name: 'Dropdown', icon: 'chevron-down-circle-outline', library: 'Ionicons' }, 
    { name: 'Timeline', icon: 'time-outline', library: 'Ionicons' },
    { name: 'List Group', icon: 'list-outline', library: 'Ionicons' },
    { name: 'Modal', icon: 'cube-outline', library: 'Ionicons' },
    { name: 'Progressbar', icon: 'speedometer-outline', library: 'Ionicons' },
    { name: 'Typography', icon: 'text-outline', library: 'Ionicons' },
    { name: 'Toast', icon: 'bread-slice', library: 'FontAwesome5' }, 
    { name: 'Treeview', icon: 'git-pull-request-outline', library: 'Ionicons' }, 
    { name: 'Switch', icon: 'toggle-outline', library: 'Ionicons' },
    { name: 'Stepper', icon: 'add-circle-outline', library: 'Ionicons' },
    { name: 'Spinner', icon: 'refresh-outline', library: 'Ionicons' },
    { name: 'Range Slider', icon: 'sliders-h', library: 'FontAwesome5' }, 
    { name: 'Light Gallery', icon: 'images-outline', library: 'Ionicons' },
    { name: 'Divider', icon: 'remove-outline', library: 'Ionicons' },
    { name: 'Language', icon: 'globe-outline', library: 'Ionicons' },
  ];

  const renderIcon = (iconName, library) => {
    switch (library) {
      case 'Ionicons':
        return <Ionicons name={iconName} size={24} color="#D3D3D3" style={styles.componentIcon} />;
      case 'MaterialIcons':
        return <MaterialIcons name={iconName} size={24} color="#D3D3D3" style={styles.componentIcon} />;
      case 'FontAwesome5':
        return <FontAwesome5 name={iconName} size={20} color="#D3D3D3" style={styles.componentIcon} />;
      default:
        return <Ionicons name="help-outline" size={24} color="#D3D3D3" style={styles.componentIcon} />;
    }
  };

  return (
    <View style={styles.container}>
      

      <ScrollView style={styles.componentsList} showsVerticalScrollIndicator={false}>
        {components.map((component, index) => (
          <TouchableOpacity key={index} style={styles.componentItem} accessibilityLabel={component.name}>
            {renderIcon(component.icon, component.library)}
            <Text style={styles.componentText}>{component.name}</Text>
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
      backButton: {
        marginRight: 10,
      },
      headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
      },
      horizontalLine: {
        height: 1,
        backgroundColor: '#ccc',
        marginBottom: 20,
      },
      componentsList: {
        flex: 1,
      },
      componentItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
      },
      componentIcon: {
        marginRight: 15,
        width: 24,
        textAlign: 'center',
      },
      componentText: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
      },
});
