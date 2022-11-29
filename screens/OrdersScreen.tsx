import React, { useState } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import OrderCard from '../components/OrderCard';
import tw from 'twrnc'
import { Button, Image } from '@rneui/themed';
import { useOrders } from '../hooks/useOrders';


const OrdersScreen = () => {

  const { orders, isLoading } = useOrders();
  const [ascending, setAscending] = useState<boolean>(true);

  return (
    <View style={tw`h-full bg-[#EB6A7C]`}>
      <View style={{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6
        }}
      >
        <Image
          containerStyle={tw`w-full h-64`}
          source={{ uri: 'https://links.papareact.com/m51' }}
        />
      </View>

      <View style={tw`absolute w-full z-50 top-53.5 flex-row px-3.5`}>
        <Button 
          containerStyle={tw`rounded-3xl border`}
          onPress={() => {
            setAscending(false)
          }}
          color={ascending ? 'white' : 'black'}
          titleStyle={ascending ? tw`text-black` : tw`text-white`}
        >
          Recently ordered
        </Button>

        <Button 
          containerStyle={tw`rounded-3xl mx-2 border`}
          onPress={() => {
            setAscending(true)
          }}
          color={ascending ? 'black' : 'white'}
          titleStyle={ascending ? tw`text-white` : tw`text-black`}
        >
          Oldest first
        </Button>
      </View>

      <ScrollView style={tw`pt-3`}>

        {isLoading && 
          <ActivityIndicator/>
        }

        {orders?.sort((a, b) => {
            if(ascending) {
              return new Date(a.orderDate) > new Date(b.orderDate) ? 1 : -1;
            } else {
              return new Date(a.orderDate) < new Date(b.orderDate) ? 1 : -1;
            }})
          .map((order: Order) => <OrderCard key={order.ID} order={order}/>)
        }
        
      </ScrollView>
    </View>
  )
}

export default OrdersScreen