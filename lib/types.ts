export interface Product {
  id: string
  name: string
  slug: string
  description: string | null
  /**
   * Postgres `numeric` is returned by PostgREST as a string to preserve
   * precision. Coerce with Number(...) before formatting (the card does this).
   */
  price: number | string
  category: string
  image_url: string | null
  is_bestseller: boolean | null
  is_available: boolean | null
  weight: string | null
  ingredients: string[] | null
  allergens: string[] | null
  nutritional_info: Record<string, unknown> | null
  created_at: string | null
  updated_at: string | null
}
