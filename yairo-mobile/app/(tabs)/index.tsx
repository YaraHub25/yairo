import { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
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
      console.error(error);
      return { success: false, message: 'Server error' };
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
      result.success ? 'Success' : 'Error',
      result.message
    );

    if (result.success) {
      setEmail('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="you@example.com"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
      />

      <Button
        title={loading ? 'Submitting...' : 'Join early access'}
        onPress={handleSubmit}
        disabled={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 12,
    borderRadius: 6,
  },
});
