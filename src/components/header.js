import React from 'react'
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';


 function Header() {
     
    return (
        <View style={styles.contSection1}>
            <View style={styles.text}>
                <Text style={styles.textH}> Sobrus Compte demo (New)</Text>
                <Text style={styles.textl}><Image src="https://img.icons8.com/pastel-glyph/64/000000/person-male.png"/> DOUNIA RACHID</Text>
                <Text style={styles.textl}><Image src="https://img.icons8.com/ios/50/000000/phone.png"/> 053755554454</Text>
                <Text style={styles.textl}><Image src="https://img.icons8.com/carbon-copy/100/000000/worldwide-location.png"/> Merci de votre visite,</Text>
            </View>
            <Image source={require("./img.png")}  style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    contSection1:{
        display : "flex",
        flexDirection : "row",
        
    },
    textH: {
        fontSize: 18,
        marginLeft:10,
        marginTop : 10,
        color: "#00beb0",
        fontWeight: "bold",
    },
    text:{flex : 4,},
    imag:{  flex : 1,},
    textl: {
      fontSize: 13,
      marginLeft:  5,
      
      
    },
    image:{
        marginRight:10,
        marginTop: 10
    }
});

export default Header;
