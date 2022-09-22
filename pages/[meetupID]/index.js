import MeetupDetails from "../../components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";

function Detailes(props) {
    return <MeetupDetails {...props.meetupData} />;
}

export async function getStaticPaths() {
    const client = await MongoClient.connect(
        "mongodb+srv://react-nextjs:react-nextjs@cluster0.tlgrilq.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

    client.close();

    return {
        fallback: "blocking",
        paths: meetups.map((meetup) => ({
            params: { meetupID: meetup._id.toString() },
        })),
    };
}

export async function getStaticProps(context) {
    const meetupID = context.params.meetupID;

    const client = await MongoClient.connect(
        "mongodb+srv://react-nextjs:react-nextjs@cluster0.tlgrilq.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const selectedMeetup = await meetupsCollection.findOne({
        _id: ObjectId(meetupID),
    });

    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title.toString(),
                address: selectedMeetup.address.toString(),
                image: selectedMeetup.image.toString(),
            },
        },
    };
}

export default Detailes;
