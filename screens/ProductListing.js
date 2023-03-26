import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import ProductCard from '../components/ProductCard';
import ProductFilter from '../components/ProductFilter';
import {useDispatch, useSelector} from 'react-redux';
import {getAllProducts} from '../redux/actions';

const ProductListing = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  if (products.loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size={'large'} color="#f00" />
      </View>
    );
  }

  return (
    <>
      <ProductFilter />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContainer}>
        {products?.products?.map((item, index) => (
          <ProductCard
            id={item.id}
            key={index}
            name={item.title}
            price={item.price}
            rating={item.rating.rate}
            image={item.image}
          />
        ))}
      </ScrollView>
    </>
  );
};

export default ProductListing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    paddingHorizontal: 0,
  },
  scrollContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 20,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
