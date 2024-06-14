import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import appleLogo from '../assets/Images/apple logo.png'
import facebookLogo from '../assets/Images/facebook.png'
import gmailLogo from '../assets/Images/google logo.png'

export default function LoginScreen ({navigation}) {
  const [name, setName] = useState ('');
  const [email, setEmail] = useState ('');

  const handleLogIn = () =>{
    if (name && email) {
      navigation.navigate ('HomeScreen', {name,email})
    }
    else {
      alert ("Enter you name and email.")
    }
   }
  
  return (
    
     <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.jobizz}> Jobizz </Text>
      <Text style= {styles.welcomeBack}> 
      Welcome Back 👋
      </Text>
      <Text style= {styles.applyJobs}>
      Let's log in. Apply to jobs! </Text>
      
      <View style= {styles.logicBoxes}>

      <TextInput style={styles.box}
          placeholder='Name'
          value={name}
          onChangeText={setName}>  
      </TextInput>
        
        <TextInput style={styles.box}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}>  
        </TextInput>

        <TouchableOpacity style={styles.logInButton}
        onPress={handleLogIn}> 
        <Text style={styles.logIn}> Log In </Text>
     
        </TouchableOpacity>

      </View>

    <View style={styles.lineBox}>
      
      <View style={styles.leftLine}/> 
      
      <View>
        <Text style={styles.continueText}> Or continue
        with
        </Text>
      </View>

      <View style={styles.rightLine}/>

    </View>

    <View style={styles.iconGroup}>
      
      <View style={styles.iconBackgrounds}>
      <Image source={appleLogo}
      style={styles.imagesFormat}/>  
      </View>

      <View style={styles.iconBackgrounds}>
      <Image source={gmailLogo}
      style={styles.imagesFormat}/>  
      </View>

      <View style={styles.iconBackgrounds}>
      <Image source={facebookLogo}
      style={styles.imagesFormat}/>
      </View>
    
    </View>

    <View style={styles.registerBox}>
      <Text style={styles.accountText}> Haven't an account? 
      </Text>
      <Text style={styles.registerText}> Register 
      </Text>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFD',
    padding: 30,
  },

  jobizz:{
    width: 150,
    height: 33,
    top: 90,
    left: -9,
    fontFamily: "Poppins",
    fontWeight: "600",
    color: "#356899",
    fontSize: 22,
    alignSelf: "left",
  },

  welcomeBack: {
    width: 207,
    height: 34,
    top: 102,
    left: -5,
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: 24,
    color: "#0D0D26",
  },

  applyJobs: {
    width: 170,
    height: 20,
    top: 104,
    left: -3,
    color: "#0D0D26",
    fontWeight: "200",
    fontSize: 14,
    fontFamily: "Poppins",
  },

  logicBoxes: {
  width: 329,
  height: 208,
  top: 140,
  left: -4,
  gap: 20,
  },

  box: {
    width: 327,
    height: 52,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#AFB0B6",
    paddingLeft: 10
  },

  logInButton: {
    width: 327,
    height: 52,
    borderRadius: 5,
    backgroundColor: "#356899",
  },

  logIn: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: 16,
    alignSelf: "center",
    padding: 16,
    color: "white",
  },

  lineBox: {
    width: 327,
    height: 16,
    top: 180,
  },

  leftLine: {
    width: 98,
    borderWidth: 0.5,
    borderColor: "#AFB0B6",
    marginTop: 7,
  },

  continueText: {
  fontFamily: "Circular Std",
  fontWeight: "400",
  fontSize: 13,
  alignSelf: "center",
  color: "#AFB0B6",
  lineHeight: 16.44,
  top: -10,
  right: 4,
},

rightLine: {
  width: 98,
  borderWidth: 0.5,
  borderColor: "#AFB0B6",
  right: -227,
  top: -16,
},

iconGroup: {
  width: 216,
  height: 56,
  top: 200,
  alignSelf: "center",
  flexDirection: "row",
  gap: 28
},

iconBackgrounds: {
  width: 56,
  height: 56,
  borderRadius: 25,
  backgroundColor: "white",
  alignContent: "center"
},

imagesFormat: {
  width: 28,
  height: 28,
  alignSelf: "center",
  top: 12
},

registerBox: {
  width: 183,
  height: 18,
  top: 300,
  flexDirection: "row",
  alignSelf: "center",
},

registerText: {
  fontFamily: "Circular Std",
  fontWeight: 400,
  fontSize: 14,
  color: "#356899"
},

accountText: {
  fontFamily: "Circular Std",
  fontWeight: 400,
  fontSize: 14,
  color: "#AFB0B6"
},
});