import axios from 'axios';

//Chart One
export async function getLaunches() {
    return await axios.get(`https://api.spacexdata.com/v5/launches`)
        .then(response => response.data);
}