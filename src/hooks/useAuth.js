import { useContext } from "react"
import { AuthContext } from "../contexts/AuthProvider"

//use auth setvup

const useAuth = () =>{
    return useContext(AuthContext);
}
export default useAuth;