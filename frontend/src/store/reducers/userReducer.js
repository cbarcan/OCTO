export const user = (
  state = {
    myTournaments: [3, 5, 7],
    token: null,
    userData: {},
  }, action) => {
    switch (action.type) {
      case 'USER_ADD_TOKEN':
        localStorage.setItem('userToken', action.payload);
        return {
          ...state,
          ...{
            token: action.payload,
          },
        };
      case 'USER_ADD_DATA':
        return {
          ...state,
          ...{
            userData: action.payload,
          },
        };
      default:
        return state;
    }
};