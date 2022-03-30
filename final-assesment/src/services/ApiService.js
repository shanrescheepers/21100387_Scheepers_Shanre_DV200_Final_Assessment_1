import axios from 'axios';

//Chart One

export async function getLaunches() {
    return await axios.get(`https://api.spacexdata.com/v5/launches`)
        .then(response => response.data);
}

//chart two
export async function getThrust() {
    return await axios.get(`https://api.spacexdata.com/v4/rockets`)
        .then(response => response.data);
}

//chart three
export async function getLaunchesforEachYear() {
    return await axios.get(`https://api.spacexdata.com/v4/launches`)
        .then(response => response.data);
}
//mission log
export async function missionLog() {
    return await axios.get(`https://api.spacexdata.com/v3/missions`)
        .then(response => response.data);
}
