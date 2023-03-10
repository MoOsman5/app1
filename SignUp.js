import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native';



export default function SignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  return (
    
    <View style={styles.container}>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://th.bing.com/th/id/OIP.P4jjzgiyc5pIN9ZYwIdOdQHaEK?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        }}
      />
             <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName} 
      />
                   <TextInput
        style={styles.input}
        placeholder="User Name"
        value={userName}
        onChangeText={setUserName} 
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
        <TextInput
        style={styles.input}
        placeholder="Comfirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
        <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone} 
      />
      <TouchableOpacity 
        style={styles.bu}>
        <Text style={styles.title}>Sign Up</Text>
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
