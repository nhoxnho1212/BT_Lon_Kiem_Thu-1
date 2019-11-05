import React, { Component } from "react";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from "./Screens/Login";
import ChooseLogin from './Screens/chooseTypeLogin';
import HomeTeacher from './Screens/HomeTeacher';
import HomeStudent from './Screens/HomeStudent';
import MainHomeStudent from './Components/Student/HomeStudent';
import HomeBackStudent from './Components/Student/HomeBackStudent';
import ProfileStudent from './Components/Student/ProfileStudent';
const Project= createStackNavigator({
  ChooseLogin: {
    screen: ChooseLogin,
    
  },
  Login: {
   screen: Login,

  },
  HomeTeacher: {
    screen: HomeTeacher,
    navigationOptions : {
      header: null
    },
    
  },
  HomeStudent: {
    screen: HomeStudent,
    navigationOptions : {
      header: null
    },
  },
  MainHomeStudent: {
    screen: MainHomeStudent,
  },
  HomeBackStudent: {
    screen: HomeBackStudent,
  },
  ProfileStudent: {
    screen:ProfileStudent,
  },
  
});
export default createAppContainer(Project);