import axios from "axios";


export const getUsers = async () => {
    console.log("API CALLING")
    const {data} = await axios.get("https://fakestoreapi.com/users")
    console.log(data)
}