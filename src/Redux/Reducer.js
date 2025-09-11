const initialState = []

export const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload]

    case "DELETE":
      return state.filter((_, i) => i !== action.payload)

    case "EDIT":
      return state.map((item, i) =>
        i === action.payload.index ? action.payload.update : item
      )

    default:
      return state
  }
}
