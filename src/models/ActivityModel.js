// /**
//  * a class to use as a model for the API call.
//  */

export default class ActivityModelData {
    /**
     *
     * @param {{}} data The data of the user activity 
   
     */
    constructor(data) {
        this.userId = data.userId;
        this.sessions = data.sessions;
    }
}

