// /**
//  * a class to use as a model for the API call.
//  */
export default class PerformanceDataModel {
    /**
    *
    * @param {{}} data The data of the user performances. 
    */
    constructor(data) {
        this.userId = data.userId;
        this.kind = data.kind;
        this.data = data.data;
    }
}