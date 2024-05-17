import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "expo-image";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

const ExerciseDetails = () => {
  const item: any = useLocalSearchParams();
  const router = useRouter();
  console.log("the item is", item?.instructions);
  return (
    <View className="flex flex-1 pt-10">
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image
          source={{ uri: item?.gifUrl as any }}
          className="rounded-b-[40px]"
          contentFit="cover"
          style={{
            width: widthPercentageToDP(100),
            height: widthPercentageToDP(100),
          }}
        />
        <TouchableOpacity
          onPress={() => router.back()}
          className="absolute flex items-center justify-center mx-4 rounded-full top-4 bg-rose-400"
          style={{
            width: 40,
            height: 40,
          }}
        >
          <Ionicons name="caret-back-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView
        className="mx-4 mt-6 space-y-2"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        <Text
          style={{
            fontSize: heightPercentageToDP(3),
          }}
          className="mb-3 font-semibold tracking-wide capitalize text-neutral-800"
        >
          {item?.name}
        </Text>
        <View className="flex flex-row space-x-2">
          <Text
            style={{
              fontSize: heightPercentageToDP(2),
            }}
            className="tracking-wide text-neutral-700"
          >
            Equipment:
          </Text>
          <Text
            style={{
              fontSize: heightPercentageToDP(2),
            }}
            className="font-bold tracking-wide capitalize text-neutral-800"
          >
            {item?.equipment}
          </Text>
        </View>
        <View className="flex flex-row space-x-2">
          <Text
            style={{
              fontSize: heightPercentageToDP(2),
            }}
            className="tracking-wide text-neutral-700"
          >
            Secondary Muscles:
          </Text>
          <Text
            style={{
              fontSize: heightPercentageToDP(2),
            }}
            className="font-bold tracking-wide capitalize text-neutral-800"
          >
            {item?.secondaryMuscles}
          </Text>
        </View>
        <View className="flex flex-row mb-4 space-x-2">
          <Text
            style={{
              fontSize: heightPercentageToDP(2),
            }}
            className="tracking-wide text-neutral-700"
          >
            Target:
          </Text>
          <Text
            style={{
              fontSize: heightPercentageToDP(2),
            }}
            className="font-bold tracking-wide capitalize text-neutral-800"
          >
            {item?.target}
          </Text>
        </View>

        <Text
          style={{
            fontSize: heightPercentageToDP(3),
          }}
          className="mb-2 tracking-wide text-neutral-700"
        >
          Instructions:
        </Text>
        {item?.instructions
          ?.split(",")
          .map((instruction: string, index: number) => (
            <Text
              key={instruction}
              style={{
                fontSize: heightPercentageToDP(1.8),
              }}
              className="text-neutral-800"
            >
              {index + 1}. {instruction}
            </Text>
          ))}
      </ScrollView>
    </View>
  );
};

export default ExerciseDetails;
