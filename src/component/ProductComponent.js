import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity, ImageBackground } from "react-native";
import Scale from "./Scale";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import ButtonComponent from "./ButtonComponent";
import { componentStyle } from "../globalStyle/ComponentStyling";

const ProductComponent = ({ onPress, item,onPressbag,switchs }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[componentStyle.productStyle]}>
            <ImageBackground
                source={{ uri: item.images[1] }}
                style={[componentStyle.imageStyle]}
                resizeMode="stretch"
            >
                <AntDesign style={[componentStyle.heartStyle]} name="hearto" size={24} color="black" />
                <View style={[componentStyle.switchStyle,{ alignItems: switchs ? 'flex-start':'flex-end' }]}>
                    <Text style={[componentStyle.imageText]}> {switchs?"51 % OFF":"خصم 51%"}</Text>
                </View>
            </ImageBackground>
            <View style={{ padding: 10 }}>
               <View style={{height:Scale(30)}}>
                 <Text style={[componentStyle.titleText]}>{item.title}</Text>
               </View>
                <View style={[componentStyle.priceTag,{justifyContent:switchs ? "flex-start" :'flex-end' }]}>
                    <Text style={[componentStyle.minPriceTag]}>{item.currency} {item.price_min} </Text>
                    <Text style={[componentStyle.currencyTag]}>{item.currency} {item.compare_at_price_min}</Text>
                </View>
                <View style={[componentStyle.extraOff]}>
                    {switchs == true && ( <Ionicons name="pricetag" size={15} color="#ffd504" />)}
                    <Text style={[componentStyle.extraText]}> {switchs?"EXTRA 50%OFF, Code:SD50":" خصم 50% إضافي، الكود:SD50 "}</Text>
                    {switchs == false && ( <Ionicons name="pricetag" size={15} color="#ffd504" />)}
                </View>
                <ButtonComponent
                   onPressbag={onPressbag}
                   switchs={switchs}
                />
            </View>
        </TouchableOpacity>
    )
}

export default ProductComponent