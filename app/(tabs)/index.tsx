import { StyleSheet, Text, View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.content}>
        <Text style={styles.title}>Shortcut Mobile</Text>
        <Text style={styles.subtitle}>Skeleton initialized with Safe Area Insets - Ready for API integration</Text>
        
        {/* Placeholder for the Story List */}
        <View style={styles.cardPlaceholder}>
          <Text style={styles.mutedText}>No stories found yet.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  cardPlaceholder: {
    marginTop: 40,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
    borderStyle: 'dashed',
    alignItems: 'center',
  },
  mutedText: {
    color: '#999',
  }
});