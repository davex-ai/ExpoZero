import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo'
import { Text, View } from 'react-native';

export default function TabOneScreen() {
  return (
    <View className='flex-1 items-center justify-center bg-pink-500'>
      <Text className='text-pink-900 text-2xl'>Hi This Is Expo Zero</Text>
       <Text className='text-pink-900 text-2xl'>Thanks for using my setup</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
