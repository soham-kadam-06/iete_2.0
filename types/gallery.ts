export type GalleryImage = {
  _key: string;
  asset?: {
    _ref: string;
  };
  alt?: string;
};

export type GalleryAlbum = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description?: string;
  coverImage?: string;
  date?: string;
  images?: GalleryImage[];
};
