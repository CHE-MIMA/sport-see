import UserModelData from '../models/usermodel';
import ActivityModelData from '../models/ActivityModel';
import axios from 'axios';
// import USER_MAIN_DATA from '../data/data';
// import USER_ACTIVITY from '../data/data';

export const getUserMainData = async (id) => {
    // if()
    // const data = USER_MAIN_DATA.find(
    //     (element) => element.id.toString() === id
    // );
    // const user = new UserModelData(data);
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
export const getActivityMainData = async (id) => {

    // const data = USER_ACTIVITY.find(
    //     (element) => element.userId.toString() === userId
    // );
    // const activity = new ActivityModelData(data);
    // console.log(activity);

    try {
        const data = await axios
            .get(`http://localhost:3000/user/${id}/activity`)
            .then((response) => response.data.data);
        const activity = new ActivityModelData(data);
        return activity;
    } catch (error) {
        console.error("ERREUR API : " + error);
        alert("Erreur API, veuillez réessayer ultérieurement.");
    }

};