// ! IMPORTS
import React from 'react'
import { View, Text } from 'react-native'

// ! <-- CUSTOM HOOKS --> 
import useCustomerOrders from '../hooks/useCustomerOrders';

// ! <-- MAPS --> 
import MapView, { Marker } from 'react-native-maps';

// ! <-- STYLING --> 
import tw from 'twrnc';
import { Card, Icon } from '@rneui/themed';
import { Divider } from '@rneui/themed';



type Props = {
    order: Order;
    fullHeight?: boolean;
}

const DeliveryCard = ({ order, fullHeight }: Props) => {

    const { loading, error, orders } = useCustomerOrders(order.trackingId);
    
    return (
        <Card containerStyle={tw`${fullHeight ? "bg-[#EB6A7C] rounded-xl" : "bg-[#59C1CC] rounded-xl border-white"}`}>
            <View
                style={fullHeight && { height: "90%" }}
            >

                <Icon
                    name='cube-outline'
                    type='ionicon'
                    size={45}
                />
                
                <Text style={tw`text-center font-bold text-lg`}>Order ID: { order.trackingId }</Text>
                <Text style={tw`text-center font-bold text-base`}>Ordered: {new Date(order.createdAt).toLocaleDateString('en-gb')}</Text>
                <Text style={tw`mt-3 text-center font-bold text-lg`}>Shipping address: </Text>
                <Text style={tw`mb-3 text-center text-base`}>{ order.Address }, { order.City }</Text>

                <Divider color="black"/>

                {order.trackingItems.items.map(item => (
                    <View style={tw`flex-row justify-center items-center my-2`}>
                        <Text style={tw`text-base italic mx-3`}>{item.name}</Text>
                        <Text style={tw`font-bold mt-0.5`}>x{item.quantity}</Text>
                    </View>
                ))} 
                
                <View style={tw``}>
                    <MapView
                        style={[tw`w-full mt-5 rounded-xl`, fullHeight ? { height: 450 } : { height: 200 } ]}
                        provider='google'
                        initialRegion={{
                            latitude: order.Lat,
                            longitude: order.Lng,
                            latitudeDelta: 0.005,
                            longitudeDelta: 0.005,
                        }} 
                        loadingEnabled={true}
                        
                    >
                        {order.Lat && order.Lng && (
                            <Marker
                                coordinate={{
                                    latitude: order.Lat,
                                    longitude: order.Lng,
                                }}
                            />
                        )}
                    </MapView>
                </View>
                

            </View> 
        </Card>
        
    )
}

export default DeliveryCard