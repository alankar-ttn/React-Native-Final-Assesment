import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductListing from '../../screens/ProductListing';
import ProductDetail from '../../screens/ProductDetail';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductListing"
        component={ProductListing}
        options={{headerTitle: 'Fake Products', headerTitleAlign: 'center'}}
      />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default Routes;
