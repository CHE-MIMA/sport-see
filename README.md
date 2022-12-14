![Getting Started](./src/assets/logoSport.png)
   
This application allow you to track your workout performance.

# Prerequisites

- NodeJS (version 12.18)
- Yarn
- Recharts
- Jsdoc
- Axios
- React
- React-Router



## Launching the project

- Fork the repository of the micro API.
( `https://github.com/CHE-MIMA/Sport-see-API-Back`)
- Clone it on your computer.
- The `yarn` command will allow you to install the dependencies.
- The `yarn dev` command will allow you to run the micro API.
- Default port : 3000.

- Fork the repository of the front-end ( `https://github.com/CHE-MIMA/sport-see`)
- Clone it on your computer.
- `npm install` will allow you to install the dependencies on the front-end.

### starting the project
- `npm start` on the front-end ( `https://github.com/CHE-MIMA/sport-see`), from starting.
- Default port : 3001
- They have userId 12 and 18, 
- from 12 go to (`localhost:3001/user/12`);
- from 18 go to (`localhost:3001/user/18`);

## switch the mocked data or the api data:
- change the isApi variable in line 11 in the FetchApi.js file.

### Back-end endpoints :
- `http://localhost:3000/user/${userId}` retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, etc.).
- `http://localhost:3000/user/${userId}/activity` retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` retrieves a user's performance (energy, endurance, etc.).


