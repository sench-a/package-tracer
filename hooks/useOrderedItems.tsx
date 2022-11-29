import { useQuery } from "@tanstack/react-query";
import axios from 'axios';


const ORDERED_ITEMS = "https://my-json-server.typicode.com/sench-a/package-tracer/orderedItems";

const fetcher = async (): Promise<Item[]> => {
    const response = await axios.get(ORDERED_ITEMS);
    
    return response.data;
}

const useOrderedItems = (orderID: string) => {
    const { data } = useQuery<Item[]>(['ordered-items'], fetcher);

    const orderedItems = data?.filter((item: Item) => item.orderID == orderID);

    return orderedItems;
}

export default useOrderedItems;