import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItems] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try{
	  const localStorageItems = localStorage.getItem(itemName);
	  let parsedItems;

	  if(!localStorageItems){
	    localStorage.setItem(initialValue, JSON.stringify(initialValue));
	    parsedItems = initialValue;
	  }else{
	    parsedItems = JSON.parse(localStorageItems);
	  }
	  
	  setItems(parsedItems);
      }catch(error){
	setError(error);
      }finally{
	setLoading(false);
      }
    }, 4000);
  });

  const saveItem = (newItems) => {
    try{
      const stringifiedItems = JSON.stringify(newItems);
      localStorage.setItem(itemName,stringifiedItems);
      setItems(newItems);
    }catch(error){
      setError(error);
    }
  };

  return {
    item, 
    saveItem,
    loading,
    error
  };

}

export { useLocalStorage };
