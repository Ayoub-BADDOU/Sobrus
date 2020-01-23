import React from 'react'
import { View, StyleSheet, Text } from '@react-pdf/renderer';



function produit() {
    return (
        <View style={styles.contSection3}>
            <View style={styles.headCont}>
                <View style={styles.rowCont}>
                    <View style={styles.colContP}><Text style={styles.textH}>Produit</Text></View>
                    <View style={styles.colCont}><Text style={styles.textH}>Qte</Text></View>
                    <View style={styles.colCont}><Text style={styles.textH}>P.U</Text></View>
                    <View style={styles.colCont}><Text style={styles.textH}>Total</Text></View>
                </View>
            </View>
                <View style={styles.rowCont}>
                    <View style={styles.colContP}><Text style={styles.text}>DIFAL CO 50MG B30 COMP</Text></View>
                    <View style={styles.colCont}><Text style={styles.text}>40</Text></View>
                    <View style={styles.colCont}><Text style={styles.text}>10</Text></View>
                    <View style={styles.colCont}><Text style={styles.text}>400</Text></View>
                </View>
                <View style={styles.rowCont}>
                    <View style={styles.colContP}><Text style={styles.text}>DIFAL CO 50MG B30 COMP DIFAL CO 50MG B30 COMP</Text></View>
                    <View style={styles.colCont}><Text style={styles.text}>20</Text></View>
                    <View style={styles.colCont}><Text style={styles.text}>100</Text></View>
                    <View style={styles.colCont}><Text style={styles.text}>2000</Text></View>
                </View>
                <View style={styles.rowCont}>
                    <View style={styles.colContP}><Text style={styles.text}>DIFAL CO 50MG B30 COMP DIFAL CO 50MG B30 COMP</Text></View>
                    <View style={styles.colCont}><Text style={styles.text}>20</Text></View>
                    <View style={styles.colCont}><Text style={styles.text}>100</Text></View>
                    <View style={styles.colCont}><Text style={styles.text}>2000</Text></View>
                </View>
                
        </View>
    )
}

const styles = StyleSheet.create({
    
    contSection3:{
        marginTop : 20,
        marginRight : 10,
        marginLeft : 10,
        fontSize : 12,
        borderBottom: 1 ,
        borderRight:1,
        borderColor : "#A8A8A8",
        borderStyle : "solid"
    },
    headCont :{
        backgroundColor: "#00beb0",
        color : "#fff",
    },
    rowCont: {
      display : "flex",
      flexDirection : "row",
    },
    
    colContP:{
      flex : 6,
      borderLeft: 1 ,
        borderColor : "#A8A8A8",
        borderStyle : "solid",
    },
    colCont:{
        flex : 1,
        borderLeft: 1 ,
        borderColor : "#A8A8A8",
        borderStyle : "solid",
      },
      text:{
          paddingLeft :5,
          paddingBottom:5,
          paddingTop:5
      },
      textH:{
        fontWeight: "bold",
        paddingLeft :5,
        paddingBottom:5,
        paddingTop:5
    }
    });

export default produit;
