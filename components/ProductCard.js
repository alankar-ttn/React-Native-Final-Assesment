import {Image, Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ProductCard = ({image, rating, price, id, name, detail, desc}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={[styles.container, {width: detail ? '98%' : '45%'}]}
      onPress={() => navigation.navigate('ProductDetail', {id})}>
      <Image
        source={{uri: image}}
        style={[styles.image, {height: detail ? '70%' : 160}]}
        resizeMode="contain"
      />
      <Text style={styles.rating}>{rating}</Text>
      <Text style={styles.price}>${price}</Text>
      <Text style={styles.text} numberOfLines={1}>
        {name}
      </Text>
      {detail && <Text>{desc}</Text>}
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#fff',
    width: '45%',
    margin: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    elevation: 4,
    position: 'relative',
  },
  image: {
    height: 160,
    width: '100%',
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f00',
  },
  rating: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'red',
    padding: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    color: '#fff',
  },
});
