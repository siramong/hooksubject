
import { Text, View, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import IconButton from "@/components/ui/IconButton"
import "@/global.css"

export default function Index() {

  const [contador,setContador] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>Contador: {contador}</Text>
      <Pressable style={styles.button} onPress={() => setContador(contador + 1)}>
        <Text style={styles.buttonText}>Aumentar</Text>
        <IconButton iconName="add-circle"></IconButton>
      </Pressable>
      <Pressable style={styles.button} onPress={() => setContador(contador - 1)}>
        <Text style={styles.buttonText}>Reducir</Text>
        <IconButton iconName="remove-circle"></IconButton>
      </Pressable>
      <Pressable className="flex bg-red-500 rounded-full">xd</Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#23272e'
  },
  counter: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    color: '#d7dae0'
  },
  button: {
    backgroundColor: "#4d78cc",
    padding: 15,
    borderRadius: 12,
    marginVertical: 5,
  },
  buttonText: {
    color: "#f8fafd",
    fontSize: 18,
  }
});
