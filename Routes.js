import React, { Component } from "react";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from "./Screens/Login";
import ChooseLogin from './Screens/chooseTypeLogin';
import HomeTeacher from './Screens/HomeTeacher';
import HomeStudent from './Screens/HomeStudent'
const Project= createStackNavigator({
  ChooseLogin: {
    screen: ChooseLogin,
    
  },
  Login: {
   screen: Login,

  },
  HomeTeacher: {
    screen: HomeTeacher,
    
  },
  HomeStudent: {
    screen: HomeStudent,
  }
  
});
export default createAppContainer(Project);