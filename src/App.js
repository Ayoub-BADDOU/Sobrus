import React from 'react';
import {PDFViewer, StyleSheet, PDFDownloadLink} from '@react-pdf/renderer'
import PDF from './pdf'
import './App.css';


class App extends React.Component{

  render(){

    const styles = StyleSheet.create({
      css: {
        flex : 1,
        
      },
      cont:{
        display : "flex",
        height: 800,
        margin : 0,
        padding : 0
      },
      downl:{
        textDecoration : "none",
        backgroundColor : "#00beb0",
        color : "#fff",
        fontSize : 40,
        transform: "rotate(270deg)",
        height : 60,
        margin : 0,
        padding : 0,
        position : "relative",
        top : 200
      }
      });

    return(
      <div style={styles.cont}>
      <PDFDownloadLink document={<PDF/>} fileName="somename.pdf" style={styles.downl}>Download Here</PDFDownloadLink>
      <PDFViewer children={<PDF/>}  style={styles.css}></PDFViewer>
      </div>
    )  
  }
}
     


export default App;
