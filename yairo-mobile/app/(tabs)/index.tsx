import { ScrollView, StyleSheet } from "react-native";
import HeroSection from "@/components/HeroSection";
import DemoCard from "@/components/DemoCard";
import SearchSection from "@/components/SearchSection";
import InsightsSection from "@/components/InsightsSection";

<InsightsSection />

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeroSection />
      <DemoCard />
      <SearchSection />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },
});