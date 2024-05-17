import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { BodyPartCard } from "./BodyParts";
import { Image } from "expo-image";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const ExerciseCard = ({ item }: { item: IExercise }) => {
  return (
    <View className="w-1/2">
      <TouchableOpacity className="flex py-3 space-y-2">
        <View
          className="rounded-[25px] bg-neutral-200 shadow"
          style={{ width: 150, height: 150 }}
        >
          <Image
            source={{ uri: item?.gifUrl }}
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
            style={{
              width: widthPercentageToDP(44),
              height: widthPercentageToDP(52),
            }}
            className="rounded-[25px]"
          />
        </View>
        <Text
          style={{ fontSize: heightPercentageToDP(1.7) }}
          className="text-lg font-semibold tracking-wide text-center text-neutral-700"
        >
          {item?.name?.length > 20
            ? item?.name?.substring(0, 20) + "..."
            : item?.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const ExerciseLists = ({ data }: { data: IExercise[] }) => {
  return (
    <View className="flex flex-row flex-wrap justify-between">
      {data?.map((item) => (
        <ExerciseCard key={item?.id} item={item} />
      ))}
    </View>
  );
};

export default ExerciseLists;
