import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import GifScreen from './gifScreen';
import Sticker from "./stickerScreen";
import RandomGif from "./gifRandomScreen";
import Sticker2 from "./stickerScreen2";
import Sticker3 from "./stickerScreen3";
import HomeScreen from "./homeScreen";

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none' initialRouteName="Homescreen">
            <RootStack.Screen name="Homescreen" component={HomeScreen} />
            <RootStack.Screen name="Gif" component={GifScreen} /> 
            <RootStack.Screen name="Sticker" component={Sticker} /> 
            <RootStack.Screen name="Randomgif" component={RandomGif} />  
            <RootStack.Screen name="kids" component={Sticker2} />
            <RootStack.Screen name="adult" component={Sticker3} />
         
    </RootStack.Navigator>
);

export default RootStackScreen;