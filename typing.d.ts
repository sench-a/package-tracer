type Customer = {
    email: string;
    name: string;
};

type CustomerList = {
    name: ID;
    value: Customer;
};

type CustomerResponse = {
    name: ID;
    value: Customer;
};

type Order = {
    carrier: string;
	createdAt: string;
	shippingCost: number;
	trackingId: string;
	Address: string;
	City: string;
	Lat: number;
	Lng: number;
	trackingItems: TrackingItem;
};

type OrderResponse = {
    value: Order;
}

type Item = {
	item_id: ID;
	name: string;
	price: number;
	quantity: number;
};

type TrackingItem = {
	customer_id: ID;
	items: Item[];
	customers: Customer;
};

type CustomerScreenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<TabStackParamList>,
    NativeStackNavigationProp<RootStackParamList, "Customer">
	>;

type CustomersScreenNavigationProp = 
    CompositeNavigationProp<
        BottomTabNavigationProp<TabStackParamList, "Customers">,
        NativeStackNavigationProp<RootStackParamList>
    >;

type OrderScreenNavigationProp = 
	CompositeNavigationProp<
		BottomTabNavigationProp<TabStackParamList>,
		NativeStackNavigationProp<RootStackParamList, "Order">
	>;

type OrdersScreenNavigationProp = 
	CompositeNavigationProp<
		BottomTabNavigationProp<TabStackParamList, "Orders">,
		NativeStackNavigationProp<RootStackParamList>
	>;	

type OrderScreenRouteProp = RouteProp<RootStackParamList, "Order">;

type CustomerScreenRouteProp = RouteProp<RootStackParamList, 'Customer'>;
