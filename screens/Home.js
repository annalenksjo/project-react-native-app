import React, { useState, useEffect } from 'react';
import { Button, View } from 'react-native';
import styled from 'styled-components/native';

//STYLED COMPONENTS

const HeaderContainer = styled.View`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  background: pink;
  padding: 20px;
`;

const MenuButton = styled.Button`
  width: 80px;
`;

const MainContainer = styled.View`
  display: flex;
  align-items: center;
  height: 100%;
  background: pink;
  padding-top: 50px;
`;

const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const SubText = styled.Text`
  font-size: 22px;
  margin-bottom: 30px;
  text-align: center;
  padding: 5px;
`;

const MainImage = styled.Image`
  height: 200px;
  width: 200px;
  margin-bottom: 10px;
`;

export const Home = ({ route, navigation }) => {

  React.useEffect(() => {
  }, [route.params?.profilename]);

  const [dogImage, setDogImage] = useState({})

  const DOGIMAGE_API = 'https://random.dog/woof.json'

  useEffect(() => {
    fetch(DOGIMAGE_API)
    .then (response => response.json())
    .then (data => {setDogImage(data)
    })
  },[])

  const updateDogImage = () => {
    fetch(DOGIMAGE_API)
    .then (response => response.json())
    .then (data => setDogImage(data))
  }


// This catches the value of dogImage before the fetch is completed
  if (dogImage === undefined) {
    return (
      <></>
    )
  } 

return (
    <View>
      <HeaderContainer>
        <MenuButton 
          title="Menu" 
          color= "#841584" 
          onPress={() => navigation.toggleDrawer()} 
        />
      </HeaderContainer>
      <MainContainer>
        <Title> Welcome {route.params?.profilename}!</Title>
        <SubText>This is a random app with a dog image API, and you can also store your name in "Profile"!</SubText>
        <MainImage
          source={{uri:`${dogImage.url}`}}      
        />
        <Button 
          title="Gimme a new puppy pic" 
          onPress={updateDogImage} 
          color="purple"
        />
      </MainContainer>
    </View>
  );
};
