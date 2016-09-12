const addListItemActionType = 'ADD_LIST_ITEM';
const deleteListItemActionType = 'DELETE_LIST_ITEM';

const addListItemActionCreator = (newItem) => {
  return {
    type: addListItemActionType,
    data: newItem
  };
};

const deleteListItemActionCreator = (index) => {
  return {
    type: deleteListItemActionType,
    data: index
  };
};

export const Actions = {
  addListItem: addListItemActionCreator,
  deleteListItem: deleteListItemActionCreator
};

export const ActionTypes = {
  addListItem: addListItemActionType,
  deleteListItem: deleteListItemActionType
};
