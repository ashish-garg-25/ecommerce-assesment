import { StyleSheet } from "react-native";
import Scale from "../component/Scale";

const componentStyle = StyleSheet.create({
   headerContainer: {
      height: Scale(50),
      width: '100%',
      backgroundColor: 'white',
      borderBottomWidth: 0.6,
      borderColor: 'lightgray',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: Scale(10)
   },
   countStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      height: Scale(50),
   },
   buttonStyle: {
      borderWidth: 0.7,
      borderColor: '#000',
      backgroundColor: '#FFF',
      borderRadius: 15,
      height: Scale(35),
      width: Scale(160),
      alignItems: 'center',
      marginTop: 10,
      flexDirection:'row'
   },
   productStyle: {
      height: Scale(420),
      width: Scale(180),
      margin: Scale(12),
      backgroundColor: 'white',
      elevation: 1,
      borderRadius: 10
   },
   imageStyle: {
      height: Scale(250),
      width: Scale(180),
      borderRadius: 10,
      justifyContent: 'space-between',
      paddingVertical: 20
   },
   heartStyle: {
      alignSelf: 'flex-end',
      marginRight: 10,
   },
   switchStyle: {
      alignSelf: 'flex-start',
      borderColor: 'red',
      width: Scale(70),
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderRightWidth: 1,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      height: Scale(23),
      justifyContent: 'center',
   },
   imageText: {
      fontSize: 10,
      fontWeight: 'bold',
      color: '#E60028',
      opacity: 1,
      textAlign: 'right'
   },
   priceTag : {
      flexDirection: 'row', 
      alignItems: 'center', 
      padding: 0, 
      marginTop: 5,
   },
   minPriceTag : { 
      color: '#E60028', 
      fontSize: 12, 
      fontWeight: '700' 
   },
   currencyTag : { 
      textDecorationLine: 'line-through', 
      color: '#000', 
      fontSize: 12, 
      left: 5 
   },
   extraOff : {
      backgroundColor:'#000', 
      height:Scale(30), 
      width:Scale(150), 
      alignItems:'center', 
      borderRadius:5,
      marginTop:5,
      flexDirection:'row',
      justifyContent:'space-evenly'
   },
   extraText : { 
      fontSize: 8, 
      color:'#ffd504',
      fontWeight:'bold'
   },
   titleText : { 
      fontSize: 10, 
      color: 'black' 
   },
   buttonText : {
      color:'#000', 
      fontWeight:'bold', 
      fontSize:15,
      marginLeft:10
   },
   headerStyle : {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:'30%',
   },
   countStyle1 : {
      height:15,
      width:15,
      borderRadius:10,
      backgroundColor:'red',
      position:'absolute',
      justifyContent:'center',
      alignItems:'center',
      left:13,
      top:10
   }
})

export { componentStyle }