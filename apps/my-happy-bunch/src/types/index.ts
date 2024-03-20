export type PageProps<
  P = Record<string, string>,
  Q = Record<string, string>
> = {
  params: P;
  searchParams: Q;
};

export type HeroContent = {
  id: string;
  image: {
    id: string;
    alt: string;
    src: string;
    width: number;
    height: number;
  };
  title: string;
  subTitle: string;
  pathname: string;
};
