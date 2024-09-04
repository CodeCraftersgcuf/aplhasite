import DetailsPage from "../DetailsPage";
import axios from "axios";

export default async function Page({ params }) {
    const { productId } = params
    console.log(productId)
    try {
        const response = await axios.get(`${process.env.NEXT_VERCEL_DOMAIN_URL}/api/product-details/` + productId);
        // const dataArray = Object.values(response?.data);
        // const reversedDataArray = dataArray.reverse();

        return <DetailsPage data={response?.data} />;

    } catch (error) {
        // console.log(error);
        return <div>Error: {error.message}</div>;
    }
}