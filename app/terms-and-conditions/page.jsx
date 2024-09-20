import axios from "axios";
import TermsAndConditions from './TermPage'
export default async function Page() {
    try {
        const response = await axios.get(
            `${process.env.NEXT_VERCEL_DOMAIN_URL}/api/get-all-categories`,
            {
                withCredentials: true,
            }
        );


        return <TermsAndConditions responseData={response?.data} />;
    } catch (error) {
        console.log(error);
        return <div>Error: {error.message}</div>;
    }
}