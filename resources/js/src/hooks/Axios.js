import axios from "axios";
// import { toast } from "react-toastify"
// import { Root } from "./config"
// import { getToken, clearToken } from "../redux/action/auth/loginActions"

const Axios = async (method, data, url) => {
    return new Promise(async function (resolve, reject) {
        const options = {
            method,
            url: Root.adminUrl + url,
            data,
            headers: {
                "authorization": `Bearer ${getToken()}`,
                "Content-Type": "application/json",
                "timeout": 10000
            }
        };
        try {
            let rdata = await axios(options);
            if (rdata.status === 200 && rdata.data) {
                if (!rdata.data.status && rdata.data.session === true) {
                    clearToken();
                    toast.error(rdata.data.message)
                    setTimeout(() => {
                        window.location.assign("/")
                    }, 3000);
                } else {
                    resolve(rdata.data)
                }

            } else {
                resolve({ status: false, data: "connect error" })
            }
        } catch (err) {
            toast.error('Network error')
        }
    })
}

export default Axios