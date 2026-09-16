export type EventStatus = "draft" | "published" | "upcoming" | "completed";
export type EventType = "Workshop" | "Talk" | "Event" | "Seminar" | "Contest";

export type Event = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  shortDescription?: string;
  description?: string;
  eventDate?: string;
  startTime?: string;
  endTime?: string;
  location?: string;
  coverImage?: string;
  galleryImages?: string[];
  registrationLink?: string;
  eventType?: EventType;
  featured?: boolean;
  status?: EventStatus;
};
