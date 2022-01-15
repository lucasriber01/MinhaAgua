import {SafeAreaView, Text, StatusBar, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';



const Home =() =>{
    const [login,setLogin] =  useState();
    const [senha,setSenha] =  useState();
    
    

    return(
       <SafeAreaView style={styles.container}>
           <Image style={{width:300, height:200}} source={require('../images/login2.png')} />
           <Text style={styles.text}>Minha Agua</Text>

           <TextInput placeholder='Digite seu usuario' style={styles.input} onChangeText={text => setLogin(text)}/>
           <TextInput secureTextEntry={true} placeholder='Digite sua senha' style={styles.input} onChangeText={text => setSenha(text)}/>
           <TouchableOpacity style={styles.btnEntrar}>
               <Text style={{color:'white', textAlign:'center', }} >ENTRAR</Text>
           </TouchableOpacity>
           <StatusBar hidden/>
       </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#282524',
        alignItems:'center' , 
        justifyContent:'center',
        padding:20
        
    },
    input:{
        width:'100%',
        height:40,
        backgroundColor:'white',
        borderRadius:20,
        paddingLeft:10,
        marginBottom:15
    },
    btnEntrar:{
        width:'60%',
        height:40,
        backgroundColor:'blue',
        borderRadius:20,
        justifyContent:'center'

    },
    text:{
        color:'blue',
        fontSize:25,
        fontFamily:'sans-serif',
    }
})

export default Home ;