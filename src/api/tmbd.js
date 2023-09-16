import axios from "axios";

export default axios.create({
    baseURL:'https://api.themoviedb.org/3',
    headers:{
        Accept:"application.json"
    },
    params:{
        api_key:'036d88068f82b03c3a1a4e0722b1a8e0'
    }
})