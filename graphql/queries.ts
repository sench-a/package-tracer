import { gql } from '@apollo/client';


export const GET_CUSTOMERS = gql`
  query GetCustomers {
    getCustomers {
      name
      value {
        email
        name
      }
    }
  }
`;

export const GET_ORDERS = gql`
  query GetOrders {
    getOrders {
      name
      value {
        Address
        trackingId
        Lat
        City
        Lng
        carrier
        createdAt
        shippingCost
        trackingItems {
          customer_id
          customers {
            email
            name
          }
          items {
            item_id
            name
            price
            quantity
          }
        }
      }
    }
  }
`;


