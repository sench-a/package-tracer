import React from 'react'
import { View, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import tw from 'twrnc';
import { Card, Icon, Divider } from '@rneui/themed';
import useOrderedItems from '../hooks/useOrderedItems';


type DeliveryCardProps = {
    order: Order
    screen: string;
}

const DeliveryCard = ({ order, screen }: DeliveryCardProps) => {
    const orderedItems = useOrderedItems(order.ID);
    
    return (
        <Card 
            containerStyle={[
                screen === 'customers' 
                            ? tw`bg-[#59C1CC] rounded-xl border-[#59C1CC]` 
                            : tw`bg-[#EB6A7C] rounded-xl border-[#EB6A7C]` , 
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
                
                <Text style={tw`text-center font-bold text-lg`}>Order ID: { order.ID }</Text>
                <Text style={tw`text-center font-bold text-base`}>Ordered: {new Date(order.orderDate).toLocaleDateString('en-gb')}</Text>
                <Text style={tw`mt-3 text-center font-bold text-lg`}>Shipping address: </Text>
                <Text style={tw`mb-3 text-center text-base`}>{ order.Address }, { order.City }</Text>

                <Divider color="black"/>

                {orderedItems?.map((item: Item) => (
                    <View style={tw`flex-row justify-center items-center my-2`}>
                        <Text style={tw`text-base italic mx-3`}>{item.name}</Text>
                        <Text style={tw`font-bold mt-0.5`}>x{item.quantity}</Text>
                    </View>
                ))} 
                
                <View>
                    <MapView
                        style={[tw`w-full mt-5 rounded-xl`, { height: 200 } ]}
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