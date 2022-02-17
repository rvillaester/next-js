import {DDB_URL} from '../../util/constants'

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

  console.log(data);
  await fetch(DDB_URL + '/put',
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(data)
  });

    res.status(201).json({ message: 'Store inserted!' });
  }
}

export default handler;
