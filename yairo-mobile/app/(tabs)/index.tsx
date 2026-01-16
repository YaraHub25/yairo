import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { supabase } from '@/lib/supabaseClient';

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const submitEarlyAccess = async (email: string) => {
    const { data, error } = await supabase.rpc(
      'request_early_access',
      { email_input: email }
    );

    if (error) {
      console.error('RPC error:', error);
      return { success: false, message: 'Server error. Try again.' };
    }

    const result = data?.[0];

    if (!result?.success) {
      return {
        success: false,
        message: result?.message ?? 'Signup failed',
      };
    }

    return {
      success: true,
      message: result.message,
    };
  };

  const handleSubmit = async () => {
    if (!email) {
      Alert.alert('Missing email', 'Please enter your email');
      return;
    }

    setLoading(true);
    const result = await submitEarlyAccess(email);
    setLoading(false);

    Alert.alert(
      result.success ? "You're in 🎉" : 'Oops',
      result.message
    );

    if (result.success) {
      setEmail('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join early access</Text>

      <Text style={styles.subtitle}>
        Be the first to know when Yairo launches.
      </Text>

      <TextInput
        placeholder="you@example.com"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
      />

      {loading ? (
        <ActivityIndicator size="small" />
      ) : (
        <Button title="Join early access" onPress={handleSubmit} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
  },
  subtitle: {
    color: '#666',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
  },
});
