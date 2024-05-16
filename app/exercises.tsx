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

const exercises = () => {
  const router = useRouter();
  const item = useLocalSearchParams();
  const { data } = useQuery({
    queryKey: ["exercises", item],
    queryFn: () => getExercisesByBodyPart(item?.name as string),
    enabled: !!item,
  });

  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={item?.image as any}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />
      <TouchableOpacity>
        <Text>{item?.name}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default exercises;
