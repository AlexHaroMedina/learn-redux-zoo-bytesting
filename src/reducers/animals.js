import { RECEIVE_ANIMAL } from '../actions';

export default (state = 'Savio', action) => {
  switch (action.type) {
    case RECEIVE_ANIMAL:
      return action.name;
    default:
      return state;
  }
};
