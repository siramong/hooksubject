import { Pressable } from "react-native";
import React, { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface IconButtonProps {
  iconName: string;
  onPress?: () => void;
  color?: string;
  size?: number;
}

const IconButton = ({ iconName, onPress, color, size=25 }: IconButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={styles.buttonContainer}
    >
      <Ionicons name={iconName as any} size={size} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 15, // Close to rounded-2xl
    justifyContent: "center",
    alignItems: "center",
    padding: 12, // Similar to p-3 (considering typical base font size)
    backgroundColor: "white",
    elevation: 5, // Simulating shadow-2xl
  },
});
export default IconButton;