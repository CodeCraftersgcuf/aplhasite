import ShopPage from "./ShopPage";
import axios from "axios";
// import { cookies } from "next/headers";

export default async function Page() {
    // const cookieStore = cookies(); // Get cookies from the request
    // const token = cookieStore.get('token'); // Fetch the 'token' cookie
    try {
        const dataResponse = await axios.get(
            `${process.env.NEXT_VERCEL_DOMAIN_URL}/api/get-all-items`,
            {
                withCredentials: true,
            }
        );

        const categoryResponse = await axios.get(
            `${process.env.NEXT_VERCEL_DOMAIN_URL}/api/get-all-categories`,
            {
                withCredentials: true,
            }
        );

        const response = { data: dataResponse?.data, categories: categoryResponse?.data };
        console.log(response)
        // const dataArray = Object.values(response?.data);
        // const reversedDataArray = dataArray.reverse();

        return <ShopPage data={response} />;
    } catch (error) {
        console.log(error);
        return <div>Error: {error.message}</div>;
    }
}