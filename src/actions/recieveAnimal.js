export const RECEIVE_ANIMAL = 'RECEIVE_ANIMAL';

//export const receiveAnimal = function() { return 0;};

export function receiveAnimal(nameAnimal) {
  return { type: RECEIVE_ANIMAL, name: nameAnimal };
}
