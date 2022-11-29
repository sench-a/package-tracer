import { useQuery } from "@tanstack/react-query";
import axios from 'axios';


const ORDERS = "https://my-json-server.typicode.com/sench-a/package-tracer/orders";

const fetcher = async (): Promise<Order[]> => {
    const response = await axios.get(ORDERS);
    
    return response.data;
}

export const useOrders = () => {
    const { data: orders, isLoading } = useQuery<Order[]>(['orders'], fetcher);

    return { orders, isLoading }; 
}
