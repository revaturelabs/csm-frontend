const initialState = {
    batches: [
        {
            batchID: 1,
            batchName: '2005 Python',
            skill: 'Big Data',
            manager: 'Julie',
            trainer: [
                {
                    role: '',
                    employee: {
                        email: 'richard.orr@test',
                        firstName: 'Richard',
                        lastName: 'Orr',
                    },
                }
            ],
            promotionDate: '5/5/2020', //I forget the date format
            associates: [
                {
                    name: 'Associate 1',
                    userID: 'test1@test.test',
                },
                {
                    name: 'Associate 2',
                    userID: 'test2@test.test'
                },
            ]
        },
        {
            batchID: 2,
            batchName: '2006 Java',
            skill: 'Big Data',
            manager: 'Julie',
            trainer: [
                {
                    role: '',
                    employee: {
                        email: 'john.doe@test',
                        firstName: 'John',
                        lastName: 'Doe',
                    }
                },
                {
                    role: '',
                    employee: {
                        email: 'jane.smith@test',
                        firstName: 'Jane',
                        lastName: 'Smith',
                    }
                }
            ],
            promotionDate: '5/5/2020', //I forget the date format
            associates: [
                {
                    name: 'Associate 3',
                    userID: 'test3@test.test'
                },
                {
                    name: 'Associate 4',
                    userID: 'test4@test.test'
                },
            ]
        }
    ]
    
}

function batchReducer(state = initialState, action) {
    console.log(state);
    console.log(action);
    switch(action.type) {
        case 'updateBatches':
            return Object.assign({}, state, {batches: action.batches})
        default:
            return state;
    }
}

export default batchReducer;


// test data only. Place in initialState to see accordions
