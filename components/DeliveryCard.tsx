import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import tw from 'twrnc';
import { Card, Icon, Divider } from '@rneui/themed';
import useOrderedItems from '../hooks/useOrderedItems';


type DeliveryCardProps = {
    order: Order
    screen: string;
}

const DeliveryCard = ({ order, screen }: DeliveryCardProps) => {
    const { orderedItems, isLoading, error } = useOrderedItems(order.ID);
    
    return (
        <Card 
            containerStyle={[
                screen === 'customers' 
                            ? tw`bg-[#59C1CC] rounded-xl border-[#59C1CC]` 
                            : tw`bg-[#EB6A7C] rounded-xl border-[#EB6A7C]`, 
                // customizable drop-shadow filter
                {shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,
                elevation: 6}
            ]}
        >
            <View>
                <Icon
                    name='cube-outline'
                    type='ionicon'
                    size={45}
                />
                
                <Text style={tw`text-center font-bold text-lg`}>
                    Order ID: { order.ID }
                </Text>
                <Text style={tw`text-center font-bold text-base`}>
                    Ordered: {new Date(order.orderDate).toLocaleDateString('en-gb')}
                </Text>
                <Text style={tw`mt-3 text-center font-bold text-lg`}>
                    Shipping address: 
                </Text>
                <Text style={tw`mb-3 text-center text-base`}>
                    { order.address }
                </Text>

                <Divider color="black"/>

                {isLoading 
                    ? <ActivityIndicator/>
                    : <></>
                }

                {error  
                    ? <Text>Unable to download data.</Text>
                    : <></>
                }

                {orderedItems?.map((item: Item) => (
                    <View style={tw`flex-row justify-center items-center my-2`}>
                        <Text style={tw`text-base italic mx-3`}>{ item.item }</Text>
                        <Text style={tw`font-bold mt-0.5`}>x{ item.quantity }</Text>
                    </View>
                ))} 
                
                <View>
                    <MapView
                        style={[tw`w-full mt-5 rounded-xl`, { height: 200 } ]}
                        provider='google'
                        initialRegion={{
                            latitude: order.lat,
                            longitude: order.lng,
                            latitudeDelta: 0.005,
                            longitudeDelta: 0.005,
                        }} 
                        loadingEnabled={true}
                        
                    >
                        {order.lat && order.lng && (
                            <Marker
                                coordinate={{
                                    latitude: order.lat,
                                    longitude: order.lng,
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