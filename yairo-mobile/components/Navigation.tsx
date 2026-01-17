import { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Top Bar */}
        <View style={styles.navBar}>
          <Text style={styles.logo}>yairo</Text>

          <Pressable onPress={() => setMenuOpen(!menuOpen)}>
            <Ionicons
              name={menuOpen ? 'close' : 'menu'}
              size={26}
              color="#9CA3AF"
            />
          </Pressable>
        </View>

        {/* Mobile Menu */}
        {menuOpen && (
          <View style={styles.menu}>
            <NavItem label="How it Works" />
            <NavItem label="For Businesses" />
            <NavItem label="Live Demo" />

            <Pressable style={styles.cta}>
              <Text style={styles.ctaText}>Get early access</Text>
            </Pressable>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

function NavItem({ label }: { label: string }) {
  return (
    <Pressable style={styles.link}>
      <Text style={styles.linkText}>{label}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  safe: {
    backgroundColor: '#0B0B0B',
  },
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#1F2937',
  },
  navBar: {
    height: 56,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: 22,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  menu: {
    backgroundColor: '#252525',
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  link: {
    paddingVertical: 12,
  },
  linkText: {
    color: '#9CA3AF',
    fontSize: 16,
  },
  cta: {
    marginTop: 20,
    backgroundColor: '#06B6D4',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  ctaText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
});
