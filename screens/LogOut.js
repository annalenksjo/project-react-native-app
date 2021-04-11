import React, { Component, useState } from 'react';
import { Text, Button } from 'react-native';
import styled from 'styled-components/native';


//STYLED COMPONENTS
const HeaderContainer = styled.View`
  margin-top: 100px;
  display: flex;
  background: lightgrey;
`;

const MainContainer = styled.View`
  display: flex;
  align-items: center;
  height: 100%;
  background-color: pink;
  padding: 50px 20px;
`;

const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 30%;
`;

export const LogOut = ({ navigation }) => {
  const [logOut, onLogOut] = useState(false)


if(logOut) {
  return (
    <MainContainer>
      <Title>You are logged out, see you next time!</Title>
    </MainContainer>
  );
} else {
    return (
      <>
        <HeaderContainer>
          <Button 
            title="Menu" 
            color= "#841584" 
            onPress={() => navigation.toggleDrawer()} 
          />
        </HeaderContainer>
        <MainContainer>
            <Title>Log out?</Title>
            <ButtonContainer>
              <Button 
                title="YES" 
                color= "#841584" 
                onPress={() => onLogOut(true)} 
              />
              <Button 
                title="NO" 
                color= "#841584" 
                onPress={() => navigation.navigate('Home')}
              />
            </ButtonContainer>
        </MainContainer>
      </>
  )
}  
};
