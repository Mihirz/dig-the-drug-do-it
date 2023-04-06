import React from 'react';
import {Text, StyleSheet, Button, View, ScrollView} from 'react-native';
const SignIn = () => {
    return (
        <View style = {styles.mainView}>

            <Text style = {styles.textStyle}>Sign In</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    mainView: {
      marginTop: 40,
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    },
    textStyle: {
      color:'#000'
    }
  })

export default SignIn