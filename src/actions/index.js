import * as types from '../constants/action_types';

export function changeName(id, newName) {
	return { type: types.CHANGE_NAME, id, newName };
}

export function selectHero(id) {

  return { type: types.SELECT_HERO, id };
}
