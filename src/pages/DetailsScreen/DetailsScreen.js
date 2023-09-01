import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const DetailsScreen = ({ route }) => {
  const { id } = route.params;

  // Date and time formatting
  const timestart = id.timestart;
  const dateObject = new Date(timestart);
  const formattedDateTime = new Intl.DateTimeFormat('tr-TR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(dateObject);
  
  return (
    <SafeAreaView>
      <Image style={{width:200, height:200, resizeMode:"cover"}} source={{uri:id.img}}/>
      <Text>{id.name}</Text>
      <Text>{id.center}</Text>
      <Text>{id.description}</Text>
      <Text>{id.free === false ? "Biletli" : "Ücretsiz"}</Text>
      <Text>{formattedDateTime}</Text>
    </SafeAreaView>
  )
}

export default DetailsScreen