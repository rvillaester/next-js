import {DDB_URL} from '../../util/constants'

async function handler(req, res) {
    const data = await fetch(DDB_URL + '/list',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: ""
    });
    
    const storeData = await data.json();

    res.status(201).json(JSON.stringify(storeData));
  }
  
  export default handler;
  