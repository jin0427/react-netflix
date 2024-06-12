import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3", // 중복되는 URL
    params: {
        api_key: process.env.REACT_APP_MOVIE_DB_API_KEY, // API key
        language: "ko-KR",
    }
})
// instance를 다른 곳에서도 사용을 하니 export를 해줌
export default instance;

