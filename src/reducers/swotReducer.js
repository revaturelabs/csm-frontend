let initialState = {
  associate: {},
  categories: ['test cat'],
  displayCategories: [],
  // disabled: true, Front End - Add Category feature. Button state deactivated due to user feedback from Emily EJ Baillie on 21 July 2020
  // newCategory: '', Front End - Add Category feature. New category state deactivated due to user feedback from Emily EJ Baillie on 21 July 2020
  SWOT: {
    date: null,
    Strengths: [],
    Weaknesses: [],
    Opportunities: [],
    Threats: [],
    Notes: ''
  },
  dropDepth: 0,
  dropZone: '',
  StrengthsModal: false,
  WeaknessesModal: false,
  OpportunitiesModal: false,
  ThreatsModal: false,
  swotModal: false,
  swotCharts: false,
  currentNote: '',
  currentCategory: '',
  notes: ''
};

const swotReducer = (state = initialState, action) => {
  // console.log('In the swotReducer')
  // console.log(state)
  // console.log(action)
  switch (action.type) {
    case 'updateSWOT':
        return Object.assign({}, state, { SWOT: Object.assign({}, action.SWOT ) })
    case 'updateCategories':
        return Object.assign({}, state, {categories: action.getCategories})
    case 'updateDisplayCategories':
        return Object.assign({}, state, {displayCategories: action.getDisplayCategories})
    case 'updateDisabledField':
        return Object.assign({}, state, {disabled: action.getDisabledField})
    case 'updateNewCategory':
        return Object.assign({}, state, {newCategory: action.getNewCategory})
    case 'updateDropZone':
      return Object.assign({}, state, {dropZone: action.dropZone})
    case 'updateDropDepth':
      return Object.assign({}, state, {dropDepth: action.dropDepth})
    case 'updateStrengths':
      return Object.assign({}, state, {SWOT: Object.assign({}, state.SWOT, {Strengths: action.data} )})
    case 'updateWeaknesses':
      return Object.assign({}, state, {SWOT: Object.assign({}, state.SWOT, {Weaknesses: action.data} )})
    case 'updateOpportunities':
      return Object.assign({}, state, {SWOT: Object.assign({}, state.SWOT, {Opportunities: action.data} )})
    case 'updateThreats':
      return Object.assign({}, state, {SWOT: Object.assign({}, state.SWOT, {Threats: action.data} )})
    case 'toggleStrengthsModal':
      return Object.assign({}, state, {StrengthsModal: action.toggle})
    case 'toggleWeaknessesModal':
      return Object.assign({}, state, {WeaknessesModal: action.toggle})
    case 'toggleOpportunitiesModal':
      return Object.assign({}, state, {OpportunitiesModal: action.toggle})
    case 'toggleThreatsModal':
      return Object.assign({}, state, {ThreatsModal: action.toggle})
    case 'updateCurrentNote':
      return Object.assign({}, state, {currentNote: action.note})
    case 'updateCategory':
      return Object.assign({}, state, {currentCategory: action.category})
    case 'updateNotes':
        return Object.assign({}, state, {SWOT: Object.assign({}, state.SWOT, {Notes: action.notes} )})
    case 'toggleSwotModal':
        return Object.assign({}, state, {swotModal: action.toggle})
    case 'toggleSwotCharts':
      return Object.assign({}, state, {swotCharts: action.toggle})
    default:
      return state;
  }
};

export default swotReducer;
