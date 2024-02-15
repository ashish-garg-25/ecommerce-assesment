// import React from "react";
// import { TouchableOpacity, View, StyleSheet, Text ,Animated} from "react-native";
// import Scale from "./Scale";
// import { componentStyle } from "../globalStyle/ComponentStyling";
// import { AntDesign } from '@expo/vector-icons';

// const ButtonComponent = ({onPressbag,switchs}) => {

//     return(
//         <TouchableOpacity onPress={onPressbag} style={[componentStyle.buttonStyle]}>
//              <AntDesign style={{marginLeft:5}} name="shoppingcart" size={24} color="black" />
//             <Text style={[componentStyle.buttonText]}>{switchs ? "ADD TO BAG":"أضف الى الحقيبة"} </Text>
//         </TouchableOpacity>
//     )
// }
// export default ButtonComponent;
import { Feather } from '@expo/vector-icons';
import { MotiView, motify, MotiText, AnimatePresence, useAnimationState } from 'moti';
import React, { useEffect, useState } from 'react'
import { View, Text, useWindowDimensions, Pressable, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import Scale from './Scale';
import { componentStyle } from '../globalStyle/ComponentStyling';
const MotiIcon = motify(Feather)();
const MotiFAIcon = motify(FontAwesome5)();
const ButtonComponent = ({onPressbag,switchs}) => {
    const { height, width } = useWindowDimensions();
    const [start, setStart] = useState(false);
    return (
        <TouchableOpacity onPress={()=>{console.log("sdhgdshgs")}} style={{ height: Scale(50), width: Scale(170), }}>
            <Pressable
                style={{ alignItems: 'center' }}
                onPress={() => {
                    setStart(s => !s)
                    onPressbag()
                }}
                >
                <AnimatePresence >
                    {start && <ProductIcon setStart={setStart} start={start} key="product" />}
                </AnimatePresence>
                <MotiView
                    animate={{ backgroundColor: start ? '#907FA4' : 'white' }}
                    transition={{ type: 'timing', duration: 300 }}
                    key="button"
                    style={[componentStyle.buttonStyle]}
                >
                    <CartIcon setStart={setStart} start={start} key="cart-icon" />
                    <AnimatePresence exitBeforeEnter>
                        {!start && <Label key="label" 
                           switchs={switchs}
                        />}
                    </AnimatePresence>
                </MotiView>

            </Pressable>
        </TouchableOpacity>

    )
}
const CartIcon = ({ start, setStart }) => {
    useEffect(() => {
        if (start == false) {
            scaleIn.transitionTo('animate')
        } else {
            setTimeout(() => {
                scaleIn.transitionTo('middle')
                setTimeout(() => {
                    scaleIn.transitionTo('exit')
                    setTimeout(() => {
                        setStart(false)
                    }, 500);

                }, 800);
            }, 500);
        }
        return () => {
        }
    }, [start])
    const scaleIn = useAnimationState({
        from: {
            scale: [0, 1],
            translateX: 10,
            opacity: [0, 1]
        },
        animate: {
            scale: 1,
            translateX: 0, opacity: [0.8, 1],
            color: '#fff'
        },
        middle: {
            scale: [1.9, 1, 1.9],

            rotate: '15 deg',
            translateX: 100, opacity: 1,
            color: '#21094E'
        },
        exit: {
            scale: [0.8, 0],

            translateX: 100,
            opacity: 0,
            color: '#000'
        },
    })
    return <MotiIcon

        transition={{
            type: 'timing',
            duration: 500

        }}

        state={scaleIn}
   //name='shopping-cart' size={20} color="green" 
    />
}
const ProductIcon = ({ start, setStart }) => {
    return <MotiFAIcon
        from={{ translateY: -50, opacity: 0 }}

        animate={{
            scale: [0.8, 1],
            translateY: [-50, 30],
            opacity: 1,

        }}

        transition={{
            type: 'timing',
            duration: 500

        }}

        style={{
            color: '#0A1931'
        }}
        name='tshirt' size={15} />
}
const Label = ({switchs}) => {
    return <MotiText
        transition={{
            type: 'timing',
        }}
        from={{ translateX: -50, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        exit={{ translateX: 50, opacity: 0 }}
        style={{ color: 'black',  fontSize: 10,marginHorizontal:Scale(45), }}>{switchs ? "ADD TO BAG":"أضف الى الحقيبة"}</MotiText>
}
export default ButtonComponent
