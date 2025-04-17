import { Text, View, StyleSheet, Linking } from "react-native";
import { Link } from "expo-router";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔍 Sistema de Gestão de OS</Text>
      <Text style={styles.version}>Versão 1.0.0</Text>

      <Text style={styles.description}>
        Este protótipo foi desenvolvido para auxiliar no gerenciamento de Ordens de Serviço.
      </Text>

      <Text style={styles.sectionTitle}>🛠️ Tecnologias Utilizadas</Text>
      <View style={styles.techContainer}>
        <FontAwesome5 name="react" size={20} color="#61DBFB" />
        <Text style={styles.listItem}>React Native</Text>
      </View>
      <View style={styles.techContainer}>
        <MaterialCommunityIcons name="language-typescript" size={20} color="#3178C6" />
        <Text style={styles.listItem}>TypeScript</Text>
      </View>
      <View style={styles.techContainer}>
        <FontAwesome5 name="mobile-alt" size={20} color="#FFF" />
        <Text style={styles.listItem}>Expo</Text>
      </View>

      <Text style={styles.sectionTitle}>📌 Desenvolvido por</Text>
      <Text style={styles.author}>Antonio Gabriel</Text>

      <Text style={styles.sectionTitle}>🔗 Links Úteis</Text>
      <Text style={styles.link} onPress={() => Linking.openURL("https://github.com/Gabreeuu-hub")}>
        🌐 GitHub
      </Text>
      <Text style={styles.link} onPress={() => Linking.openURL("https://www.linkedin.com/in/antoniogabrielpnhr/")}>
        💼 LinkedIn
      </Text>

      <Link href="/HomeScreen" style={styles.button}>⬅️ Voltar para Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  version: {
    color: "#aaa",
    fontSize: 14,
    marginBottom: 20,
  },
  description: {
    color: "#ddd",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
  },
  techContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  listItem: {
    color: "#bbb",
    fontSize: 16,
    marginLeft: 10,
  },
  author: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    color: "#1e90ff",
    fontSize: 16,
    marginVertical: 5,
  },
  button: {
    fontSize: 18,
    color: " #1e90ff",
    marginTop: 20,
    textDecorationLine: "underline",
  },
});
