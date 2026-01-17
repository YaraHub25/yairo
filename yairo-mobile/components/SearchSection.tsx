import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";

export default function SearchSection() {
  return (
    <View>
      <TextInput
        placeholder="Search a company"
        style={styles.input}
        placeholderTextColor="#888"
      />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Search</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#00B4D8",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});