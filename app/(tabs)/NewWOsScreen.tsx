import { View, StyleSheet, TextInput, Button, Text, Image } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";

export default function NewWOsScreen() {
  const [client, setClient] = useState("");
  const [equipment, setEquipment] = useState("");
  const [description, setDescription] = useState("");
  const [openingDate, setOpeningDate] = useState("");
  const [estimatedDate, setEstimatedDate] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const router = useRouter();

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Você precisa permitir o acesso à galeria!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  };

  const takePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Você precisa permitir o acesso à câmera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  };

  const handleSubmit = () => {
    const newWO = {
      id: Math.random().toString(),
      title: `${equipment} - ${client}`,
      status,
      client,
      equipment,
      description,
      openingDate,
      estimatedDate,
      image,  
    };

    console.log("Nova Ordem de Serviço: ", newWO);
    router.push("/(tabs)/WOsScreen"); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <Text style={styles.label}>Cliente</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Cliente"
        value={client}
        onChangeText={setClient}
      />

      <Text style={styles.label}>Equipamento</Text>
      <TextInput
        style={styles.input}
        placeholder="Tipo de Equipamento"
        value={equipment}
        onChangeText={setEquipment}
      />

      <Text style={styles.label}>Descrição do Problema</Text>
      <TextInput
        style={styles.input}
        placeholder="Descreva o Problema"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Text style={styles.label}>Data de Abertura</Text>
      <TextInput
        style={styles.input}
        placeholder="DD/MM/AAAA"
        value={openingDate}
        onChangeText={setOpeningDate}
      />

      <Text style={styles.label}>Data Estimada de Conclusão</Text>
      <TextInput
        style={styles.input}
        placeholder="DD/MM/AAAA"
        value={estimatedDate}
        onChangeText={setEstimatedDate}
      />

      <Text style={styles.label}>Status</Text>
      <TextInput
        style={styles.input}
        placeholder="Status (Ex: Pendente, Em andamento)"
        value={status}
        onChangeText={setStatus}
      />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="Escolher Imagem" onPress={pickImage} />
      <Button title="Adicionar OS" onPress={handleSubmit} />
      <Button title="Tirar Foto" onPress={takePhoto} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "#fff",
    marginBottom: 5,
    fontSize: 16,
  },
  inputContainer:{
    width: "100%",
    maxWidth: 800,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 16,
  },
  button:{
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
  },
  image: {
    marginTop: 20,
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});
