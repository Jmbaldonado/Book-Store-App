import {MongoClient, ServerApiVersion} from "mongodb";
import {MONGODB_CONNECTION_URL} from '../common/environment';


export const client = new MongoClient(MONGODB_CONNECTION_URL, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

  async function connectDb() {
      return  client.connect();
}

export default connectDb;