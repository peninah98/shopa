import React from "react"
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
} from "react-native-reanimated"

function Landing() {
  const navigation = useNavigation()
  const spin = useSharedValue(0)

  const frontAnimatedStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [0, 180])
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, { duration: 500 }),
        },
      ],
    }
  })

  const backAnimatedStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [180, 360])
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, { duration: 500 }),
        },
      ],
    }
  })

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.front, frontAnimatedStyle]}>
        <Image
          style={styles.images}
          source={require("../assets/loginImage.png")}
        />
      </Animated.View>
      <Animated.View style={[styles.back, backAnimatedStyle]}>
        <Image source={require("../assets/light.png")} />
      </Animated.View>
      <TouchableOpacity
        style={styles.toggle}
        onPress={() => (spin.value = spin.value ? 0 : 1)}>
        <Text>Front View</Text>
      </TouchableOpacity>
      <View className="w-full">
        <TouchableOpacity
          className="w-full bg-sky-400 mb-3 p-3 rounded-2xl"
          onPress={() => navigation.navigate("Login")}>
          <Text className="text-xl font-bold text-white text-center">
            Get started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Landing

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  front: {
    height: 400,
    width: 250,
    backgroundColor: "#D8D9CF",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backfaceVisibility: "hidden",
    position: "absolute",
  },
  back: {
    height: 400,
    width: 250,
    backgroundColor: "#FF8787",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backfaceVisibility: "hidden",
  },
  images: {
    width: 200,
    height: 100,
    borderRadius: 10,
    transform: "translate",
  },
  toggle: {
    borderColor: "gray",
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
})
