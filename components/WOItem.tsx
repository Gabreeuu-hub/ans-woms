import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

type WOItemProps = {
  title: string;
  status: string;
};

const WOItem = ({ title, status }: WOItemProps) => {
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.woItem}>
      <Text style={styles.woTitle}>{title}</Text>
      <Text style={styles.woStatus}>{status}</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
    },
  woItem: {
    display: "flex",
    width: "100%",
    maxWidth: 800,
    backgroundColor: "#3a3f47",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  woTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  woStatus: {
    color: "#bbb",
    fontSize: 14,
  },
});

export default WOItem;
