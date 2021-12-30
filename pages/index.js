import Head from "next/head";

import { getFeaturedEvents } from "../helpers/api-utils";
import EventList from "../components/events/event-list";
import NewsletterRegistration from "../components/input/newsletter-registration";

const HomePage = (props) => {
  const { events } = props;

  return (
    <div>
      <Head>
        <title>Holiday Events Homepage</title>
        <meta
          name="description"
          content="find a gigantic holiday events near you"
        />
      </Head>
      <ul>
        <NewsletterRegistration />
        <EventList items={events} />
      </ul>
    </div>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
};
