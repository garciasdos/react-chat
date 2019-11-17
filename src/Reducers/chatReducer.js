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
        }
    ]
};

export const chatReducer = (state = chatDefault, action) => {
    switch (action.type) {
        case 'ADD_CONVERSATION':
            let newConversations = state.conversations;
            newConversations.push(action.conversation);
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