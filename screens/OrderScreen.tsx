import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import DeliveryCard from '../components/DeliveryCard';
import { Icon } from '@rneui/themed';
import tw from 'twrnc'
import {useCustomer} from '../hooks/useCustomers';



const OrderScreen = () => {

    const navigation = useNavigation<OrderScreenNavigationProp>();
    const { params: { order } } = useRoute<OrderScreenRouteProp>();
    const customer = useCustomer(order.customerID);

    return (
        <View>

            <View style={tw`flex-row justify-center p-3`}>

                <Text style={tw`text-2xl font-bold mt-4`}>{customer?.name}</Text>

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

            <DeliveryCard key={order.ID} order={order} screen={order}/>
        
        </View>
    )
    }

export default OrderScreen