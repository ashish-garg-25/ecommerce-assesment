import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { componentStyle } from "../globalStyle/ComponentStyling";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HeaderComponent = ({ count, switchs, languageSwitch, totalProduct }) => {
   return (
      <View style={[componentStyle.headerContainer]}>
         <View style={[componentStyle.countStyle]}>
            <AntDesign name="arrowleft" size={24} color="black" />
            <View style={{ marginLeft: 10 }}>
               <Text>Women</Text>
               <Text>{totalProduct || 16}</Text>
            </View>
         </View>
         <View style={[componentStyle.headerStyle]}>
            <AntDesign name="search1" size={24} color="black" />
            {
               switchs ?
                  <Text
                     onPress={() => {
                        languageSwitch()
                     }}
                  >
                     Ar
                  </Text>
                  :
                  <Text
                     onPress={() => {
                        languageSwitch()
                     }}
                  >
                     En
                  </Text>
            }
            {/* <MaterialCommunityIcons onPress={languageSwitch} name={switchs ? "toggle-switch-off":"toggle-switch"} size={30} color="black" /> */}
            <View>
               <AntDesign name="shoppingcart" size={24} color="black" />
               <View style={[componentStyle.countStyle1]}>
                  <Text style={{ fontSize: 8 }}>{count}</Text>
               </View>
            </View>
         </View>
      </View>
   )
}

export default HeaderComponent