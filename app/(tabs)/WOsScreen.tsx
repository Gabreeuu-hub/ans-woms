import { View, StyleSheet, FlatList, Button } from "react-native";
import { useState } from "react";
import SearchBar from "./../../components/SearchBar";
import WOItem from "./../../components/WOItem";

export default function WOsScreen({ navigation }: any) {
  const [woList, setWoList] = useState([
    { id: "1", title: "Troca de Tela - iPhone 12", status: "Em andamento" },
    { id: "2", title: "Reparo de Placa - PS5", status: "Concluído" },
    { id: "3", title: "Substituição de Bateria - MacBook", status: "Pendente" },
    { id: "4", title: "Instalação de SSD - Notebook Dell", status: "Em andamento" },
    { id: "5", title: "Reparo de Placa Mãe - Xbox Series X", status: "Aguardando peça" },
    { id: "6", title: "Troca de Fonte - Computador Gamer", status: "Concluído" },
    { id: "7", title: "Limpeza de Ventoinhas - Laptop Lenovo", status: "Pendente" },
    { id: "8", title: "Reparo de Placa de Vídeo - PC Gamer", status: "Em andamento" },
    { id: "9", title: "Troca de Teclado - Laptop Asus", status: "Concluído" },
    { id: "10", title: "Instalação de Memória RAM - Computador de Mesa", status: "Pendente" },
    { id: "11", title: "Reparo de Cooler - Notebook HP", status: "Aguardando peça" },
    { id: "12", title: "Instalação de Software - MacBook Air", status: "Em andamento" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>(""); 

  const filteredWOs = woList.filter((wo) => {
    if (filterStatus === "") return true; 
    return wo.status === filterStatus; 
  }).filter((wo) =>
    wo.title.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  return (
    <View style={styles.container}>
      <SearchBar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        setFilterStatus={setFilterStatus} 
      /> 
      <FlatList
        data={filteredWOs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <WOItem title={item.title} status={item.status} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    padding: 10,
  },
});
