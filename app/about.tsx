import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const About = () => {
  return (
    <SafeAreaView className="flex flex-1 space-y-5 bg-white" edges={["top"]}>
      <Text>About</Text>
    </SafeAreaView>
  );
};

export default About;
