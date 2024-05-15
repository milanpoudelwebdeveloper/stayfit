import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";

const exercises = () => {
  const router = useRouter();
  const item = useLocalSearchParams();

  console.log(item);
  return (
    <View className="mt-20">
      <Text>exercises</Text>
      <TouchableOpacity onPress={() => router.back()}>
        <Text> Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default exercises;
