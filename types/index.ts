export type PostType = {
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  slug: string;
  featuredMedia: {
    source_url: string;
    alt_text: string;
  };
  title: {
    rendered: string;
  };
  authorData: AuthorType;
};

export type HomeType = PostType & {
  parselyMeta: {
    [key: string]: string | string[];
  };
};

export type AuthorType = {
  avatar_urls: {
    [key: string]: string;
  };
  name: string;
};

export type ShapeType = {
  shape: string;
  isActive: boolean;
};

export type ColorType = {
  color: string;
  isActive: boolean;
};

export type ShapeContextType = {
  colorArr: ColorType[];
  shapeArr: ShapeType[];
};
