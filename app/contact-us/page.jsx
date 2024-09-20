import axios from "axios";
import ContactPage from "./ContactPage";
export default async function Page() {
    try {
        const response = await axios.get(
            `${process.env.NEXT_VERCEL_DOMAIN_URL}/api/get-all-categories`,
            {
                withCredentials: true,
            }
        );


        return <ContactPage responseData={response?.data} />;
    } catch (error) {
        console.log(error);
        return <div>Error: {error.message}</div>;
    }
}