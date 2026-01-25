import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DemoCard from "@/components/DemoCard";
import SearchSection from "@/components/SearchSection";
import InsightsSection from "@/components/InsightsSection";
import BusinessCTA from "@/components/BusinessCTA";
import Footer from "@/components/Footer";

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      {/* Top navigation — NOT scrollable */}
      <SafeAreaView edges={["top"]}>
        <Navigation />
      </SafeAreaView>

      {/* Scrollable content */}
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <HeroSection />
        <DemoCard />
        <SearchSection />
        <InsightsSection />
        <BusinessCTA />
        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0f0f0f",
  },
  content: {
    padding: 20,
    paddingBottom: 160, // space for tab bar + footer
  },
});
