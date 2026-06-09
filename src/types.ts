export type ScrollToSection = (_id: string) => void;

export type Race = {
  img_src: string;
  img_alt: string;
  title: string;
  date: string;
  place: string;
  distance: string;
  partner: string;
};

export type NewsItem = {
  src: string;
  alt: string;
  tag: string;
  header: string;
  date: string;
};

export type Partner = {
  name: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
};

export type FeatureIconName = "heart" | "target" | "users";

export type Feature = {
  id: string;
  icon_name: FeatureIconName;
  title: string;
  description: string;
};

export type CharityIconName = "heart" | "globe" | "thumbs-up";

export type CharityPartner = {
  icon_name: CharityIconName;
  icon_color: string;
  icon_bg: string;
  partner: string;
  description: string;
  type_color: string;
  type: string;
};
