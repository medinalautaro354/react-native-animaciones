import {Dimensions, Image, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * ratio;
export const assets = [
  require('../../assets/images/card1.png'),
  require('../../assets/images/card2.png'),
  require('../../assets/images/card3.png'),
  require('../../assets/images/card4.png'),
  require('../../assets/images/card5.png'),
  require('../../assets/images/card6.png'),
];

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 16,
  },
});

export enum Cards {
  Card1 = 0,
  Card2 = 1,
  Card3 = 2,
  Card4 = 3,
  Card5 = 4,
  Card6 = 5,
}

export const cards = [
  Cards.Card1,
  Cards.Card2,
  Cards.Card3,
  Cards.Card4,
  Cards.Card5,
  Cards.Card6,
];

interface CardProps {
  card: Cards;
}

export const Card = ({card}: CardProps) => {
  return <Image style={styles.card} source={assets[card]} />;
};
