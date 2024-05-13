import { Image, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const HomePage = () => {
  return (
    <SafeAreaView className="flex flex-1 space-y-5 bg-white" edges={["top"]}>
      <StatusBar style="dark" />
      <View className="flex-row items-center justify-between mx-5">
        <View className="space-y-2">
          <Text
            style={{
              fontSize: hp(4.5),
            }}
            className="font-bold tracking-wider text-neutral-700"
          >
            READY TO
          </Text>
          <Text
            style={{
              fontSize: hp(4.5),
            }}
            className="font-bold tracking-wider text-rose-500"
          >
            WORKOUT
          </Text>
        </View>
        <View className="items-center justify-center space-y-2">
          <Image
            source={require("@/assets/images/cover.webp")}
            style={{
              width: hp(6),
              height: hp(6),
            }}
            className="rounded-full"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
