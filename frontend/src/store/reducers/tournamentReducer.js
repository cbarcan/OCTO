export const tournament = (
    state = {
    }, action) => {
        switch (action.type) {
        case 'TOURNAMENT_ADD_DATA':
            return {
            ...state,
                id: action.payload.id,
                name: action.payload.name,
                participants: action.payload.participants,
                location: action.payload.location,
                organizer: action.payload.organizer,
            };
        default:
            return state;
        }
};

export const tournaments = (
    state = {
    }, action) => {
        switch (action.type) {
        case 'TOURNAMENTS_ADD_DATA':
            return {
            ...state,
                data: action.payload
            };
        default:
            return state;
        }
};