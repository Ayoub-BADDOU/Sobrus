import React from 'react'
import { View, StyleSheet, Text } from '@react-pdf/renderer';

function facture() {
    return (
        <View style={styles.contSection2}>
            <View style={styles.factureCont}>
                <Text style={styles.factureHead}>Facture N° FAC-5052</Text>
                <Text style={styles.factureText}>Date : 23/01/2020</Text>  
            </View>
            <View style={styles.locationCont}>
                <Text style={styles.factureHead}> Maroc</Text>  
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contSection2 : {
        display : "flex",
        flexDirection:"row",
        height: 90,
        marginTop: 10,
    },
    factureCont :{
        flex :3,
        marginTop : 20,
        marginLeft: 10,
        border: 1 ,
        borderColor : "black",
        borderStyle : "solid"
    },
    factureHead: {
      fontSize:14,
      marginLeft:10,
      fontWeight : "bold",
      color:"#00beb0"
    },
    locationCont :{flex : 2,
        marginTop : 20,
        marginLeft: 10,
        marginRight : 10,
        border: 1 ,
        borderColor : "black",
        borderStyle : "solid"
    },
    factureText:{
      fontSize: 13,
      marginLeft:10
    }
    });

export default facture;