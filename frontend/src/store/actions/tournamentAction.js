import Axios from '../../axios';

export const addTournamentData = (id) => {
    return { type: 'TOURNAMENT_ADD_DATA', payload: id };
};

export const createTournament = (
    sport,
    p,
    name,
    avatar,
    no_of_players,
    format,
    location,
    lat,
    lng,
    date,
    description
) => {
    const tournamentData = new FormData();    
    tournamentData.append('sport', sport)
    tournamentData.append('private', p)
    tournamentData.append('name', name)
    tournamentData.append('avatar', avatar)
    tournamentData.append('no_of_players', no_of_players)
    tournamentData.append('format', format)
    tournamentData.append('location', location)
    tournamentData.append('latitude', lat)
    tournamentData.append('longitude', lng)
    tournamentData.append('date', date)
    tournamentData.append('description', description)

    const url = 'tournament/new/';
    const auth = 'Bearer ' + localStorage.getItem('userToken');
    const headers = {
        headers: { Authorization: auth, 'Content-Type': 'multipart/form-data' },
    };
    Axios.post(url, tournamentData, headers)
        .then((response) => {
            console.log('Tournament Creation successful.');
        })
        .catch((error) => {
            console.log('Tournament Creation error', error.response.data);
        });
};