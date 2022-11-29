import { useQuery } from "@tanstack/react-query";
import axios from 'axios';


const CUSTOMER_ORDERS = "https://my-json-server.typicode.com/sench-a/package-tracer/orders";

const fetcher = async (): Promise<Order[]> => {
    const response = await axios.get(CUSTOMER_ORDERS);
    
    return response.data;
}

export const useCustomerOrders = (customerID: string) => {
    const { data } = useQuery<Order[]>(['orders'], fetcher);

    const customerOrders = data?.filter((order: Order) => (order.customerID === customerID));

    return { customerOrders }; 
}