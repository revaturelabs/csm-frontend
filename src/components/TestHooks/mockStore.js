export const mockStore = {
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
}

export let store;