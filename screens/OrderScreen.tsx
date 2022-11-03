// ! IMPORTS
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// ! <-- NAVIGATION --> 
import { useNavigation, useRoute } from '@react-navigation/native';

// ! <-- COMPONENTS --> 
import DeliveryCard from '../components/DeliveryCard';

// ! <-- STYLING --> 
import { Icon } from '@rneui/themed';
import tw from 'twrnc'



const OrderScreen = () => {

    const navigation = useNavigation<OrderScreenNavigationProp>();
    const { params: { order } } = useRoute<OrderScreenRouteProp>();

    return (
        <View>

            <View style={tw`flex-row justify-center p-3`}>

                <Text style={tw`text-xl font-bold mt-4`}>{order.trackingItems.customers.name}</Text>

                <TouchableOpacity 
                    style={tw`absolute z-50 right-5 top-5`}
                    onPress={() => navigation.goBack()}
                >
                    <Icon
                        name='close-outline'
                        type='ionicon'
                        size={38}
                        color="black"
                    />
                </TouchableOpacity> 
            </View>

            <DeliveryCard key={order.trackingItems.trackingId} order={order} fullHeight={true}/>
        </View>
    )
    }

export default OrderScreen