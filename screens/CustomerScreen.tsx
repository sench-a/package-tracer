// ! IMPORTS
import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

// ! <-- NAVIGATION --> 
import { useNavigation, useRoute } from '@react-navigation/native';

// ! <-- CUSTOM HOOKS --> 
import useCustomerOrders from '../hooks/useCustomerOrders'

// ! <-- COMPONENTS --> 
import DeliveryCard from '../components/DeliveryCard';

// ! <-- STYLING --> 
import tw from 'twrnc';
import { Icon } from '@rneui/themed';



const CustomerScreen = () => {

    const navigation = useNavigation<CustomerScreenNavigationProp>();
    const {params: {name, userId}} = useRoute<CustomerScreenRouteProp>();

    const { loading, error, orders } = useCustomerOrders(userId);

    return (
        <View style={tw`bg-white`}>

            <View style={tw`flex-col items-center pt-5 pb-2`}>

                <TouchableOpacity 
                    style={tw`absolute z-50 top-3 right-4`}
                    onPress={() => navigation.goBack()}
                >
                    <Icon
                        name='close-outline'
                        type='ionicon'
                        size={38}
                        color="black"
                    />
                </TouchableOpacity>

                <Text style={tw`text-2xl font-bold`}>{name}</Text>
                <Text style={tw`text-lg`}>Deliveries</Text>
                
            </View>

            <View style={tw`bg-white`}>
                <FlatList
                    data={orders}
                    keyExtractor={order => order.trackingId}
                    renderItem={({item: order}) => <DeliveryCard key={order.trackingId} order={order}/>}
                />
            </View>
        </View>
    )
}

export default CustomerScreen