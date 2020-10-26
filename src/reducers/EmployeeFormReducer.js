const INITIAL_STATE = {
  name: '',
  shift: 'Monday',
  phone: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'employee_update':
      return {...state, [action.payload.prop]: action.payload.value};
    case 'employee_created':
      return INITIAL_STATE;
    case 'employee_saved':
      return INITIAL_STATE;
    case 'reset':
      console.log('resetted');
      return INITIAL_STATE;
    default:
      return state;
  }
};
