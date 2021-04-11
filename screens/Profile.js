import React, { useState }from 'react';
import { View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

const HeaderContainer = styled.View`
  margin-top: 80px;
`;

const Title = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin: 20px 0;
`;

const StyledTextInput = styled.TextInput`
  border: 2px solid black;
  width: 150px;
  height: 30px;
  border-radius: 5px;
  background-color: lightgray;
  margin-bottom: 20px;
`;

export const Profile = ({ navigation, route }) => {
  

const [name, onNameChange] = useState('')

  return (
    <View>
      <HeaderContainer>
        <Button title="Menu" color= "#841584" onPress={() => navigation.toggleDrawer()} />
      </HeaderContainer>
      <Title>Your profile</Title>
      <View>
          <Text>Enter your name</Text>
          <StyledTextInput
            numberOfLines={1}
            onChangeText={onNameChange}
            value={name}
            placeholder="..."
          />
        <Button 
          title="Save to Home Screen"
          color= "#841584" 
          onPress={() => {
            navigation.navigate('Home', { profilename: name });
          }}
        />
      </View>
    </View>
  );
};
