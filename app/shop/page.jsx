import ShopPage from "./ShopPage";
import axios from "axios";

export default async function Page() {
    try {
        const response = await axios.get(`${process.env.VERCEL_DOMAIN_URL}/api/get-all-items`);
        // const dataArray = Object.values(response?.data);
        // const reversedDataArray = dataArray.reverse();

        return <ShopPage data={response?.data} />;
    } catch (error) {
        // console.log(error);
        return <div>Error: {error.message}</div>;
    }
}