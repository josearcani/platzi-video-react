import { element } from "prop-types"

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      const arr = state.myList.map(item => item.id)
      // para evitar tener items repetidos en myList
      if (arr.includes(action.payload.id)) return state
      return {
        // traemos el state previo
        ...state,
        // que elemento voy a actualizar
        myList: [
          // traemos el state previo de myList
          ...state.myList,
          // añadimos la infomación de la acción
          action.payload
        ]
      }
    default:
      return state
  }
}

export default reducer