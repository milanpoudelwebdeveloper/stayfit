import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();
  return (
    <View className="flex justify-end flex-1">
      <StatusBar style="light" />
      <Image
        source={require("@/assets/images/cover.webp")}
        className="absolute w-full h-full"
      />
      <Animated.View
        entering={FadeInDown.delay(100).springify()}
        className="flex flex-row items-center justify-center gap-2"
      >
        <Text className="text-white" style={{ fontSize: hp(5) }}>
          Best
        </Text>
        <Text className="text-rose-500" style={{ fontSize: hp(5) }}>
          Workouts
        </Text>
      </Animated.View>
      <Animated.View
        entering={FadeInDown.delay(100).springify()}
        className="flex-row items-center justify-center gap-2"
      >
        <Text className="text-white" style={{ fontSize: hp(5) }}>
          For you
        </Text>
      </Animated.View>
      <Animated.View
        entering={FadeInDown.delay(100).springify()}
        className="mt-10 mb-14"
      >
        <TouchableOpacity
          style={{ height: hp(8), width: wp(80) }}
          onPress={() => router.push("homepage")}
          className="w-full border-[2px] border-neutral-200 bg-rose-500 flex items-center justify-center mx-auto p-3 rounded-full"
        >
          <Text
            className="font-bold tracking-widest text-white"
            style={{ fontSize: hp(3) }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default Home;
