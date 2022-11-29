import React, { useRef, useState } from 'react';
import { ScrollView, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import CustomerCard from '../components/CustomerCard';
import tw from 'twrnc';
import { Image, Input} from "@rneui/themed";
import { Icon } from '@rneui/themed';
import { useCustomers } from '../hooks/useCustomers';


const CustomersScreen = () => {
    const [input, setInput] = useState<string>("");
    const inputRef = useRef<Input>();

    const { data, isLoading } = useCustomers();

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
                            setInput("");
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
                {isLoading && 
                    <ActivityIndicator/>
                }

                {data?.filter((customer: Customer) => (customer.name.includes(input)))
                    .map((customer: Customer) => (
                        <CustomerCard 
                            key={customer.ID}
                            ID={customer.ID} 
                            name={customer.name}
                            email={customer.email}
                        />
                ))}
            </ScrollView>
            
        </View>
    )
}

export default CustomersScreen