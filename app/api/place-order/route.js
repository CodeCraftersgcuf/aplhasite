import { Client, Environment } from 'square';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import fulfilledCredentials from '@/helpers/fulfilledCredentials';
import axios from 'axios';

// Initialize the Square client
const client = new Client({
  // accessToken: process.env.NEXT_SQUARE_ACCESS_TOKEN,
  accessToken:
    'EAAAl1LNQl5Goarm04j3AoKhyvNETQNC2QGiIYb_yEO8kveKktSkzRGTKA-z7vDe',
  environment: 'sandbox',
  // environment:
  //   process.env.NEXT_SQUARE_ENVIRONMENT === 'production'
  //     ? Environment.Production
  //     : 'sandbox',
});

const ordersApi = client.ordersApi;
const paymentsApi = client.paymentsApi;

export async function POST(req) {
  const reqBody = await req.json();
  const { items, sourceId, customerCredentials } = reqBody;
  //   console.log('reqBody: ', reqBody);

  // Basic validation
  if (!items || !Array.isArray(items) || items.length === 0) {
    return NextResponse.json(
      {
        error: 'Items are required and should be an array.',
      },
      { status: 400 }
    );
  }

  if (!sourceId) {
    return NextResponse.json(
      {
        error: 'Payment token and sourceId are required.',
      },
      { status: 400 }
    );
  }

  if (!fulfilledCredentials(customerCredentials)) {
    return NextResponse.json(
      {
        error: 'Customer credentials are required.',
      },
      { status: 400 }
    );
  }

  // Generate a unique idempotency key
  const idempotency_key = uuidv4();

  // Prepare line items
  // const lineItems = items.map((item) => ({
  // const lineItems = [
  //   {
  //     quantity: '2',
  //     base_price_money: {
  //       amount: 7300, // Amount in smallest currency unit (e.g., cents)
  //       currency: 'USD',
  //     },
  //     catalog_object_id: '6SKVYNQHHT6WIPWDMB4GT32F',
  //     catalog_version: 1725696145387,
  //     item_type: 'ITEM',
  //     name: 'This is a custom item.',
  //     uid: uuidv4(),
  //   },
  // ];
  // catalog_object_id: item.product.id,
  // catalog_version: item.product.version,
  // name: item.product.item_data.name,
  // quantity: item.quantity.toString(),
  // base_price_money: {
  //   amount: item.amount, // Amount in smallest currency unit (e.g., cents)
  //   currency: 'USD',
  // },
  // }));

  // Prepare the order request payload
  // const orderRequest = {
  //   idempotency_key,
  //   order: {
  //     location_id: process.env.NEXT_SQUARE_LOCATION_ID,
  //     line_items: lineItems,
  //     // item_type: 'ITEM',
  //     // shipping_address: {
  //     //   address_line_1: customerCredentials.address,
  //     //   address_line_2: customerCredentials.apartment,
  //     //   locality: customerCredentials.city,
  //     //   postal_code: customerCredentials.postalCode,
  //     //   country: customerCredentials.country,
  //     // },
  //     state: 'COMPLETED',
  //     fulfillments: [
  //       {
  //         delivery_details: {
  //           recipient: {
  //             address: {
  //               address_line_1: customerCredentials.address,
  //               address_line_2: customerCredentials.apartment,
  //               // country: customerCredentials.country,
  //               country: 'AU',
  //               first_name: customerCredentials.firstName,
  //               last_name: customerCredentials.lastName,
  //               locality: customerCredentials.city,
  //               postal_code: customerCredentials.postalCode,
  //             },
  //             email_address: customerCredentials.email,
  //             phone_number: customerCredentials.phone,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // };
  // const orderRequest = {
  //   idempotency_key,
  //   order: {
  //     locationId: process.env.NEXT_SQUARE_LOCATION_ID,
  //     line_items: lineItems,
  //     fulfillments: [
  //       {
  //         type: 'SHIPMENT',
  //         shipment_details: {
  //           recipient: {
  //             display_name: `${customerCredentials.firstName} ${customerCredentials.lastName}`,
  //             email_address: customerCredentials.email,
  //             phone_number: customerCredentials.phone,
  //             address: {
  //               address_line_1: customerCredentials.address,
  //               address_line_2: customerCredentials.apartment,
  //               locality: customerCredentials.city,
  //               postal_code: customerCredentials.postalCode,
  //               country: 'AU', // Adjust based on the actual country.
  //             },
  //           },
  //         },
  //       },
  //     ],
  //     state: 'COMPLETED',
  //   },
  // };
  const orderRequest = {
    idempotency_key: 'ef0c50cf-c714-466e-943a-97a4cb9d6ad4',
    order: {
      location_id: 'LC9KSAAPWHWE2', // Your location ID
      line_items: [
        {
          quantity: '1',
          base_price_money: {
            amount: 9900, // Amount in smallest currency unit (cents)
            currency: 'USD',
          },
          catalog_object_id: '6SKVYNQHHT6WIPWDMB4GT32F', // Your item ID
          catalog_version: 1725696145387,
          item_type: 'ITEM',
          name: 'This is a custom item.',
          uid: 'hghhgh7676gfgftftfgfvv', // Unique ID for the item
        },
      ],
      state: 'OPEN',
      fulfillments: [
        {
          delivery_details: {
            recipient: {
              address: {
                address_line_1: 'Address line 1',
                address_line_2: 'Address line 2',
                address_line_3: 'Address line 3',
                country: 'AU',
                first_name: 'Customer',
                last_name: 'Last Name',
                locality: 'Pk',
                postal_code: '40000',
              },
              email_address: 'email@user.com',
              phone_number: '033331213',
            },
          },
          shipment_details: {},
        },
      ],
    },
  };
  // const orderRequest = {
  //   idempotency_key: 'ef0c50cf-c714-466e-943a-97a4cb9d6ad4',
  //   order: {
  //     locationId: 'LC9KSAAPWHWE2', // Updated to locationId
  //     lineItems: [
  //       {
  //         quantity: '22',
  //         basePriceMoney: {
  //           amount: 666, // Amount in smallest currency unit (cents)
  //           currency: 'USD',
  //         },
  //         catalogObjectId: '6SKVYNQHHT6WIPWDMB4GT32F', // Updated to catalogObjectId
  //         catalogVersion: 1725696145387,
  //         itemType: 'ITEM',
  //         name: 'This is a custom item.',
  //         uid: 'hghhgh7676gfgftftfgfvv', // Unique ID for the item
  //       },
  //     ],
  //     state: 'COMPLETED',
  //     fulfillments: [
  //       {
  //         deliveryDetails: {
  //           recipient: {
  //             address: {
  //               addressLine1: 'Address line 1',
  //               addressLine2: 'Address line 2',
  //               addressLine3: 'Address line 3',
  //               country: 'AU',
  //               firstName: 'Customer',
  //               lastName: 'Last Name',
  //               locality: 'Pk',
  //               postalCode: '40000',
  //             },
  //             emailAddress: 'email@user.com',
  //             phoneNumber: '033331213',
  //           },
  //         },
  //         shipmentDetails: {},
  //       },
  //     ],
  //   },
  // };

  // console.log(orderRequest);

  try {
    // Create the order
    // Ensure orderRequest has the correct structure and data
    const orderResponse = await axios.post(
      'https://connect.squareupsandbox.com/v2/orders',
      orderRequest,
      {
        headers: {
          'Square-Version': '2024-08-21',
          Authorization:
            'Bearer EAAAl1LNQl5Goarm04j3AoKhyvNETQNC2QGiIYb_yEO8kveKktSkzRGTKA-z7vDe',
          'Content-Type': 'application/json',
        },
      }
    );

    const order = orderResponse.data.order;
    console.log(order);

    // Calculate total amount (ensure consistency with frontend)
    const totalAmount = 9900; // Or use dynamic calculation if needed
    // const totalAmount = lineItems.reduce((total, item) => {
    //   return total + parseInt(item.base_price_money.amount) * parseInt(item.quantity);
    // }, 0);

    // Prepare the payment request
    console.log('payment Reached');
    const paymentRequest = {
      sourceId, // Ensure this is correctly set
      idempotencyKey: idempotency_key, // Must be unique
      amountMoney: {
        amount: totalAmount, // Amount in smallest currency unit (e.g., cents for USD)
        currency: 'USD',
      },
      orderId: order.id,
      // autocomplete: true, // Uncomment if you want automatic payment completion
    };

    // Create the payment
    const paymentResponse = await paymentsApi.createPayment(paymentRequest);
    console.log(paymentResponse.result);

    // Respond with the order and payment details
    return NextResponse.json(
      {
        success: true,
        payment: paymentResponse.result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error creating order or payment:', error);
    console.log('errored');

    // Handle Square API errors
    if (error.response && error.response.errors) {
      return NextResponse.json(
        {
          error: error.response.errors,
        },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        {
          error: 'Internal server error',
        },
        { status: 500 }
      );
    }
  }
}
