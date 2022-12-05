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

        const array = activity?.sessions;
        const userActivityData = [];
        for (let i = 0; i < array.length; i++) {


            userActivityData.push({
                index: i + 1,
                kilogram: array[i].kilogram,
                calories: array[i].calories,
            });
        }
        return userActivityData;
    }
    else {
        try {

            const data = await axios
                .get(`http://localhost:3000/user/${id}/activity`)
                .then((response) => response.data.data);
            const activity = new ActivityModelData(data);

            const array = activity?.sessions;


            const userActivityData = [];
            for (let i = 0; i < array.length; i++) {


                userActivityData.push({
                    index: i + 1,
                    kilogram: array[i].kilogram,
                    calories: array[i].calories,
                });
            }
            return userActivityData;

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
        const averageSessions = sessions?.sessions
        console.log(averageSessions)
        const userSessionData = [];
        const days = ["L", "M", "M", "J", "V", "S", "D"];

        // /* Creating an array of objects with the day of the week and the session length. */
        for (let i = 0; i < averageSessions.length; i++) {
            userSessionData.push({
                day: days[i],
                sessionLength: averageSessions[i].sessionLength,
            });
        }
        return userSessionData;
    } else {
        try {
            const data = await axios
                .get(`http://localhost:3000/user/${id}/average-sessions`)
                .then((response) => response.data.data);
            const sessions = new SessionDataModel(data);
            console.log(sessions);
            const averageSessions = sessions?.sessions
            console.log(averageSessions)

            /**
            * Push the datas in an array.
            * @type {Array<object>}
            * @param day: days {string}
            * @param sessionLength: duration (numbers)
            */
            const userSessionData = [];

            const days = ["L", "M", "M", "J", "V", "S", "D"];

            // /* Creating an array of objects with the day of the week and the session length. */
            for (let i = 0; i < averageSessions.length; i++) {
                userSessionData.push({
                    day: days[i],
                    sessionLength: averageSessions[i].sessionLength,
                });
            }
            return userSessionData;

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
        const performanceData = performance?.data;
        const userPerformanceData = [];
        const kindName = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"];

        /* In this loop, we push the kind name corresponding to the value. */
        for (let i = 0; i < performanceData.length; i++) {
            userPerformanceData.push({
                kind: kindName[i],
                value: performanceData[i].value,
            });
        }
        return userPerformanceData;
    } else {
        try {
            const data = await axios
                .get(`http://localhost:3000/user/${id}/performance`)
                .then((response) => response.data.data);
            const performance = new PerformanceDataModel(data);

            const performanceData = performance?.data;

            const userPerformanceData = [];

            /**
             * Contains every kind
             * @type {Array}
             */
            const kindName = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"];

            /* In this loop, we push the kind name corresponding to the value. */
            for (let i = 0; i < performanceData.length; i++) {
                userPerformanceData.push({
                    kind: kindName[i],
                    value: performanceData[i].value,
                });
            }
            return userPerformanceData;

        } catch (error) {
            console.error("ERREUR API : " + error);
            alert("Erreur API, veuillez réessayer ultérieurement.");
        }
    }
};
