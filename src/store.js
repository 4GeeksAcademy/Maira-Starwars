export const initialStore = () => {
  return {
     people: [],
    favorite: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case 'get_people':

      return {
        ...store,
        people: action.payload
      }

    case 'favorite_element':

      return {
        ...store,
        favorite: store.favorite.map((element) => { element.uid == uid ? { ...favorite,  } : favorite })
      }


    default:
      throw Error('Unknown action.');
  }
}
