// Fallback data used if the backend API is unreachable, so the UI
// still renders something sensible during local development.

export const fallbackProducts = [
  { id: 1, name: "Woven Storage Basket", category: "Home & Living", price: 28.0, rating: 4.7, topSeller: true, image: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?w=500" },
  { id: 2, name: "Ceramic Pour-Over Set", category: "Kitchen", price: 42.5, rating: 4.8, topSeller: true, image: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?w=500" },
  { id: 3, name: "Organic Cotton Throw", category: "Home & Living", price: 55.0, rating: 4.6, topSeller: true, image: "https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=500" },
  { id: 4, name: "Bamboo Desk Organizer", category: "Office", price: 33.0, rating: 4.5, topSeller: true, image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500" },
  { id: 5, name: "Recycled Glass Vase", category: "Home & Living", price: 24.0, rating: 4.4, topSeller: false, image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500" },
  { id: 6, name: "Linen Apron", category: "Kitchen", price: 38.0, rating: 4.9, topSeller: false, image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=500" },
  { id: 7, name: "Wooden Desk Lamp", category: "Office", price: 64.0, rating: 4.6, topSeller: false, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500" },
  { id: 8, name: "Terracotta Planter Trio", category: "Garden", price: 30.0, rating: 4.7, topSeller: false, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500" }
];

export const fallbackCategories = [
  { id: "home-living", name: "Home & Living", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500" },
  { id: "kitchen", name: "Kitchen", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500" },
  { id: "office", name: "Office", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500" },
  { id: "garden", name: "Garden", image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=500" }
];

export const fallbackComments = [
  { id: 1, name: "Priya S.", rating: 5, text: "The pour-over set is even nicer in person. Packaging was plastic-free too.", product: "Ceramic Pour-Over Set" },
  { id: 2, name: "Marcus L.", rating: 4, text: "Storage basket is sturdy and holds shape well even when full.", product: "Woven Storage Basket" },
  { id: 3, name: "Aisha K.", rating: 5, text: "Ordered the desk organizer for my home office, fits everything I need.", product: "Bamboo Desk Organizer" },
  { id: 4, name: "Tom R.", rating: 5, text: "Delivery was fast and the throw blanket is genuinely soft, not scratchy.", product: "Organic Cotton Throw" }
];
