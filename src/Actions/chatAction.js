export const addConversation = (conversation = {}) => ({
    type: 'ADD_CONVERSATION',
    conversation
});

export const setSelected = (id = 1) => ({
    type: 'SET_SELECTED',
    id
});

export const setName = (name = '') => ({
    type: 'SET_NAME',
    name
});

export const setConverSelected = (name = '', id = 1) => ({
    type: 'SET_CONVER_SELECTED',
    id,
    name
});