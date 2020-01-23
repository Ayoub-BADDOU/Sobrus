import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer';


function payement() {
    return (
        <View>
        <View style={styles.contSection4}>

            <View style={styles.payementCol}>
                <Text style={styles.tCol}>Total Organisme</Text>
                <Text style={styles.tCol}>Total Clien</Text>
                <View style={styles.total}><Text style={styles.tCol}>Total </Text></View>
            </View>
            <View>
                <Text style={styles.payementRow}>0 DHS</Text>
                <Text style={styles.payementRow}>2440 DHS</Text>
                <View style={styles.total}><Text style={styles.payementRow}>2440 DHS </Text></View>
            </View>
            
        </View>
        <Text style={styles.payementText}>Arrêté la présente facture à la somme de : Deux milles quatres cent quarente DHS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contSection4: {
      display : "flex",
      flexDirection : "row",
      marginTop :20,
      marginRight: 10,
      justifyContent:"flex-end",
      
    },
    payementRow :{
        fontSize: 13,
        paddingTop: 5,
        paddingBottom:5,
        paddingLeft:5,
        borderRight:1,
        borderLeft:1,
        borderTop:1,
        borderColor:"#A0A0A0",
        borderStyle :"solid",
    },
    tCol:{
        paddingTop: 5,
        paddingBottom:5,
        paddingLeft:5,
        borderTop:1,
        borderLeft:1,
        borderColor:"#A0A0A0",
        borderStyle :"solid"

    },
    payementCol :{

        fontSize: 13,
        width: 120
    },
    payementText:{
        textAlign: "center",
        fontSize: 13,
        marginTop : 10,
    },
    total:{
        backgroundColor : "#00beb0",
        
    }
    
    });

export default payement;