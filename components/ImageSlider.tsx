import { Dimensions, Image, SafeAreaView, View } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import { sliderImages } from "@/constants/index";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const baseOptions = {
  parallaxScrollingOffset: 70,
  parallaxScrollingScale: 1,
  parallaxAdjacentItemScale: 1,
};

const ImageSlider = () => {
  const windowDimensions = Dimensions.get("screen");
  return (
    <SafeAreaView className="flex h-[190px] mt-7">
      <Carousel
        style={{
          alignSelf: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
        width={windowDimensions.width}
        defaultIndex={0}
        data={sliderImages}
        scrollAnimationDuration={1000}
        mode="parallax"
        modeConfig={baseOptions}
        renderItem={({ index }) => (
          <View
            style={{ width: wp(100) - 90, maxHeight: hp(25) }}
            className="self-center"
          >
            <Image
              source={sliderImages[index]}
              className="w-full h-full rounded-lg"
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ImageSlider;
