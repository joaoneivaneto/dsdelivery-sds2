
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Header() {
  const navigation = useNavigation();
  const hanbleOnPress = () => {
    navigation.navigate('Home');
  }
  return (
    <TouchableWithoutFeedback onPress={hanbleOnPress}>
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} />
        <Text style={styles.text}>DS Delivery</Text>
      </View>
    </TouchableWithoutFeedback>  
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#DA5C5C',
    height:100,
    paddingTop:50,
    flexDirection:'row',
    justifyContent:'center'
  },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight:30,
        letterSpacing: -0.24,
        color:'#FFFFFF',
        marginLeft:15,
        fontFamily: 'OpenSans_700Bold'
    }
});
