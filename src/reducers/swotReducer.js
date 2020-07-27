let initialState = {
<<<<<<< HEAD
    currentAssociate: {
        _id: 0,
        batch_id: "",
        email: "",
        end_date: "",
        manager_id: "",
        name: "",
        salesforce_id: "",
        status: "",
        swot: [],
        trainers: [],
    },
    categories: [],
    displayCategories: [],
    startDate: "",
    endDate: new Date(),
    proDate: "",
    swots: [],
    displaySwots: [],
    editable: true,
    moveType: 'create',
    SWOT: {
        date_created: null,
        author: '',
        Strengths: [],
        Weaknesses: [],
        Opportunities: [],
        Threats: [],
        Notes: "",
    },
    dropDepth: 0,
    dropZone: "",
    StrengthsModal: false,
    WeaknessesModal: false,
    OpportunitiesModal: false,
    ThreatsModal: false,
    swotModal: false,
    swotCharts: false,
    currentNote: '',
    currentCategory: '',
    notes: '',
    currentSwots: []
=======
  currentAssociate: {},
  categories: [],
  displayCategories: [],
  startDate: new Date(new Date().setDate(new Date().getDate() - 14)),
  endDate: new Date(),
  editable: true,
  moveType: "create",
  batchTopics: [],
  SWOT: {
    date_created: null,
    author: "",
    Strengths: [],
    Weaknesses: [],
    Opportunities: [],
    Threats: [],
    Notes: "",
  },
  dropDepth: 0,
  dropZone: "",
  StrengthsModal: false,
  WeaknessesModal: false,
  OpportunitiesModal: false,
  ThreatsModal: false,
  swotModal: false,
  swotCharts: false,
  currentNote: "",
  currentCategory: "",
  notes: "",
  displaySwots: []
>>>>>>> 7ba30ffc46581d1e6d208365e45aca8e74bc14f4
};

const swotReducer = (state = initialState, action) => {
  switch (action.type) {
    case "updateDisplaySwots":
      return Object.assign({}, state , {displaySwots: action.swots});
    case "updateAssociate":
<<<<<<< HEAD
      return Object.assign({}, state, { currentAssociate: action.associate });
    case "updateProDate":
        return Object.assign({}, state, { proDate: action.proDate })
=======
      return Object.assign({}, state, {
        currentAssociate: Object.assign({}, action.associate),
      });
    case "setStartDate":
      return Object.assign({}, state, { startDate: action.date });
    case "setEndDate":
      return Object.assign({}, state, { endDate: action.date });
>>>>>>> 7ba30ffc46581d1e6d208365e45aca8e74bc14f4
    case "updateStartDate":
        return action.startDate > state.endDate
            ? Object.assign({}, state, {
            startDate: action.startDate,
            endDate: action.startDate,
            })
            : Object.assign({}, state, { startDate: action.startDate });
    case "updateEndDate":
        return action.endDate < state.startDate
            ? Object.assign({}, state, { endDate: state.startDate })
            : Object.assign({}, state, { endDate: action.endDate });
    case "updateSWOT":
        return Object.assign({}, state, { SWOT: Object.assign({}, action.SWOT) });
    case "updateSwots":
        return Object.assign({}, state, { swots: action.getSwots });
    case "updateDisplaySwots":
        return Object.assign({}, state, { displaySwots: action.getDisplaySwots});
    case "updateEditable":
      return Object.assign({}, state, {editable: action.editable});
    case "updateMoveType":
      return Object.assign({}, state, {moveType: action.move});
    case "updateCategories":
        return Object.assign({}, state, { categories: action.getCategories });
    case "updateDisplayCategories":
        return Object.assign({}, state, {
            displayCategories: action.getDisplayCategories});
    case "updateDisabledField":
        return Object.assign({}, state, { disabled: action.getDisabledField });
    case "updateNewCategory":
        return Object.assign({}, state, { newCategory: action.getNewCategory });
    case "updateDropZone":
        return Object.assign({}, state, { dropZone: action.dropZone });
    case "updateDropDepth":
        return Object.assign({}, state, { dropDepth: action.dropDepth });
    case "updateStrengths":
        return Object.assign({}, state, {
            SWOT: Object.assign({}, state.SWOT, { Strengths: action.data }),});
    case "updateWeaknesses":
        return Object.assign({}, state, {
            SWOT: Object.assign({}, state.SWOT, { Weaknesses: action.data }),});
    case "updateOpportunities":
        return Object.assign({}, state, {
            SWOT: Object.assign({}, state.SWOT, { Opportunities: action.data }),});
    case "updateThreats":
        return Object.assign({}, state, {
            SWOT: Object.assign({}, state.SWOT, { Threats: action.data }),});
    case "toggleStrengthsModal":
        return Object.assign({}, state, { StrengthsModal: action.toggle });
    case "toggleWeaknessesModal":
        return Object.assign({}, state, { WeaknessesModal: action.toggle });
    case "toggleOpportunitiesModal":
        return Object.assign({}, state, { OpportunitiesModal: action.toggle });
    case "toggleThreatsModal":
        return Object.assign({}, state, { ThreatsModal: action.toggle });
    case "updateCurrentNote":
        return Object.assign({}, state, { currentNote: action.note });
    case "updateCategory":
        return Object.assign({}, state, { currentCategory: action.category });
    case "updateNotes":
        return Object.assign({}, state, {
            SWOT: Object.assign({}, state.SWOT, { Notes: action.notes }),});
    case "toggleSwotModal":
        return Object.assign({}, state, { swotModal: action.toggle });
    case "toggleSwotCharts":
<<<<<<< HEAD
        return Object.assign({}, state, { swotCharts: action.toggle });
=======
      return Object.assign({}, state, { swotCharts: action.toggle });
    case "updateBatchTopics":
      return Object.assign({}, state, { batchTopics: action.topics });
>>>>>>> 7ba30ffc46581d1e6d208365e45aca8e74bc14f4
    default:
        return state;
    }
};

export default swotReducer;
