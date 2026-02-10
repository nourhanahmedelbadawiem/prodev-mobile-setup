import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const { height } = Dimensions.get('window');

export default function App() {
  return (
    <SafeAreaProvider>
      <ImageBackground
        source={require('./assets/images/background-image.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.header}>
            <Image
              source={require('./assets/images/Logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>Find your favorite place here</Text>
            <Text style={styles.subtitle}>
              The best prices for over 2 million properties worldwide
            </Text>
          </View>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Join here</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Sign In</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Continue to home</Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  header: {
    alignItems: 'flex-start',
  },
  logo: {
    width: 64,
    height: 32,
  },
  content: {
    marginTop: 40,
    maxWidth: 260,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: 38,
  },
  subtitle: {
    marginTop: 16,
    fontSize: 16,
    color: '#e5e7eb',
    lineHeight: 22,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 999,
    paddingVertical: 14,
    alignItems: 'center',
    marginRight: 12,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  secondaryButton: {
    flex: 1,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#ffffff',
    paddingVertical: 14,
    alignItems: 'center',
    marginLeft: 12,
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  footer: {
    marginTop: 32,
  },
  footerText: {
    fontSize: 14,
    color: '#e5e7eb',
  },
});
