import { Text, TextInput, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router"; 
export default function LoginScreen() {
  const router = useRouter(); 

  const handleLogin = () => {
    router.push("/(tabs)/HomeScreen"); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          source={require("../assets/images/ans-services.jpg")} 
          style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Usuário" placeholderTextColor="#aaa"/>
        <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#aaa" />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Developed by Antonio G. 2025</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    width: "100%",
    height: "50%",
    backgroundColor: "#c35517",
    justifyContent: "center",  
    alignItems: "center",
  },
  logo: {
    maxWidth: 180,
    maxHeight: 180,
    borderRadius: 20,
  },
  formContainer: {
    marginBottom: "auto",
    width: "75%",
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    backgroundColor: "#C0C0C0",
    width: "100%",
    maxWidth: 300,
    height: 50,
    fontSize: 18,
    margin: 8,
    borderRadius: 10,
    padding: 10,
  },
  button: {
    backgroundColor: "#c35517",  
    width: "40%",
    maxWidth: 200,                
    height: 50,                  
    justifyContent: "center",    
    alignItems: "center",        
    borderRadius: 10,            
    marginTop: 20,               
  },
  buttonText: {
    color: "#fff",              
    fontSize: 18,                
    fontWeight: "bold",          
  },
  footerContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  footerText: {
    color: "#bbb",
  },
});
