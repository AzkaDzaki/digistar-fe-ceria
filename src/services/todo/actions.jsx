// actions.js 
// CRUD actions for todo
// type dan payload adalah standar dari redux actions
// type adalah tipe aksi yang akan dilakukan
// payload adalah data yang akan dimasukkan ke dalam state

export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO', // CAPITAL: Definitive action type
    payload: todo, // data di masukin ke payload
  };
};

export const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    payload: id,
  };
};
