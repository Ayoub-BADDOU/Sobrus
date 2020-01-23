import React from 'react';
import { Page,  Document, StyleSheet } from '@react-pdf/renderer';
import Header from './components/header'
import Facture from './components/facture'
import Produit from './components/produit'
import Payement from './components/payement'
import Footer from './components/footer'


function pdf() {
    return (
        <Document>
            <Page style={styles.mis}>
                <Header/>
                <Facture/>
                <Produit/>
                <Payement/>
                <Footer/>
            </Page>
        </Document>
    )
}

const styles = StyleSheet.create({
    mis: {
      padding : 20
      
    }
    });

export default pdf;