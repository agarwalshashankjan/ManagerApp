const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'email_changed':
      return {...state, email: action.payload};
    case 'password_changed':
      return {...state, password: action.payload};
    case 'login_success':
      return {...state, ...INITIAL_STATE, user: action.payload};
    case 'login_fail':
      return {...state, error: 'Authentication failed', loading: false};
    case 'logging':
      return {...state, loading: true, error: ''};
    default:
      return state;
  }
};
