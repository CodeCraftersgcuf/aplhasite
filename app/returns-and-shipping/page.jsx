import axios from "axios";
import ReturnsAndShipping from "./ReturnPage";
export default async function Page() {
    try {
        const response = await axios.get(
            `${process.env.NEXT_VERCEL_DOMAIN_URL}/api/get-all-categories`,
            {
                withCredentials: true,
            }
        );


        return <ReturnsAndShipping responseData={response?.data} />;
    } catch (error) {
        console.log(error);
        return <div>Error: {error.message}</div>;
    }
}