export interface Project {
  _id: string;
  title: string;
  description: string;
  page_category: "brand-identity" | "business-creatives" | "poster-design";
  category: string;
  imageUrl: string;
  createdAt: string;
}
