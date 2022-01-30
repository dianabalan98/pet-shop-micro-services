import React from 'react';

const useItems = () => {
    const [items, setItems] = React.useState([]);
    React.useEffect(() => {
        fetch('http://localhost:8001')
        .then(
            response => {
            return response.json();
        })
        .then(fetchedItems => setItems(fetchedItems))
        .catch(error => {
        console.log(error);
    }); 
    }, []);

    return items;
}

export default useItems;