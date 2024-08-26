import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '12a9607759c34e9d8e8e7804aed4dcd5'
    }
});