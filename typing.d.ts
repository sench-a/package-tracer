type Customer = {
	ID: string;
	email: string;
    name: string;
}

type Order = {
	customerID: string;
	address: string;
	city: string;
	lat: number;
	lng: number;
	orderDate: string;
	ID: string; 
};

type Item = {
	item: string;
	price: number;
	quantity: number;
	orderID: string;
};

type RootStackParamList = {
    Main: Customer | Order;
    Customer: Customer;
    Order: Order;
}

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
