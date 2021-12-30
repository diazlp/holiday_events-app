const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Chinese New Year Celebration",
    description: "Wanna see some dragon?",
    location: "Petak Sembilan Glodok, West Jakarta",
    date: "2022-02-01",
    image: "images/chinese_new_year.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Glamorous New Year 2022",
    description:
      "Come and join us in the biggest New Year Eve yet. Forget about Omicron and let us embrace the future for the greater good!",
    location: "National Monument, Gambir, Central Jakarta",
    date: "2021-12-31",
    image: "images/new_year_2022.jpg",
    isFeatured: false,
  },
  {
    id: "e3",
    title: "Christmas Snow in the Box",
    description:
      "In this tropical, two seasons country there is no such thing as snow. But we can make it magical. Attend the chilly Christmas Eve we made just for you.",
    location: "Mall of Indonesia, North Jakarta",
    date: "2021-12-24",
    image: "images/christmas_in_the_box.jpg",
    isFeatured: true,
  },
  {
    id: "e4",
    title: "Festival of Lights",
    description:
      "You probably need no help with sightseeing in general. But what about seeing some amazing lights that will blow you away?",
    location: "Ria Rio Reservoir Park, East Jakarta",
    date: "2021-11-04",
    image: "images/festival_of_lights.jpg",
    isFeatured: true,
  },
];

export const getFeaturedEvents = () => {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
};

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
