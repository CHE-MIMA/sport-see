import UserMainData from '../models/usermodel'
import axios from 'axios';
// import USER_MAIN_DATA from '../App'
export const getUserMainData = async (id) => {

    // const data = USER_MAIN_DATA.find(
    //     (element) => element.id.toString() === id
    // );
    // const user = new UserMainData(data);
    // console.log(user);

    try {
        const data = await axios
            .get(`http://localhost:3000/user/${id}`)
            .then((response) => response.data.data);
        const user = new UserMainData(data);
        return user;
    } catch (error) {
        console.error("ERREUR API : " + error);
        alert("Erreur API, veuillez réessayer ultérieurement.");
    }

};

// useEffect(() => {
//     fetch('http://localhost:3000/user/12')
//         .then((response) => response.json())
//         .then((data) => { setData(data.data) })




// }, [])