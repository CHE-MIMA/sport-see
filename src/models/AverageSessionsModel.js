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
    }
}