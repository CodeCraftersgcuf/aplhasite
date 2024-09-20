import axios from "axios";
import PrivacyPolicy from "./PrivacyPage";
export default async function Page() {
    try {
        const response = await axios.get(
            `${process.env.NEXT_VERCEL_DOMAIN_URL}/api/get-all-categories`,
            {
                withCredentials: true,
            }
        );


        return <PrivacyPolicy responseData={response?.data} />;
    } catch (error) {
        console.log(error);
        return <div>Error: {error.message}</div>;
    }
}