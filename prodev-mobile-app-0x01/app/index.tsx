import { StyleSheet, Text, View } from 'react-native';

export default function EntryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.entryTitle}>Entry Screen - Awesome</Text>

      <View style={styles.banner}>
        <Text style={styles.mainText}>Typescript is great if you practice more</Text>
        <Text style={styles.subText}>
          React Native provides you single code base for cross platforms
        </Text>
        <Text style={styles.footerText}>ALX is awesome</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
  },
  entryTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 12,
  },
  banner: {
    backgroundColor: '#7dd3fc',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  mainText: {
    fontSize: 32,
    fontWeight: '800',
    color: '#f97316',
    textTransform: 'uppercase',
    lineHeight: 40,
  },
  subText: {
    marginTop: 24,
    fontSize: 20,
    fontWeight: '600',
    color: '#a855f7',
    lineHeight: 28,
  },
  footerText: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: '600',
    color: '#1d4ed8',
  },
});

