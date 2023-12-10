import axios from "axios";

const newRequest = axios.create({
    baseURL: "https://cyan-brainy-cape-buffalo.cyclic.app/",
    withCredentials: true,
});

export default newRequest;