import { getNode } from './utils';

import CLASS_NAMES  from './class-list';

const {
  MODAL,
  SHOW_MODAL,
} = CLASS_NAMES;

import state, { SwalState } from './state';

export const openModal = (): void => {
  let modal = getNode(MODAL);
  modal.classList.add(SHOW_MODAL); 

  state.isOpen = true;
};

export const closeModal = (): void => {
  let modal = getNode(MODAL);
  modal.classList.remove(SHOW_MODAL); 

  state.isOpen = false;
};

/*
 * Filter the state object. Remove the stuff
 * that's only for internal use
 */
export const getState = (): SwalState => {
  let publicState = Object.assign({}, state);
  delete publicState.promise;

  return publicState;
};

