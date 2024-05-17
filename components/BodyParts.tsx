import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import { bodyParts } from "@/constants/index";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";

interface Props {
  item: { name: string; image: any };
  index: number;
}

export const BodyPartCard = ({ item, index }: Props) => {
  const router = useRouter();
  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index * 200)
        .springify()}
    >
      <TouchableOpacity
        style={{
          width: widthPercentageToDP(44),
          height: widthPercentageToDP(52),
        }}
        className="flex justify-end p-4 mb-4"
        onPress={() =>
          router.push({
            pathname: "exercises",
            params: {
              name: item?.name,
              image: item?.image,
            },
          })
        }
      >
        <Image
          source={item?.image}
          resizeMode="cover"
          style={{
            width: widthPercentageToDP(44),
            height: widthPercentageToDP(52),
          }}
          className="rounded-[35px] absolute"
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={{
            width: widthPercentageToDP(44),
            height: heightPercentageToDP(15),
          }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0 rounded-b-[35px]"
        />
        <Text
          style={{
            fontSize: heightPercentageToDP(2.3),
          }}
          className="text-lg font-semibold tracking-wide text-center text-white"
        >
          {item?.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const BodyParts = () => {
  return (
    <View className="mx-4">
      <Text
        style={{
          fontSize: widthPercentageToDP(5),
        }}
        className="font-semibold text-neutral-700"
      >
        Exercises
      </Text>
      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item?.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
          paddingTop: 20,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item, index }) => (
          <BodyPartCard key={index} item={item} index={index} />
        )}
      />
    </View>
  );
};

export default BodyParts;
