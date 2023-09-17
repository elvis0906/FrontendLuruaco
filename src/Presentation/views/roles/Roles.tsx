import React from 'react'
import { View, Text, FlatList,Dimensions } from 'react-native'
import userViewModel from './ViewModel'
import { StackScreenProps } from '@react-navigation/stack';
import { RolesItem } from './Item';
import { RootStackParamList } from '../../navigator/MainStackNavigator';

interface Props extends StackScreenProps<RootStackParamList, 'RolesScreen'>{};

export const  RolesScreen = ({navigation, route} :Props) => {

const {user} = userViewModel()

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height


  return (
     
     <View style={{flex: 1, padding: 25}}>
        <FlatList 
          data={ user?.roles }
          renderItem={ ({item}) => <RolesItem rol={ item } height={ 250 } width={ width - 50 } navigation={navigation}/>}
          keyExtractor={ (item) => item.id } 
        />
    </View>
    
  )
}


