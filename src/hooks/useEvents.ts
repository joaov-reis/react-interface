import { useCallback, useEffect, useState } from "react";
import type { Event } from "../types/event";

const STORAGE_KEY = "@app/events";

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setEvents(JSON.parse(stored));
      } catch (e) {
        console.error("Error parsing events", e);
      }
    }
  }, []);

  const saveEvent = useCallback(
    (newEvent: Event) => {
      const updatedEvents = [...events, newEvent];
      setEvents(updatedEvents);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEvents));
    },
    [events],
  );

  const getEventById = useCallback(
    (id: string) => {
      return events.find((e) => e.id === id);
    },
    [events],
  );

  return {
    events,
    getEventById,
    saveEvent,
  };
}
