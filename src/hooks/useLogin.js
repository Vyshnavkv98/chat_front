import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import Axios from '../axios/Axios.jsx'

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const login = async (username, password) => {
		const success = handleInputErrors(username, password);
		if (!success) return;
		setLoading(true);
		try {
			const res = await Axios.post("api/auth/login",{username, password});

			if (res.error) {
				throw new Error(data.error);
			}

			console.log(res.data,'dfgdfgdfgdf	');

			localStorage.setItem("chat-user", JSON.stringify(res.data));
			localStorage.setItem("jwt-token", JSON.stringify(res.data.token));
			setAuthUser(res.data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, login };
};
export default useLogin;

function handleInputErrors(username, password) {
	if (!username || !password) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}