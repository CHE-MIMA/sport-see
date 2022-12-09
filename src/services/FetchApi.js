import UserModelData from '../models/usermodel';
import ActivityModelData from '../models/ActivityModel';
import SessionDataModel from '../models/AverageSessionsModel';
import PerformanceDataModel from '../models/PerformanceModel';
import axios from 'axios';
import { USER_MAIN_DATA } from '../data/data';
import { USER_ACTIVITY } from '../data/data';
import { USER_AVERAGE_SESSIONS } from '../data/data';
import { USER_PERFORMANCE } from '../data/data';

let isApi = true;
export const getUserMainData = async (id) => {

    if (!isApi) {
        // alert("données moqués")
        const data = USER_MAIN_DATA.find(
            (element) => element.id.toString() === id
        );
        const user = new UserModelData(data);
        return (user);
    }
    else {
        // alert("données de l'api")
        try {
            /**
            * axios user datas
            * @param {number} id of user
            * @returns {object}
            */
            const data = await axios
                .get(`http://localhost:3000/user/${id}`)
                .then((response) => response.data.data);
            const user = new UserModelData(data);
            return user;
        } catch (error) {
            console.error("ERREUR API : " + error);
            alert("Erreur API, veuillez réessayer ultérieurement.");
        }
    }
};
export const getActivityMainData = async (id) => {
    if (!isApi) {
        const data = USER_ACTIVITY.find(
            (element) => element.userId.toString() === id
        );
        const activity = new ActivityModelData(data);
        return activity;
    }
    else {
        try {

            /**
           * axios activity datas
           * @param {number} id of user
           * @returns {object}
           */
            const data = await axios
                .get(`http://localhost:3000/user/${id}/activity`)
                .then((response) => response.data.data);
            const activity = new ActivityModelData(data);

            return activity;

        } catch (error) {
            console.error("ERREUR API : " + error);
            alert("Erreur API, veuillez réessayer ultérieurement.");
        }
    }


};
export const getSessionMainData = async (id) => {

    if (!isApi) {

        const data = USER_AVERAGE_SESSIONS.find(
            (element) => element.userId.toString() === id
        );
        const sessions = new SessionDataModel(data);
        return sessions;
    } else {
        try {
            /**
       * axios averagesessions datas
       * @param {number} id of user
       * @returns {object}
       */
            const data = await axios
                .get(`http://localhost:3000/user/${id}/average-sessions`)
                .then((response) => response.data.data);
            const sessions = new SessionDataModel(data);
            // console.log(sessions);
            return sessions;

        } catch (error) {
            console.error("ERREUR API : " + error);
            alert("Erreur API, veuillez réessayer ultérieurement.");
        }
    }
};
export const getPerformanceMainData = async (id) => {
    if (!isApi) {
        const data = USER_PERFORMANCE.find(
            (element) => element.userId.toString() === id
        );
        const performance = new PerformanceDataModel(data);
        return performance;
    } else {
        try {
            /**
       * axios performance datas
       * @param {number} id of user
       * @returns {object}
       */
            const data = await axios
                .get(`http://localhost:3000/user/${id}/performance`)
                .then((response) => response.data.data);
            const performance = new PerformanceDataModel(data);
            return performance;

        } catch (error) {
            console.error("ERREUR API : " + error);
            alert("Erreur API, veuillez réessayer ultérieurement.");
        }
    }
};
