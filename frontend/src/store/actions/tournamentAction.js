import Axios from '../../axios';

export const addTournamentData = (data) => {
    return { type: 'TOURNAMENT_ADD_DATA', payload: data };
};


export const getTournamentByID = (id) => (dispatch) => {
    // prepare data
    const url = `/tournament/${id}/`;
    const auth = 'Bearer ' + localStorage.userToken;
    const headers = { headers: { Authorization: auth } };

    Axios.get(url, headers)
        .then((response) => {
        console.log('Tournament data retrieved');
        dispatch(addTournamentData(response.data))
    })
    .catch((error) => {
        console.log('getTournamentByID Error', error.response.data);
    });
};