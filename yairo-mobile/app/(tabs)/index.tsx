import { View, ScrollView, StyleSheet } from "react-native";
import HeroSection from "@/components/HeroSection";
import DemoCard from "@/components/DemoCard";
import SearchSection from "@/components/SearchSection";
import InsightsSection from "@/components/InsightsSection";
import BusinessCTA from "@/components/BusinessCTA";
import Navigation from "@/components/Navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "@/components/Footer";


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <Navigation />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <HeroSection />
        <DemoCard />
        <SearchSection />
        <InsightsSection />
        <BusinessCTA />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1, // 🔑 THIS enables scrolling
    backgroundColor: "#0f0f0f",
  },
  container: {
    padding: 20,
    paddingBottom: 120, // space for tab bar + CTA/footer
  },
});