import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import styles from '../styles';

export default function LoginScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.headerRow}>
            <TouchableOpacity style={styles.backButton}>
              <Ionicons name="chevron-back" size={20} color="#111827" />
            </TouchableOpacity>
            <Image
              source={require('../assets/images/icon.png')}
              style={styles.logo}
            />
          </View>

          <Text style={styles.title}>
            Sign in to your{'\n'}Account
          </Text>
          <Text style={styles.subtitle}>
            Enter your email and password to sign in.
          </Text>

          <Text style={styles.fieldLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#9ca3af"
            keyboardType="email-address"
          />

          <Text style={styles.fieldLabel}>Password</Text>
          <View style={styles.passwordRow}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter your password"
              placeholderTextColor="#9ca3af"
              secureTextEntry
            />
            <TouchableOpacity style={styles.passwordIconButton}>
              <Ionicons name="eye-outline" size={20} color="#9ca3af" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInButtonText}>Sign in</Text>
          </TouchableOpacity>

          <View style={styles.orRow}>
            <View style={styles.orLine} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.orLine} />
          </View>

          <TouchableOpacity style={styles.socialButton}>
            <View style={styles.socialIconContainer}>
              <FontAwesome name="google" size={18} color="#EA4335" />
            </View>
            <Text style={styles.socialButtonText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <View style={styles.socialIconContainer}>
              <FontAwesome name="facebook-official" size={18} color="#1877F2" />
            </View>
            <Text style={styles.socialButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Don&apos;t have an account?
              <Text style={styles.footerLink}> Join now</Text>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

