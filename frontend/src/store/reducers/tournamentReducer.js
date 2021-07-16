export const tournament = (
    state = {
        id: null,
    }, action) => {
        switch (action.type) {
        case 'TOURNAMENT_ADD_DATA':
            return {
            ...state,
                id: action.payload,
            };
        default:
            return state;
        }
};