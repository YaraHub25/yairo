import { View, Text, StyleSheet, Pressable } from "react-native";

export default function BusinessCTA() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Title */}
        <Text style={styles.title}>
          🕓 Reduce wait times by up to{" "}
          <Text style={styles.highlight}>40%</Text>
        </Text>

        {/* Description */}
        <Text style={styles.description}>
          Help your customers call when your team is least busy and spend less
          time handling frustrated callers.
        </Text>

        {/* Button */}
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && { opacity: 0.85 },
          ]}
          onPress={() => {
            // later: navigate to business interest / modal
          }}
        >
          <Text style={styles.buttonText}>For Business</Text>
        </Pressable>

        {/* Helper text */}
        <Text style={styles.helperText}>
          Early access • Limited availability
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#1f1f1f",
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: "#2a2a2a",
    alignItems: "center",
  },
  title: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 12,
  },
  highlight: {
    color: "#22d3ee", // cyan
    fontWeight: "700",
  },
  description: {
    color: "#9ca3af",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#06b6d4",
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 10,
    marginBottom: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  helperText: {
    color: "#6b7280",
    fontSize: 12,
    marginTop: 6,
  },
});