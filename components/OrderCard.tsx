// ! IMPORTS
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// ! <-- NAVIGATION --> 
import { useNavigation } from '@react-navigation/native';

// ! <-- STYLING --> 
import tw from 'twrnc';
import { Card, Icon } from '@rneui/themed';



type Props = {
    item: Order
}

const OrderCard = ({ item } : Props) => {

    const navigation = useNavigation<OrdersScreenNavigationProp>();

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("Order", { order: item })
            }}
        >
            <Card containerStyle={[
                tw`rounded-xl`,
                {shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,
                elevation: 6}
            ]}>
                <View style={tw`flex-col`}>

                    <View style={tw`flex-row justify-between`}>

                        <View style={tw`flex-col`}>
                            <Text style={tw`text-lg font-bold`}>Order ID: {item.trackingId}</Text>
                            <Text style={tw`text-base font-bold`}>Name: {item.trackingItems.customers.name}</Text>
                        </View> 
                        
                        <View style={tw`flex-row items-center mt--1.5`}>
                            <Text style={tw`font-bold`}>{item.trackingItems.items.length}x</Text>

                            <Icon
                                name="cart-outline"
                                type="ionicon"
                                size={40}
                                color='#EB6A7C'
                            />
                        </View>

                    </View>
                    

                    <View style={tw`flex-row items-end mt-3`}>

                        <Icon
                            name="truck"
                            type="feather"
                            style={tw`ml-1 mr-2`}
                        />

                        <Text style={tw`font-bold`}>Ordered: </Text>
                        <Text>{new Date(item.createdAt).toLocaleDateString('en-gb')}</Text>
                    
                    </View>
                    
                </View>
            </Card>
        </TouchableOpacity>
    )
}

export default OrderCard