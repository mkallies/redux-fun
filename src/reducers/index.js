// Reducers in here

/*

- Here is where we update state logic based on the action's `type` property.  Often people use switch statements but you can
  do if statements if you prefer that.  Also do not mutate state!  Always return a new copy of state. (state, action) => newState

Examples of different ways to write a reducer

const initialState = 'I like bananas'

function someReducer(state = initialState, action) {
  if (action.type === 'oranges') {
    return 'I like oranges'
  } else if (action.type === 'grapes') {
    return 'I like grape juice'
  } else {
    return state
  }
}

function otherReducer(state = {}, action) {
  switch(action.type) {
    case 'oranges':
      return 'I like oranges'
    case 'grapes':
      return 'I like grape juice'
    default:
      return state
  }
}

*/

// Create a reducer down below, don't forget to export
