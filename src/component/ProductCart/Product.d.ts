type Product = {
  title: string;
  image: string;
  rating?: Rating;
  variants: Variant[];
};

type Variant = {
  option?: string;
  price: number;
  compare_at_price?: number;
};

type Rating = {
  count: number;
  rate: number;
};
