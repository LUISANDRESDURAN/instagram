import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { AuthContext } from '../authContext.jsx'; // Asegúrate de que la ruta sea correcta

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);

  const onRegister = async () => {
    if (!displayName.trim()) {
      return Alert.alert('Error', 'Ingresa un nombre de usuario válido');
    }
    try {
      await register(email.trim(), password, displayName.trim());
    } catch (err) {
      Alert.alert('Error', err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crea tu cuenta</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={displayName}
        onChangeText={setDisplayName}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Registrarme" onPress={onRegister} />
      <Text style={styles.link} onPress={() => navigation.goBack()}>
        ¿Ya tienes cuenta? Inicia sesión
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', padding:16 },
  title: { fontSize:24, marginBottom:16, textAlign:'center' },
  input: { borderWidth:1, borderColor:'#ccc', borderRadius:4, padding:8, marginBottom:12 },
  link: { marginTop:16, color:'blue', textAlign:'center' },
});
