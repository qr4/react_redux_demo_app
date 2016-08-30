
const addListItemAction = (newItem: any) => {
  return {
    type: 'ADD_LIST',
    data: newItem
  };
};

export const Actions = {
  addListItem: addListItemAction
};
