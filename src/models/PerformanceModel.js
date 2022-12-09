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

        /**
      * Push the datas in an array.
      * @type {Array<object>}
      * @param kind:  kindName(string)
      * @param value:  value (numbers)
      */
        const userPerformanceData = [];
        const kindName = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"];

        /* In this loop, we push the kind name corresponding to the value. */
        for (let i = 0; i < data.data.length; i++) {
            userPerformanceData.push({
                kind: kindName[i],
                value: data.data[i].value,
            });
        }
        return userPerformanceData;
    }
}