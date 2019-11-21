const chatDefault = {
    selected: 1,
    name: 'Diego',
    conversations: [
        {
            name: 'Diego',
            id: 1
        },
        {
            name: 'Javier',
            id: 2
        },
        {
            name: 'Aznar',
            id: 3
        },
        {
            name: 'Diego',
            id: 4
        },
        {
            name: 'Javier',
            id: 5
        },
        {
            name: 'Aznar',
            id: 6
        },
        {
            name: 'Diego',
            id: 7
        },
        {
            name: 'Javier',
            id: 8
        },
        {
            name: 'Aznar',
            id: 9
        },
    ]
};

export const chatReducer = (state = chatDefault, action) => {
    switch (action.type) {
        case 'ADD_CONVERSATION':
            let newConversations = [action.conversation];
            newConversations = newConversations.concat(state.conversations);
            return {
                ...state,
                conversations: newConversations
            };
        case 'SET_SELECTED':
            return {
                ...state,
                selected: action.id
            };
        case 'SET_NAME':
            return {
                ...state,
                name: action.name
            };
        case 'SET_CONVER_SELECTED':
            return {
                ...state,
                selected: action.id,
                name: action.name
            };
        default:
            return state;
    }
};