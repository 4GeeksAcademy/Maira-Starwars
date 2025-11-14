export const initialStore = () => {
  return {
    people: [],
    learnMorePeople: [],
    planets: [],
    learnMorePlanets: [],
    starships: [],
    learnMoreStarships: [],
    favorite: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'get_people':
      return {
        ...store,
        people: action.payload
      }

    case 'learn_more_people':
      return {
        ...store,
        learnMorePeople: action.payload
      }

    case 'get_planets':
      return {
        ...store,
        planets: action.payload
      }

    case 'learn_more_planets':
      return {
        ...store,
        learnMorePlanets: action.payload
      }

    case 'get_starships':
      return {
        ...store,
        starships: action.payload
      }

    case 'learn_more_starships':
      return {
        ...store,
        learnMoreStarships: action.payload
      }

    case 'favorite_element':

    if (!store.favorite.some((item) => item.uid === action.payload.uid)) {
            return {
        ...store,
        favorite: [...store.favorite, action.payload]
      }
    }
    
    case 'eliminar_favs':
      
    return {
      ...store,
      favorite: store.favorite.filter((elemento, index) => index != action.payload)
    }

    default:
      throw Error('Unknown action.');
  }
}

