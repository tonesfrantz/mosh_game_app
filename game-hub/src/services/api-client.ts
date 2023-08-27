import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '293b64156463465a99df117057b5a863',
    },
});
