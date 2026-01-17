import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function HeroSection() {
  return (
    <View style={styles.container}>
      {/* Text */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Call when <Text style={styles.highlight}>support</Text> is less busy
        </Text>
        <Text style={styles.subtitle}>Know when to call.</Text>
      </View>

      {/* Image */}
      <View style={styles.imageWrapper}>
        <Image
          source={require("../assets/demo-phone.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    paddingBottom: 64,
    alignItems: "center",
  },
  textContainer: {
    maxWidth: 360,
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 34,
    textAlign: "center",
    marginBottom: 12,
  },
  highlight: {
    color: "#22d3ee", // cyan-400
  },
  subtitle: {
    fontSize: 16,
    color: "#9ca3af", // gray-400
    textAlign: "center",
  },
  imageWrapper: {
    width: width - 40,
    maxWidth: 420,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 260,
    borderRadius: 20,
  },
});