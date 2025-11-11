import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Photo {
  url: string;
  caption: string;
  type: "hero" | "ingredient" | "step" | "plating";
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhoto(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const goToNext = () => {
    if (selectedPhoto !== null && selectedPhoto < photos.length - 1) {
      setSelectedPhoto(selectedPhoto + 1);
    }
  };

  const goToPrev = () => {
    if (selectedPhoto !== null && selectedPhoto > 0) {
      setSelectedPhoto(selectedPhoto - 1);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-md hover-elevate active-elevate-2"
            onClick={() => openLightbox(index)}
            data-testid={`img-gallery-${index}`}
          >
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity">
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white text-xs font-medium">{photo.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={selectedPhoto !== null} onOpenChange={() => closeLightbox()}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden">
          {selectedPhoto !== null && (
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
                onClick={closeLightbox}
                data-testid="button-close-lightbox"
              >
                <X className="w-5 h-5" />
              </Button>

              <img
                src={photos[selectedPhoto].url}
                alt={photos[selectedPhoto].caption}
                className="w-full h-auto max-h-[80vh] object-contain bg-black"
                data-testid="img-lightbox"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-center">{photos[selectedPhoto].caption}</p>
              </div>

              {selectedPhoto > 0 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                  onClick={goToPrev}
                  data-testid="button-prev-photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
              )}

              {selectedPhoto < photos.length - 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                  onClick={goToNext}
                  data-testid="button-next-photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
