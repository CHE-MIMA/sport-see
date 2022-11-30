import UserModelData from '../models/usermodel';
import ActivityModelData from '../models/ActivityModel';
import SessionDataModel from '../models/AverageSessionsModel';
import PerformanceDataModel from '../models/PerformanceModel';

import axios from 'axios';
// import USER_MAIN_DATA from '../data/data';
// import USER_ACTIVITY from '../data/data';

export const getUserMainData = async (id) => {

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
        console.log(user)
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
        console.log(activity);
        return activity;

    } catch (error) {
        console.error("ERREUR API : " + error);
        alert("Erreur API, veuillez réessayer ultérieurement.");
    }

};
export const getSessionMainData = async (id) => {

    // const data = USER_ACTIVITY.find(
    //     (element) => element.userId.toString() === userId
    // );
    // const activity = new ActivityModelData(data);
    // console.log(activity);

    try {
        const data = await axios
            .get(`http://localhost:3000/user/${id}/average-sessions`)
            .then((response) => response.data.data);
        const sessions = new SessionDataModel(data);
        console.log(sessions);
        return sessions;

    } catch (error) {
        console.error("ERREUR API : " + error);
        alert("Erreur API, veuillez réessayer ultérieurement.");
    }

};
export const getPerformanceMainData = async (id) => {

    // const data = USER_ACTIVITY.find(
    //     (element) => element.userId.toString() === userId
    // );
    // const activity = new ActivityModelData(data);
    // console.log(activity);

    try {
        const data = await axios
            .get(`http://localhost:3000/user/${id}/performance`)
            .then((response) => response.data.data);
        const performance = new PerformanceDataModel(data);
        console.log(performance);
        return performance;

    } catch (error) {
        console.error("ERREUR API : " + error);
        alert("Erreur API, veuillez réessayer ultérieurement.");
    }

};