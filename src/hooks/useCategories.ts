import { useEffect, useState } from "react";
import type { Category } from "../types/event";

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error loading categories:", err))
      .finally(() => setIsLoading(false));
  }, []);

  return { categories, isLoading };
}