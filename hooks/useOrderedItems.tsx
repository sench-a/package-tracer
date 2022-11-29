import { useQuery } from "@tanstack/react-query";
import axios from 'axios';


const ORDERED_ITEMS = "https://my-json-server.typicode.com/sench-a/package-tracer/orderedItems";

const fetcher = async (): Promise<Item[]> => {
    const response = await axios.get(ORDERED_ITEMS);
    
    return response.data;
}

const useOrderedItems = (orderID: string) => {
    const { data, isLoading, error } = useQuery<Item[]>(['ordered-items'], fetcher);

    const orderedItems = data?.filter((item: Item) => item.orderID === orderID);

    return { orderedItems, isLoading, error };
}

export default useOrderedItems;