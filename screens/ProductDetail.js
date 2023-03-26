import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {useEffect, useLayoutEffect} from 'react';
import ProductCard from '../components/ProductCard';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getProduct, removeDetailedProduct} from '../redux/actions';

const ProductDetail = ({route}) => {
  const {id} = route.params;
  const navigation = useNavigation();

  const product = useSelector(state => state.productDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: product.detail.title,
    });
    navigation.addListener('blur', () => {
      dispatch(removeDetailedProduct());
    });
  }, [navigation, product.loading]);

  if (product.loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size={'large'} color="#f00" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ProductCard
        id={product?.detail?.id}
        name={product?.detail?.title}
        price={product?.detail?.price}
        rating={product?.detail?.rating?.rate}
        image={product?.detail?.image}
        detail
        desc={product?.detail?.description}
      />
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
});
