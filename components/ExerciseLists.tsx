import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { BodyPartCard } from "./BodyParts";
import { Image } from "expo-image";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const ExerciseCard = ({ item, index }: { item: IExercise; index: number }) => {
  const router = useRouter();
  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index * 200)
        .springify()}
      className="w-1/2"
    >
      <TouchableOpacity
        className="flex py-3 space-y-2"
        onPress={() =>
          router.push({
            pathname: "/exerciseDetails",
            params: item as any,
          })
        }
      >
        <View
          className="rounded-[25px] bg-neutral-200 shadow mb-14"
          style={{ width: 130, height: 140 }}
        >
          <Image
            source={{ uri: item?.gifUrl }}
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
            style={{
              width: widthPercentageToDP(43),
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
    </Animated.View>
  );
};

const ExerciseLists = ({ data }: { data: IExercise[] }) => {
  return (
    <View className="flex flex-row flex-wrap justify-between">
      {data?.map((item, index) => (
        <ExerciseCard key={item?.id} item={item} index={index} />
      ))}
    </View>
  );
};

export default ExerciseLists;
