import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Axios from '../axios/Axios'

const useGetConversations = () => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);

	useEffect(() => {
		const getConversations = async () => {
			setLoading(true);
			try {
                const res = await Axios.get("api/users");
				if (res.error) {
					throw new Error(res.error);
				}
				setConversations(res.data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		getConversations();
	}, []);

	return { loading, conversations };
};
export default useGetConversations;