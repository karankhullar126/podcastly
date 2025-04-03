import { SafeAreaView, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PodcastSearchPage from './views/page/PodcastSearchPage';
import PodcastDetailPage from './views/page/PodcastDetailPage';
import store from './redux/store';
import { Provider } from 'react-redux';
import MiniPlayer from './views/components/MiniPlayer/MiniPlayer';
import { useEffect } from 'react';
import { Audio, InterruptionModeIOS } from 'expo-av';


export default function App() {

  const Stack = createNativeStackNavigator()

  useEffect(() => {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: true,
      interruptionModeIOS: InterruptionModeIOS.DoNotMix,
      playsInSilentModeIOS: true,
   });
  }, [])

  return (
    <Provider store={store}>
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Search Podcast"
            component={PodcastSearchPage}
            options={{ title: 'Search Podcast' }}
          />

          <Stack.Screen
            name="Podcast"
            component={PodcastDetailPage}
            options={{ title: 'Podcast' }}
          />
          {/* <Stack.Group screenOptions={{ presentation: 'fullScreenModal' }}>
            <Stack.Screen
              name="Create Transfer"
              component={AddTransfer}
              options={{ title: 'Create transfer' }}
            />
          </Stack.Group> */}
        </Stack.Navigator>
        <MiniPlayer></MiniPlayer>
      </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
