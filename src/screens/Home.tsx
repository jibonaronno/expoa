import styled from 'styled-components/native'
import { Stack } from 'expo-router'
import LinkButton from 'src/components/LinkButton'
import ScreenLayout from 'src/layouts/ScreenLayout'
import AccelDemo from './motionY'

export default function HomeScreen() {
  return (
    <AccelDemo/>
    // <ScreenLayout testID="home-screen-layout">
    //   <S.Content testID="home-screen-content">
    //     <Stack.Screen options={{ title: 'Home Screen' }} />

    //     <S.Title testID="home-screen-title">🏠 Home Screen 🏠</S.Title>
    //     <S.Text testID="home-screen-text">Go to src/screens/Home.tsx to edit</S.Text>

    //     <LinkButton href="/second" text="Go To Second Screen" />
    //   </S.Content>
    // </ScreenLayout>
  )
}

const S = {
  Content: styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
  `,
  Title: styled.Text`
    color: ${p => p.theme.primary};
    font-family: helvetica;
    font-weight: 900;
    font-size: ${p => p.theme.dimensions(20, 'px')};
    margin-bottom: ${p => p.theme.dimensions(10, 'px')};
  `,
  Text: styled.Text`
    color: ${p => p.theme.primary};
    font-family: helvetica;
    font-weight: 300;
    font-size: ${p => p.theme.dimensions(15, 'px')};
    margin-bottom: ${p => p.theme.dimensions(15, 'px')};
  `
}
