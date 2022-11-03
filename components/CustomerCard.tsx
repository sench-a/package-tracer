// ! IMPORTS 
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// ! <-- CUSTOM HOOKS --> 
import useCustomerOrders from '../hooks/useCustomerOrders';

// ! <-- NAVIGATION --> 
import { useNavigation } from '@react-navigation/native';

// ! <-- STYLING --> 
import tw from 'twrnc';
import { Card } from '@rneui/themed';
import { Icon } from "@rneui/themed";


type Props = {
    email: string;
    name: string;
    userId: string;
}

const CustomerCard = ({ email, name, userId}: Props) => {

    const { loading, error, orders } = useCustomerOrders(userId);
    const navigation = useNavigation<CustomersScreenNavigationProp>();

    return (
        <TouchableOpacity
            onPress={() => {
                if (orders.length) {
                    navigation.navigate('Customer', {name: name, userId: userId})
                }
            }}
        >
            <Card 
                containerStyle={[
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

                <View style={tw`flex-row justify-between`}>

                    <View style={tw`flex-col justify-center`}>
                        <Text style={tw`text-2xl font-bold`}>{name}</Text>
                        <Text style={tw`text-sm`}>ID: {userId}</Text>
                    </View>

                  
                    <View style={tw`flex-row items-center`}>

                        <Text>
                            {loading 
                                ? "Loading..." 
                                : orders.length ? <Text style={tw`font-bold`}>{ orders.length}x </Text> : <></>
                            }
                        </Text> 

                        <Icon
                            style={tw``}
                            name="cube-outline"
                            type="ionicon"
                            size={50}
                            color='#59C1CC'
                        />  

                    </View>
                     
                </View>
                
            </Card>
        </TouchableOpacity>
    )
}

export default CustomerCard