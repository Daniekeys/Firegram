import { useState, useEffect } from 'react';

import { projectFirestore } from '../firebase/config'

const useFirestore = (collection) => {
 const [docs, setDocs] = useState([]);

 useEffect(() => {

  const unsub =  projectFirestore.collection(collection)
  .orderBy('createdAt','desc')
   .onSnapshot((snap) => {
    let documents = [];
    snap.forEach(doc => {
     documents.push({...doc.data(), id: doc.id})
    });
    setDocs(documents)
   })

   return () => unsub();


 }, [collection])
 return { docs };
}

export default useFirestore;

// the onSnapshot is a call back function that get fired each time there is a change in the documents being uploaded to the firebase 

// so that means we are listening to real time database from the firebase store
// doc.data will get us the info from the database.