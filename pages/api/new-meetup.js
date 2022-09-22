import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;

        const client = await MongoClient.connect(
            "mongodb+srv://react-nextjs:react-nextjs@cluster0.tlgrilq.mongodb.net/meetups?retryWrites=true&w=majority"
        );

        const db = client.db();
        const meetupsCollection = db.collection("meetups");
        const result = await meetupsCollection.insertOne(data);

        client.close();

        res.status(201).json({ message: "Meetup inserting" });
        // return result;
    }
}

export default handler;
