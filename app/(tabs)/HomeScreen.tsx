import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons"; 

export default function HomeScreen() {
  const router = useRouter();
  const screenWidth = Dimensions.get("window").width;

  const osResumo = [
    { status: "Pendente", count: 5 },
    { status: "Em andamento", count: 3 },
    { status: "Concluído", count: 7 },
  ];

  const ultimasOS = [
    { id: "1", title: "Troca de Tela - iPhone 12", status: "Em andamento" },
    { id: "2", title: "Reparo de Placa - PS5", status: "Concluído" },
    { id: "3", title: "Substituição de Bateria - MacBook", status: "Pendente" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📋 Resumo das Ordens de Serviço</Text>

      <View style={styles.statusContainer}>
        {osResumo.map((item) => (
          <View key={item.status} style={[styles.statusBox, { width: screenWidth / 3.5 }]}>
            <Text style={styles.statusTitle}>{item.status}</Text>
            <Text style={styles.statusCount}>{item.count}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.addButton} onPress={() => router.push("/(tabs)/NewWOsScreen")}>
        <FontAwesome name="plus" size={20} color="white" />
        <Text style={styles.addButtonText}>Adicionar Nova OS</Text>
      </TouchableOpacity>

      <Text style={styles.header}>📌 Últimas OS Criadas</Text>

      <FlatList
        data={ultimasOS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.osItem}>
            <Text style={styles.osTitle}>{item.title}</Text>
            <Text style={styles.osStatus}>{item.status}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#1e1e2d",
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  statusBox: {
    backgroundColor: "#2d2d3d",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    width: "100%",
    maxWidth: 300,
  },
  statusTitle: {
    color: "#bbb",
    fontSize: 14,
  },
  statusCount: {
    color: "#00ff00",
    fontSize: 22,
    fontWeight: "bold",
  },
  addButton: {
    flexDirection: "row",
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  osItem: {
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  osTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  osStatus: {
    color: "#ccc",
    fontSize: 14,
  },
});
