// ! IMPORTS

import React, { useState } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';

// ! <-- NAVIGATION -->
import { CompositeNavigationProp,useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// ! <-- TYPE CHECKING -->
import { RootStackParamList } from '../navigator/RootNavigator';
import { TabStackParamList } from '../navigator/TabNavigator';

// ! <-- STYLING -->
import tw from 'twrnc';
import { Image, Input } from "@rneui/themed";
import { Icon } from '@rneui/base';


// ? Create a separate file for all type definitions 
export type CustomersScreenNavigationProp = 
    CompositeNavigationProp<
        BottomTabNavigationProp<TabStackParamList, "Customers">,
        NativeStackNavigationProp<RootStackParamList>
    >


const CustomersScreen = () => {

    const navigation = useNavigation<CustomersScreenNavigationProp>();

    const [input, setInput] = useState<string>("");

    return (
        <ScrollView style={tw`bg-[#59C1CC] px-3`}>
            <Image
                containerStyle={tw`w-full h-64`}
                source={{ uri: "https://links.papareact.com/3jc" }}
                PlaceholderContent={<ActivityIndicator/>} // ? Change the activity indicator 
            />

            <Input 
                containerStyle={tw`bg-white pt-2 h-16 rounded-2xl`}
                inputContainerStyle={tw`border-b-0`}
                leftIcon={
                    <Icon
                        name='search-outline'
                        type='ionicon'
                        style={tw`px-2`}
                    />
                }
                placeholder="Search by customer"
                value={input}
                onChangeText={setInput}
            />
        </ScrollView>
    )
}

export default CustomersScreen