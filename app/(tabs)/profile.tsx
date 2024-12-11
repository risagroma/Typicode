import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
        <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Profile</ThemedText>
        </ThemedView>

        <ThemedView style={styles.profileContainer}>
            <ThemedText type="title" style={styles.name}>Riski Agung Romadhon</ThemedText>
            <ThemedText style={styles.description}>
            Memiliki minat serta berkomitmen untuk terus belajar dan berkembang di Software
            Development, khususnya pada bidang Android Development.
        </ThemedText>
            <ExternalLink href="https://github.com/risagroma">
                <ThemedText type="link">Visit my GitHub</ThemedText>
            </ExternalLink>
        </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  headerImage: {
      color: '#808080',
      bottom: -90,
      left: -35,
      position: 'absolute',
  },
  titleContainer: {
      flexDirection: 'row',
      gap: 4,
      padding: 10,
  },
  profileContainer: {
      padding: 16,
  },
  name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
  },
  description: {
      fontSize: 16,
      color: '#555',
      marginBottom: 16,
  },
});
