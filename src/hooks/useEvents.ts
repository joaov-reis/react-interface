/* eslint-disable react-hooks/preserve-manual-memoization */
import { useCallback, useEffect, useState } from "react";
import type { EventFormData, EventWithId } from "../types";
import { useCategories } from "./useCategories";

const STORAGE_KEY = "@app/events";

export function useEvents() {
  const [events, setEvents] = useState<EventWithId[]>([]);
  const {categories, isLoading} = useCategories();

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setEvents(JSON.parse(stored));
      } catch (e) {
        console.error("Error parsing events", e);
      }
    }
  }, []);

  const saveEvent = useCallback((form: EventFormData) => {
      const { categoryId, ...rest } = form;

      const categoryData = categories.find((c) => c.id === categoryId);

      const newEvent: EventWithId = {
        id: String(new Date().getTime()),
        category: categoryData!,
        ...rest,
      };
      const updatedEvents = [...events, newEvent];
      setEvents(updatedEvents);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEvents));
    },
    [events, categories],
  );

  const getEventById = useCallback(
    (id: string) => {
      return events.find((e) => e.id === id);
    },
    [events],
  );

  return {
    events,
    categories,
    isLoadingCategories: isLoading,
    getEventById,
    saveEvent,
  };
}