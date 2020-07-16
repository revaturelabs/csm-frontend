<<<<<<< HEAD
let initialState = {
  categories: [],
  displayCategories: [],
=======
const initialState = {
>>>>>>> a73228d462be0419868f099f40c63d49f4b344f0
  SWOT: {
    Strengths: [],
    Weaknesses: [],
    Opportunities: [],
    Threats: [],
    Notes: ''
<<<<<<< HEAD
  },
=======
  }, 
>>>>>>> a73228d462be0419868f099f40c63d49f4b344f0
  dropDepth: 0,
  dropZone: '',
  StrengthsModal: false,
  WeaknessesModal: false,
  OpportunitiesModal: false,
  ThreatsModal: false,
  currentNote: '',
  currentCategory: '',
  notes: ''
};

const swotReducer = (state = initialState, action) => {
  // console.log('In the swotReducer')
  // console.log(state)
  // console.log(action)
  switch (action.type) {
<<<<<<< HEAD
    case 'updateCategories':
        return Object.assign({}, state, { categories: action.getCategories })
    case 'updateDisplayCategories':
        return Object.assign({}, state, { displayCategories: action.getDisplayCategories })
=======
>>>>>>> a73228d462be0419868f099f40c63d49f4b344f0
    case 'updateDropZone':
      return Object.assign({}, state, {dropZone: action.dropZone})
    case 'updateDropDepth':
      return Object.assign({}, state, {dropDepth: action.dropDepth})
    case 'updateStrengths':
      return Object.assign({}, state, {SWOT: Object.assign({}, state.SWOT, {Strengths: [...state.SWOT.Strengths, action.data]} )})
    case 'updateWeaknesses':
      return Object.assign({}, state, {SWOT: Object.assign({}, state.SWOT, {Strengths: [...state.SWOT.Weaknesses, action.data]} )})
    case 'updateOpportunities':
      return Object.assign({}, state, {SWOT: Object.assign({}, state.SWOT, {Strengths: [...state.SWOT.Opportunities, action.data]} )})
    case 'updateThreats':
      return Object.assign({}, state, {SWOT: Object.assign({}, state.SWOT, {Strengths: [...state.SWOT.Threats, action.data]} )})
    case 'toggleStrengthsModal':
      return Object.assign({}, state, {StrengthsModal: action.toggle})
    case 'toggleWeaknessesModal':
      return Object.assign({}, state, {WeaknessesModal: action.toggle})
    case 'toggleOpportunitiesModal':
      return Object.assign({}, state, {OpportunitiesModal: action.toggle})
    case 'toggleThreatsModal':
      return Object.assign({}, state, {ThreatsModal: action.toggle})
    case 'updateNote':
      return Object.assign({}, state, {currentNote: action.note})
    case 'updateCategory':
      return Object.assign({}, state, {currentCategory: action.category})
    case 'updateNotes':
            return Object.assign({}, state, {notes: action.notes})
    default:
      return state;
  }
};

export default swotReducer;
