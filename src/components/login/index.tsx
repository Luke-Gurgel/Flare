import React from "react"
import { StatusBar } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { NavigationProps } from "src/types/index"
import { GradientPage, CloseButton, LogoContainer, AppName } from "./styled"
import { LogoIcon } from "src/components/common"
import LoginForm from "./LoginForm"
import SignupInvite from "./SignupInvite"

const Login = ({ navigation }: NavigationProps) => {
  const dismiss = () => {
    navigation.dismiss && navigation.dismiss()
  }

  const goToSignupPage = () => {
    navigation.navigate && navigation.navigate("signup")
  }

  return (
    <GradientPage>
      <KeyboardAwareScrollView scrollEnabled={false}>
        <StatusBar barStyle="light-content" />
        <CloseButton onPress={dismiss} />
        <LogoContainer>
          <LogoIcon size={150} color="#04d697" />
          <AppName>Flare</AppName>
        </LogoContainer>
        <LoginForm />
      </KeyboardAwareScrollView>
      <SignupInvite goToSignupPage={goToSignupPage} />
    </GradientPage>
  )
}

export default Login
