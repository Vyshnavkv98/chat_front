import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import Axios from '../axios/Axios'

const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

	const sendMessage = async (message) => {
		setLoading(true);
		try {
			const res = await Axios.post(`api/messages/send/${selectedConversation._id}`,{message})
			if (res.error) throw new Error(res.error);

			setMessages([...messages, res.data]);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { sendMessage, loading };
};
export default useSendMessage;