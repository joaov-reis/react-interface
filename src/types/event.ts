export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  category: string;
};

export interface Category{
  id: string;
  name: string;
}