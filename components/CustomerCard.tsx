import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import { Card, Icon } from '@rneui/themed';
import { useCustomerOrders } from '../hooks/useCustomerOrders';


const CustomerCard = (customer: Customer) => {
    const navigation = useNavigation<CustomersScreenNavigationProp>();
    const { customerOrders } = useCustomerOrders(customer.ID);

    return (
        <TouchableOpacity
            onPress={() => {
                if (customerOrders?.length) {
                    navigation.navigate('Customer', {customerName: customer.name, customerID: customer.ID})
                }
            }}
        >
            <Card 
                containerStyle={[tw`rounded-xl`,
                    // customizable drop-shadow filter
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
                        <Text style={tw`text-2xl font-bold`}>{customer.name}</Text>
                        <Text style={tw`text-sm`}>ID: {customer.ID}</Text>
                    </View>

                  
                    <View style={tw`flex-row items-center`}>

                        <Text style={tw`font-bold`}>{ customerOrders?.length }x </Text>
                        

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