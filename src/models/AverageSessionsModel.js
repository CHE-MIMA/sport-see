// /**
//  * a class to use as a model for the API call.
//  */
export default class SessionDataModel {
    /**
        *
        * @param {{}} data The data of the user averages sessions
      
        */
    constructor(data) {
        this.userId = data.userId;
        this.sessions = data.sessions;
        /**
        * Push the datas in an array.
        * @type {Array<object>}
        * @param day: days {string}
        * @param sessionLength: duration (numbers)
        */
        const userSessionData = [];

        const days = ["L", "M", "M", "J", "V", "S", "D"];

        // /* Creating an array of objects with the day of the week and the session length. */
        for (let i = 0; i < data.sessions.length; i++) {
            userSessionData.push({
                day: days[i],
                sessionLength: data.sessions[i].sessionLength,
            });
        }
        return userSessionData;
    }
}