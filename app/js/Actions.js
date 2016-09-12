const addListItemActionType = 'ADD_LIST_ITEM';

const addListItemActionCreator = (newItem) => {
  return {
    type: addListItemActionType,
    data: newItem
  };
};

export const Actions = {
  addListItem: addListItemActionCreator,
};

export const ActionTypes = {
  addListItem: addListItemActionType,
};
