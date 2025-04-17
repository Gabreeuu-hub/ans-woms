import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, StyleSheet, TextInput, Modal, Button, Text } from "react-native";
import { useState } from "react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  setFilterStatus: (status: string) => void;
}

export default function SearchBar({ searchTerm, setSearchTerm, setFilterStatus }: SearchBarProps) {
  const [isFilterVisible, setFilterVisible] = useState(false);

  const toggleFilter = () => {
    setFilterVisible(!isFilterVisible);
  };

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <TextInput
          placeholder="Pesquisar"
          style={styles.input}
          value={searchTerm} 
          onChangeText={(text) => setSearchTerm(text)} 
        />
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={toggleFilter}>
          <Ionicons name="filter-outline" size={30} />
        </TouchableOpacity>
      </View>

      <Modal
        visible={isFilterVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={toggleFilter}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.filterTitle}>Filtros</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Status: Em andamento"
                onPress={() => { setFilterStatus("Em andamento"); toggleFilter(); }}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="Status: Concluído"
                onPress={() => { setFilterStatus("Concluído"); toggleFilter(); }}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="Status: Pendente"
                onPress={() => { setFilterStatus("Pendente"); toggleFilter(); }}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="Limpar Filtro"
                onPress={() => { setFilterStatus(""); toggleFilter(); }}
              />
              </View>
            <Button title="Fechar" onPress={toggleFilter} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    backgroundColor: "#fff",
    width: "66%",
    maxWidth: 500,
    height: 50,
    borderWidth: 3,
    borderColor: "#C0C0C0",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  input: {
    marginLeft: 10,
    paddingVertical: 10,
    textAlignVertical: "center",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#fff",
    width: 70,
    height: 50,
    marginLeft: -3,
    borderWidth: 3,
    borderColor: "#C0C0C0",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    width: "80%",
    padding: 20,
    borderRadius: 10,
  },
  filterTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  buttonContainer: {
    marginBottom: 5,
  },
});
