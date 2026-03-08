export type Event = {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  category: Category;
};

export interface EventWithId extends Event {
  id: string;
}

export interface EventFormData extends Omit<Event, "category"> {
  categoryId: string;
}

export type FormErros = {
  [key in keyof Partial<EventFormData>]: string;
};

export interface Category {
  id: string;
  name: string;
}

export interface ThemeType {
  body: string;
  text: string;
  cardBg: string;
  border: string;
}