// ! IMPORTS

import React, { useRef, useState } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';

// ! <-- NAVIGATION -->
import { useNavigation } from '@react-navigation/native';

// ! <-- GRAPHQL & APOLLO CLIENT -->
import { useQuery } from '@apollo/client';
import { GET_CUSTOMERS } from '../graphql/queries';

// ! <-- COMPONENTS -->
import CustomerCard from '../components/CustomerCard';

// ! <-- STYLING -->
import tw from 'twrnc';
import { Image, Input } from "@rneui/themed";
import { Icon } from '@rneui/themed';

type Doc = {
    email: string;
    name: string;
}

const CustomersScreen = () => {

    const navigation = useNavigation<CustomersScreenNavigationProp>();

    const [input, setInput] = useState<string>("");
    const { loading, error, data } = useQuery(GET_CUSTOMERS);
    const inputRef = useRef<Input>();

    

    return (

        <View style={tw`h-full bg-[#59C1CC] px-3`}>
            <Image
                containerStyle={tw`w-120 h-61 mx--8`}
                source={{ uri: "https://links.papareact.com/3jc" }}
            />

            <Input 
                ref={inputRef}
                containerStyle={[
                    tw`bg-white pt-2 h-16 rounded-2xl z-50`,
                    {shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,

                    elevation: 6}
                ]}
                inputContainerStyle={tw`border-b-0`}
                leftIcon={
                    <Icon
                        name='search-outline'
                        type='ionicon'
                        style={tw`px-2`}
                    />
                }
                rightIcon={ input ? 
                    <TouchableOpacity
                        onPress={() => {
                            inputRef.current.clear();
                            setInput('');
                        }}
                    >
                        <Icon 
                            name='close-circle-outline'
                            type='ionicon'
                            color='gray'
                        />   
                    </TouchableOpacity>
                    : <></>
                }
                placeholder="Search by customer"
                value={input}
                onChangeText={setInput}
            />
            <ScrollView 
                showsVerticalScrollIndicator={false}
            >
                {data?.getCustomers
                    ?.filter((customer: CustomerList) => 
                        customer.value.name.includes(input)
                    )
                    .map(({ name: ID, value: { email, name } }: CustomerResponse) => (
                        <CustomerCard key={ID} email={email} name={name} userId={ID} />
                ))}
               
                
            </ScrollView>
            
            
        </View>
    )
}

export default CustomersScreen