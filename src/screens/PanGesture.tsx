import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {CARD_HEIGHT, CARD_WIDTH, Card, Cards} from '../components/Card';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';

const PanGesture = () => {
  const {width, height} = useWindowDimensions();
  const boundX = width - CARD_WIDTH;
  const boundY = height - CARD_HEIGHT;
  const y = useSharedValue(0);
  const x = useSharedValue(0);

  const pan = Gesture.Pan()
    .onChange(e => {
      y.value += e.changeY;
      x.value += e.changeX;
    })
    .onFinalize(e => {
      y.value = withDecay({
        velocity: e.velocityY,
        clamp: [0, boundY],
      });
      x.value = withDecay({
        velocity: e.velocityX,
        clamp: [0, boundX],
      });
    });

  const style = useAnimatedStyle(() => ({
    transform: [{translateX: x.value}, {translateY: y.value}],
  }));
  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetector gesture={pan}>
        <Animated.View {...{style}}>
          <Card card={Cards.Card2} />
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default PanGesture;
