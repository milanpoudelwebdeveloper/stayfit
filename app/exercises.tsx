import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { getExercisesByBodyPart } from "@/api/exerciseDB";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import ExerciseLists from "@/components/ExerciseLists";

const exercises = () => {
  const router = useRouter();
  const item = useLocalSearchParams();
  const { data } = useQuery({
    queryKey: ["exercises", item],
    queryFn: () => getExercisesByBodyPart(item?.name as string),
    enabled: !!item,
  });

  console.log("here data coming is", data);
  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={item?.image as any}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />
      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute flex items-center justify-center mx-4 rounded-full bg-rose-400"
        style={{
          width: hp(5.5),
          height: hp(5.5),
          marginTop: hp(7),
        }}
      >
        <Ionicons name="caret-back-outline" size={hp(3)} color="white" />
      </TouchableOpacity>
      <View className="mx-4 mt-4 space-y-3">
        <Text>{item?.name} exercises</Text>
        <View className="mb-10">
          <ExerciseLists data={data} />
        </View>
      </View>
    </ScrollView>
  );
};

export default exercises;
