// ! IMPORTS
import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

// ! <-- CUSTOM HOOKS --> 
import useOrders from '../hooks/useOrders';

// ! <-- COMPONENTS --> 
import OrderCard from '../components/OrderCard';

// ! <-- STYLING --> 
import tw from 'twrnc'
import { Button, Image } from '@rneui/themed';



const OrdersScreen = () => {

  const { loading, error, orders } = useOrders();
  const [ascending, setAscending] = useState<boolean>(true);

  return (
    <View style={tw`h-full bg-[#EB6A7C]`}>
      <Image
        containerStyle={tw`w-full h-64 border-b`}
        source={{ uri: 'https://links.papareact.com/m51' }}
      />

      <ScrollView style={tw`pt-3`}>
        <View style={tw`flex-row mx-3.5`}>
          <Button 
            containerStyle={tw`rounded-3xl`}
            onPress={() => {
              setAscending(false)
            }}
            color='white'
            titleStyle={tw`text-black`}
          >
            Recently ordered
          </Button>

          <Button 
            containerStyle={tw`rounded-3xl mx-2`}
            onPress={() => {
              setAscending(true)
            }}
            color='white'
            titleStyle={tw`text-black`}
          >
            Oldest first
          </Button>
        </View>

        {orders?.sort((a, b) => {
          if(ascending) {
            return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
          } else {
            return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1;
          }
        }).map(order => (
          <OrderCard key={order.trackingId} item={order}/>
        ))}
      </ScrollView>
    </View>
  )
}

export default OrdersScreen