import React, { ReactElement } from "react"
import { View, Text, Button, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"

function NotFoundScreen(): ReactElement {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>404 - Page Not Found</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Landing ")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
})

export default NotFoundScreen
