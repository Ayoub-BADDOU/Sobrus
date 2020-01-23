import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer';


function footer() {
    return (
        <View style={styles.footerCont}>
            <View style={styles.footerLine}></View>
            <View style={styles.footerInfo}>
                <Text>ICE : 5454454545</Text>
                <Text>Tel : 053755554454</Text>
                <Text>Adresse : Merci de votre visite,</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    footerCont:{
        display : "flex",
        position : "absolute",
        bottom : 30,
        left: 0,
        right: 0,
        textAlign: 'center',
    },

    contSection1:{
        marginTop:20,
        fontSize : 12,       
    },

    footerLine: {
        
      marginTop : 20,
      marginBottom : 10,
      marginLeft : "15%",
      marginRight : "15%",
      height :2,
      backgroundColor: "#00beb0",
      width: "70%",
    },
    footerInfo:{
      fontSize:12,
      textAlign: "center"
    }
    });

export default footer;