import Head from "next/head";
import { Fragment, useContext } from "react";
import { getEventById, getFeaturedEvents } from "../../helpers/api-utils";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import Comments from "../../components/input/comments";
import NotificationContext from "../../store/notification-context";

const EventDetailPage = (props) => {
  const notificationCtx = useContext(NotificationContext);

  const { selectedEvent } = props;

  const event = selectedEvent;

  if (!event) {
    return (
      <ErrorAlert>
        <p>No Event Found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} notificationCtx={notificationCtx} />
    </Fragment>
  );
};

export default EventDetailPage;

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({
    params: {
      eventId: event.id,
    },
  }));

  /*
  [
    { params: { eventId: 'e1' } },
    { params: { eventId: 'e2' } },
    { params: { eventId: 'e3' } },
    { params: { eventId: 'e4' } }
  ]
  */

  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const { eventId } = context.params;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
      revalidate: 30,
    },
  };
};
