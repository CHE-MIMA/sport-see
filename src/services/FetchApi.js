import UserModelData from '../models/usermodel';
import ActivityModelData from '../models/ActivityModel';
import axios from 'axios';
// import USER_MAIN_DATA from '../App'
export const getUserMainData = async (id) => {

    // const data = USER_MAIN_DATA.find(
    //     (element) => element.id.toString() === id
    // );
    // const user = new UserMainData(data);
    // console.log(user);

    try {
        const data = await axios
            .get(`http://localhost:3000/user/${id}`)
            .then((response) => response.data.data);
        const user = new UserModelData(data);
        return user;
    } catch (error) {
        console.error("ERREUR API : " + error);
        alert("Erreur API, veuillez réessayer ultérieurement.");
    }

};
export const getActivityMainData = async (userId) => {

    // const data = USER_MAIN_DATA.find(
    //     (element) => element.id.toString() === id
    // );
    // const user = new UserMainData(data);
    // console.log(user);

    try {
        const data = await axios
            .get(`http://localhost:3000/user/${userId}/activity`)
            .then((response) => response.data.data);
        const activity = new ActivityModelData(data);
        return activity;
    } catch (error) {
        console.error("ERREUR API : " + error);
        alert("Erreur API, veuillez réessayer ultérieurement.");
    }

};