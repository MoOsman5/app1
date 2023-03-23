import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native';
import { auth } from './firebase';


export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin =()=>{
    auth
    .signInWithEmailAndPassword(email,password)
    .then(userCredentials =>{
      const user =userCredentials.user;
      console.log('logged in with ',user.email);
      navigation.navigate("Home");
    })
    .catch(error => alert(error.message))
  }

  return (
    
    <View style={styles.container}>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://th.bing.com/th/id/R.ee4b93ab9c1bd00856677d705aa1118e?rik=UGDZcqZ%2fNAzfgg&riu=http%3a%2f%2fwww.ucost.in%2fimages%2fpic%2flogin%2flogin.jpg&ehk=0mVfv1cjf5NQTwY1aePj269OJmjrCYXV7Gpi1CKfpSk%3d&risl=&pid=ImgRaw&r=0',
        }}
      />
        <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        
        
        
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        
      />
      <TouchableOpacity 
        onPress={handleLogin}
        style={styles.bu}>
        <Text style={styles.title}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity 
          onPress={()=>{
            navigation.navigate("SignUp")
          }}
          style={styles.t2}>
          <Text style={styles.signUp}>Sign Up</Text>
        </TouchableOpacity>
        
      
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width:"80%" ,
    padding: 10,
    borderRadius:15,
    margin:10,
    borderWidth:1,
    paddingHorizontal:"2%",
  },
  tinyLogo: {
    width: "80%",
    height: 120,
  },
  bu:{
    width: "80%",
    padding: 10,
    borderRadius:15,
    margin:10,
    borderWidth:1,
    alignItems: 'center',
    backgroundColor:'#4169e1'
  },
  title:{
    color:'#fff',
    fontSize:20,
  },
  signUp:{
    color:'#4169e1'
  },
  t2:{
  
  }
});


