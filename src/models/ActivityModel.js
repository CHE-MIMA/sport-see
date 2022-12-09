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
        const array = data.sessions;
        /**
            * Push the datas in an array.
            * @type {Array<object>}
            * @param index: i (number)
            * @param kilogram:  les kilo(numbers)
            * @param calories: les calories(numbers)
            */
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
}


