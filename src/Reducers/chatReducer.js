const chatDefault = {
    selected: 1,
    name: 'Diego',
    conversations: [
        {
            name: 'Diego',
            id: 1,
            conversation: []
        },
        {
            name: 'Javier',
            id: 2,
            conversation: [
                {fromMe: false, data: '1. this is a message1. this is a message1. this is a message1. this is a message1. this is a message1. this is a message1. this is a message1. this is a message1. this is a message1. this is a message1. this is a message1. this is a message1. this is a message1. this is a message1. this is a message1. this is a message1. this is a message'},
                {fromMe: false, data: '2. this is a message'},
                {fromMe: true, data: '3. this is a message'},
                {fromMe: false, data: '1. this is a message'},
                {fromMe: false, data: '2. this is a message'},
                {fromMe: true, data: '3. this is a message'},
                {fromMe: false, data: '1. this is a message'},
                {fromMe: false, data: '2. this is a message'},
                {fromMe: true, data: '3. this is a message'},
                {fromMe: false, data: '1. this is a message'},
                {fromMe: false, data: '2. this is a message'},
                {fromMe: true, data: '3. this is a message'},
                {fromMe: false, data: '1. this is a message'},
                {fromMe: false, data: '2. this is a message'},
                {fromMe: true, data: '3. this is a message'},
                {fromMe: false, data: '1. this is a message'},
                {fromMe: false, data: '2. this is a message'},
                {fromMe: true, data: '3. this is a message'},
            ]
        },
        {
            name: 'Aznar',
            id: 3,
            conversation: []
        },
        {
            name: 'Diego',
            id: 4,
            conversation: []
        },
        {
            name: 'Javier',
            id: 5,
            conversation: []
        },
        {
            name: 'Aznar',
            id: 6,
            conversation: []
        },
        {
            name: 'Diego',
            id: 7,
            conversation: []
        },
        {
            name: 'Javier',
            id: 8,
            conversation: []
        },
        {
            name: 'Aznar',
            id: 9,
            conversation: []
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