// /**
//  * a class to use as a model for the API call.
//  */
export default class UserModelData {
    /**
    *
    * @param {{}} data The data of the user information. 
    */
    constructor(data) {
        this.id = data.id;
        this.firstName = data.userInfos.firstName;
        this.todayScore = data.todayScore || data.score;
        this.score = this.getFormat(this.todayScore);
        this.keyData = data.keyData;
    }

    getFormat() {
        return [{ value: this.todayScore * 100 }];
    }
}

