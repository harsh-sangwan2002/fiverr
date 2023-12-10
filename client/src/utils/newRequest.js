import axios from "axios";

const newRequest = axios.create({
    baseURL: "https://good-gold-dolphin-wear.cyclic.app/api/",
    withCredentials: true,
});

export default newRequest;