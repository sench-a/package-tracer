import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import { Card, Icon } from '@rneui/themed';
import useOrderedItems from '../hooks/useOrderedItems';


type OrderCardProps = {
    order: Order;
}

const OrderCard = ({ order }: OrderCardProps) => {
    const navigation = useNavigation<OrdersScreenNavigationProp>();
    const orderedItems = useOrderedItems(order.ID)

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("Order", { order: order })
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
                            <Text style={tw`text-lg font-bold`}>ID: {order.ID}</Text>
                        </View> 
                        
                        <View style={tw`flex-row items-center mt--1.5`}>
                            <Text style={tw`font-bold`}>{orderedItems?.length}x</Text>
                            <Icon
                                name="cart-outline"
                                type="ionicon"
                                size={40}
                                color='#EB6A7C'
                            />
                        </View>

                    </View>
                    
                    <View style={tw`flex-row items-end`}>

                        <Icon
                            name="truck"
                            type="feather"
                            style={tw`ml-1 mr-2`}
                        />
                        <Text style={tw`font-bold`}>Ordered: </Text>
                        <Text>{new Date(order.orderDate).toLocaleDateString('en-gb')}</Text>

                    </View>
                    
                </View>
            </Card>
        </TouchableOpacity>
    )
}

export default OrderCard