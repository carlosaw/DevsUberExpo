const initialState = {
  token: '',
  name: '',
  travels: [
    {
      id: new Date().getTime(),
      driver: 'Fulano',
      from: 'Rua tal',
      to: 'Rua old',
    },
    {
      id: new Date().getTime(),
      driver: 'Fulano',
      from: 'Rua tal',
      to: 'Rua old',
    },
    {
      id: new Date().getTime(),
      driver: 'Fulano',
      from: 'Rua tal',
      to: 'Rua old',
    },
    {
      id: new Date().getTime(),
      driver: 'Fulano',
      from: 'Rua tal',
      to: 'Rua old',
    },
  ],
};

export default (state = initialState, action) => {
  let newTravels = [...state.travels];
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload.name };
    case 'SET_TOKEN':
      return { ...state, token: action.payload.token };
    case 'ADD_TRAVEL':
      newTravels.push({
        id: new Date().getTime(),
        driver: action.payload.driver,
        from: action.payload.from,
        to: action.payload.to,
      });
      return { ...state, travels: newTravels };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};
