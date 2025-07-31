import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from 'react';
import app from './firebaseConfig';

export default function App() {
  useEffect(() => {
    console.log("xd");
    
    const fetchData = async () => {

      try {




      const docRef = doc(app, "users", "WhD4qzolOgu6td38Ru6p");
      const docSnap = await getDoc(docRef); 

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }

      } catch (error) {
        console.error("Error fetching document:", error); 
      }
    };
    fetchData();
  }, []);
  return (
    
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
});
