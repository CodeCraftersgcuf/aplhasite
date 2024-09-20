import axios from "axios";
import SignInPage from "./SignInPage";

export default async function Page() {
    try {
        const response = await axios.get(
            `${process.env.NEXT_VERCEL_DOMAIN_URL}/api/get-all-categories`,
            {
                withCredentials: true,
            }
        );


        return <SignInPage responseData={response?.data} />;
    } catch (error) {
        console.log(error);
        return <div>Error: {error.message}</div>;
    }
}