import { ScrollView, StyleSheet } from "react-native";
import HeroSection from "@/components/HeroSection";
import DemoCard from "@/components/DemoCard";
import SearchSection from "@/components/SearchSection";
import InsightsSection from "@/components/InsightsSection";
import Navigation from '@/components/Navigation';


export default function HomeScreen() {
  return (
    <>
      <Navigation />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <HeroSection />
        <DemoCard />
        <SearchSection />
        <InsightsSection />
      </ScrollView>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 80,  
    flexGrow: 1,      
  },
});
