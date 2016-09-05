
const addListItemActionCreator = (newItem) => {
  return {
    type: 'ADD_LIST',
    data: newItem
  };
};

export const Actions = {
  addListItem: addListItemActionCreator
};
