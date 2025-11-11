import PhotoGallery from "../PhotoGallery";

const mockPhotos = [
  { url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80", caption: "Final plated sourdough", type: "hero" as const },
  { url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80", caption: "Flour and ingredients", type: "ingredient" as const },
  { url: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=800&q=80", caption: "Dough rising", type: "step" as const },
  { url: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=800&q=80", caption: "Fresh from the oven", type: "plating" as const },
  { url: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80", caption: "Sliced bread texture", type: "step" as const },
  { url: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800&q=80", caption: "Beautiful crust detail", type: "plating" as const },
];

export default function PhotoGalleryExample() {
  return (
    <div className="w-full max-w-4xl">
      <PhotoGallery photos={mockPhotos} />
    </div>
  );
}
