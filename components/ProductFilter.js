import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import FilterModal from './FilterModal';
import {SORT_BY} from '../config/global/Constant';
import {useDispatch, useSelector} from 'react-redux';
import {filterProducts, getAllProducts, sortProducts} from '../redux/actions';

const ProductFilter = () => {
  const [showModal, setShowModal] = useState(false);
  const [filterData, setFilterData] = useState('Filter');
  const [modalData, setModalData] = useState([]);
  const [sortData, setSortBy] = useState('Sort');
  const [isFilter, setIsFilter] = useState(true);

  const dispatch = useDispatch();
  const categories = useSelector(state => state.products.categories);

  useEffect(() => {
    dispatch(filterProducts(filterData === 'All' ? 'Filter' : filterData));
    if (sortData === 'Low to High') {
      dispatch(sortProducts('asc'));
    } else if (sortData === 'High to Low') {
      dispatch(sortProducts('desc'));
    } else {
      dispatch(getAllProducts());
    }
  }, [filterData, sortData]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.filter}
        onPress={() => {
          setModalData([...categories, 'All']);
          setShowModal(true);
          setIsFilter(true);
        }}>
        <Text>{filterData === 'All' ? 'Filter' : filterData}</Text>
        <Image source={require('../assets/img/down-arrow.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.filter}
        onPress={() => {
          setModalData(SORT_BY);
          setShowModal(true);
          setIsFilter(false);
        }}>
        <Text>{sortData}</Text>
        <Image source={require('../assets/img/down-arrow.png')} />
      </TouchableOpacity>
      <FilterModal
        showModal={showModal}
        setShowModal={setShowModal}
        data={modalData}
        setData={isFilter ? setFilterData : setSortBy}
      />
    </View>
  );
};

export default ProductFilter;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    paddingHorizontal: 14,
    paddingBottom: 0,
    flexDirection: 'row',
  },
  filter: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 4,
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
