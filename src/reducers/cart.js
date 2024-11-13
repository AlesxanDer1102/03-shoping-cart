export const cartInitialState = JSON.parse(localStorage.getItem('cart')) || []

export const CART_ACTIONS_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  SUBSTRACT_FROM_CART: 'SUBSTRACT_FROM_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTIONS_TYPES.ADD_TO_CART]: (state, action) => {
    const { id } = action
    const productInCartIndex = state.findIndex(item => item.id === id)
    if (productInCartIndex >= 0) {
      //   const newState = structuredClone(state)
      //   newState[productInCartIndex].quantity += 1
      //   const newState = state.map((item, index) => {
      //     if (index === productInCartIndex) {
      //       return { ...item, quantity: item.quantity + 1 }
      //     }
      //     return item
      //   })

      const newState = [
        ...state.slice(0, productInCartIndex),
        {
          ...state[productInCartIndex],
          quantity: state[productInCartIndex].quantity + 1
        },
        ...state.slice(productInCartIndex + 1)
      ]

      updateLocalStorage(newState)
      return newState
    }
    const newState = [...state, { ...action, quantity: 1 }]
    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTIONS_TYPES.SUBSTRACT_FROM_CART]: (state, action) => {
    const { id } = action
    const productInCartIndex = state.findIndex(item => item.id === id)
    const newState = structuredClone(state)
    if (newState[productInCartIndex].quantity > 1) {
      newState[productInCartIndex].quantity -= 1
      updateLocalStorage(newState)
      return newState
    }

    const filteredState = newState.filter(item => item.id !== id)
    updateLocalStorage(filteredState)
    return filteredState
  },
  [CART_ACTIONS_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { id } = action
    const filteredState = state.filter(item => item.id !== id)
    updateLocalStorage(filteredState)
    return filteredState
  },
  [CART_ACTIONS_TYPES.CLEAR_CART]: () => {
    updateLocalStorage([])
    return []
  }
}

export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  const updateState = UPDATE_STATE_BY_ACTION[actionType]

  return updateState ? updateState(state, actionPayload) : state
}
