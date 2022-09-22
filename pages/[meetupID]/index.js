import MeetupDetails from "../../components/meetups/MeetupDetails";

function Detailes(props) {
    return <MeetupDetails {...props.meetupData} />;
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupID: "m1",
                },
            },
            {
                params: {
                    meetupID: "m2",
                },
            },
        ],
    };
}

export async function getStaticProps(context) {
    const meetupID = context.params.meetupID;

    return {
        props: {
            meetupData: {
                image: "https://wallpapercave.com/wp/5d5Ox2o.jpg",
                id: meetupID,
            },
        },
    };
}

export default Detailes;
