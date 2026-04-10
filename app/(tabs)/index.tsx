import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo'
import { Text, View } from 'react-native';

export default function TabOneScreen() {
  return (
    <View className='flex-1 items-center justify-center bg-pink-500'>
      <Text className='text-pink-900 text-2xl'>Tab One</Text>
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // title: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
