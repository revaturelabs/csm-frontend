const initialState = {
  SWOT: {
    Strengths: [],
    Weaknesses: [],
    Opportunities: [],
    Threats: [],
    Notes: ''
  }, 
  dropDepth: 0,
  dropZone: '',
  Strengths_modal: false,
  Weaknesses_modal: false,
  Opportunities_modal: false,
  Threats_modal: false,
  current_note: '',
  current_category: ''
};

const swotReducer = (state = initialState, action) => {
  // console.log('In the swotReducer')
  // console.log(state)
  // console.log(action)
  switch (action.type) {
    case 'update_drop_zone':
      return Object.assign({}, state, {dropZone: action.dropZone})
    case 'update_drop_depth':
      return Object.assign({}, state, {dropDepth: action.dropDepth})
    case 'update_Strengths':
      return Object.assign({}, state, {SWOT: Object.assign({}, state.SWOT, {Strengths: [...state.SWOT.Strengths, action.data]} )})
    case 'update_Weaknesses':
      return Object.assign({}, state, {SWOT: Object.assign({}, state.SWOT, {Strengths: [...state.SWOT.Weaknesses, action.data]} )})
    case 'update_Opportunities':
      return Object.assign({}, state, {SWOT: Object.assign({}, state.SWOT, {Strengths: [...state.SWOT.Opportunities, action.data]} )})
    case 'update_Threats':
      return Object.assign({}, state, {SWOT: Object.assign({}, state.SWOT, {Strengths: [...state.SWOT.Threats, action.data]} )})
    case 'toggle_Strengths_modal':
      return Object.assign({}, state, {Strengths_modal: action.toggle})
    case 'toggle_Weaknesses_modal':
      return Object.assign({}, state, {Weaknesses_modal: action.toggle})
    case 'toggle_Opportunities_modal':
      return Object.assign({}, state, {Opportunities_modal: action.toggle})
    case 'toggle_Threats_modal':
      return Object.assign({}, state, {Threats_modal: action.toggle})
    case 'updateNote':
      return Object.assign({}, state, {current_note: action.note})
    case 'updateCategory':
      return Object.assign({}, state, {current_category: action.category})
    default:
      return state;
  }
};

export default swotReducer;
