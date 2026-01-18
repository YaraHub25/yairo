import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      {/* Brand */}
      <View style={styles.section}>
        <Text style={styles.logo}>yairo</Text>
        <Text style={styles.tagline}>Know the wait before you call.</Text>
      </View>

      {/* Product */}
      <View style={styles.section}>
        <Text style={styles.heading}>Product</Text>
        <Pressable>
          <Text style={styles.link}>How It Works</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.link}>Live Demo</Text>
        </Pressable>
      </View>

      {/* Company */}
      <View style={styles.section}>
        <Text style={styles.heading}>Company</Text>
        <Pressable>
          <Text style={styles.link}>About</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.link}>Contact</Text>
        </Pressable>
      </View>

      {/* Legal */}
      <View style={styles.section}>
        <Text style={styles.heading}>Legal</Text>
        <Pressable>
          <Text style={styles.link}>Privacy Policy</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.link}>Terms of Service</Text>
        </Pressable>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Bottom row */}
      <View style={styles.bottom}>
        <Text style={styles.bottomText}>
          © 2025 yairo. All rights reserved.
        </Text>
        <Text style={styles.bottomText}>
          Made with care for better customer service
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1a1a1a",
    borderTopWidth: 1,
    borderTopColor: "#2a2a2a",
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 40,
    marginTop: 32,
  },
  section: {
    marginBottom: 24,
  },
  logo: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 4,
  },
  tagline: {
    color: "#9ca3af",
    fontSize: 13,
  },
  heading: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
  },
  link: {
    color: "#9ca3af",
    fontSize: 14,
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: "#2a2a2a",
    marginVertical: 20,
  },
  bottom: {
    gap: 8,
  },
  bottomText: {
    color: "#6b7280",
    fontSize: 12,
    textAlign: "center",
  },
});