import axios from 'axios';

const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	params: {
    api_key: "0d4b8ea032050ba98566935c86f8426a",
    language: "ko-KR",
	},
});

export default instance;
