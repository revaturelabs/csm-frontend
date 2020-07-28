export const initialState = {
	currentAssociate: {},
	categories: ["AWS", "JavaScript", "Python"],
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
}

const reducer = (state = initialState, action) => {
  switch (action) {
    case "updateDisplaySwots":
      return Object.assign({}, state , {displaySwots: action.swots});
    case "updateAssociate":
      return Object.assign({}, state, {
        currentAssociate: Object.assign({}, action.associate),
      });
    case "setStartDate":
      return Object.assign({}, state, { startDate: action.date });
    case "setEndDate":
      return Object.assign({}, state, { endDate: action.date });
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
		return Object.assign({}, state, { swotCharts: action.toggle });
    case "updateBatchTopics":
		return Object.assign({}, state, { batchTopics: action.topics });
	case 'handleBatchSpiderData':
		return Object.assign({}, state, { spiderBatch: action.spiderBatch})
	case 'handleAssociateSpiderData':
		return Object.assign({}, state, { spiderAssociate: action.spiderAssociate })
	case 'handleQC':
		return Object.assign({}, state, { qcEvals: action.qcEvals })
	case 'getTechnologies':
		return Object.assign({}, state, { technologies: action.technologies })
	case 'setQCLabels':
		return Object.assign({}, state, { qcLabels: action.qcLabels })
	case 'setQCValues':
		return Object.assign({}, state, { qcValues: action.qcValues })
	case 'setBatchLabels':
		return Object.assign({}, state, { batchLabels: action.batchLabels })
	case 'setBatchValues':
		return Object.assign({}, state, { batchValues: action.batchValues })
	case 'setAssociateLabels':
		return Object.assign({}, state, {associateLabels: action.associateLabels })
	case 'setAssociateValues':
		return Object.assign({}, state, { associateValues: action.associateValues )
	case 'login':
		return Object.assign({}, state, { manager: action.manager })
    case 'logout':
		return Object.assign({}, state, { manager: {} })
    case 'handleEmail':
		return Object.assign({}, state, { email: action.email })
    default:
        return state;
    }
};

export default reducer;
