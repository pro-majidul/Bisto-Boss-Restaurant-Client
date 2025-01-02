import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const useUsers = () => {
    const usersDetails = useContext(AuthContext);

    return { usersDetails }
};

export default useUsers;