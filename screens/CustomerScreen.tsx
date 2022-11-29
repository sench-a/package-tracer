import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import DeliveryCard from '../components/DeliveryCard';
import tw from 'twrnc';
import { Icon } from '@rneui/themed';
import { useCustomerOrders } from '../hooks/useCustomerOrders';


const CustomerScreen = () => {
    const navigation = useNavigation<CustomerScreenNavigationProp>();
    const { params: { customerName, customerID }} = useRoute<CustomerScreenRouteProp>();
    const { customerOrders } = useCustomerOrders(customerID);

    return (
        <View style={tw`bg-white h-full`}>

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

                <Text style={tw`text-2xl font-bold`}>{customerName}</Text>
                <Text style={tw`text-lg`}>Deliveries</Text>
                
            </View>

            {<FlatList
                data={customerOrders}
                keyExtractor={(item: Order) => item.ID}
                renderItem={({item: order}) => 
                    <DeliveryCard 
                        key={order.ID}
                        order={order}
                        screen='customers'
                    />}
            />}
            
            
        </View>
    )
}

export default CustomerScreen