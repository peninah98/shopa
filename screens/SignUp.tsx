import { StatusBar } from "expo-status-bar"
import React from "react"
import { useNavigation } from "@react-navigation/native"

import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native"
import Animated, { FadeIn, FadeInDown, FadeInUp } from "react-native-reanimated"

function SignUp() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("../assets/background.png")}
        className="w-full h-full absolute"
      />
      <View className="flex-row justify-around w-full">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          source={require("../assets/light.png")}
          className="h-[225] w-[90]"
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          source={require("../assets/light.png")}
          className="h-[160] w-[65]"
        />
      </View>
      <View className="h-ull w-full flex justify-around pt-24 pb-10">
        <Animated.View
          entering={FadeInDown.duration(1000).springify()}
          className="flex items-center">
          <Animated.Text
            entering={FadeInUp.delay(400).duration(1000).springify()}
            className="text-white font-bold tracking-wider text-5xl -top-20">
            SignUp
          </Animated.Text>
        </Animated.View>
        <View className="flex items-center mx-4 space-y-4">
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            className="bg-black/5 p-3 rounded-2xl w-full">
            <TextInput
              placeholder="UserName"
              placeholderTextColor={"black"}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            className="bg-black/5 p-3 rounded-2xl w-full">
            <TextInput
              placeholder="Email"
              placeholderTextColor={"black"}
            />
          </Animated.View>
          <View className="bg-black/5 p-3 rounded-2xl w-full">
            <TextInput
              placeholder="Email"
              placeholderTextColor={"black"}
              secureTextEntry
            />
          </View>
          <View className="w-full">
            <TouchableOpacity className="w-full bg-sky-400 mb-3 p-3 rounded-2xl">
              <Text className="text-xl font-bold text-white text-center">
                Sign UP
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center">
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.push("Login")}>
              <Text className="text-sky-600">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: { backgroundColor: "white", flex: 1 },
})
