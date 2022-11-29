import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';


const CUSTOMERS = "https://my-json-server.typicode.com/sench-a/package-tracer/customers";

const fetcher = async (): Promise<Customer[]> => {
    const response = await axios.get(CUSTOMERS);

    return response.data;
}

export const useCustomer = (customerID: string) => {
    const { data } = useQuery<Customer[]>(['customers'], fetcher);
    const [customer, setCustomer] = useState<Customer>();
    
    useEffect(() => {
        data?.filter((customer: Customer) => customer.ID === customerID)
            .map((customer: Customer) => setCustomer(customer));
    }, [data])

    return customer;
}

export const useCustomers = () => {
    const { data, isLoading, error } = useQuery<Customer[]>(['customers'], fetcher);

    return { data, isLoading, error };
}



