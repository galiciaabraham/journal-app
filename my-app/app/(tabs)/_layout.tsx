import { Tabs } from 'expo-router';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
 
export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="NewEntry"
        options={{
          title: 'New Entry',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="new-message" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
