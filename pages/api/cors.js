import {DDB_URL} from '../../util/constants'

async function handler(req, res) {
    await fetch(DDB_URL + '/cors');
    res.status(201).json({ message: 'CORS successful!' });
}
  
export default handler;
  