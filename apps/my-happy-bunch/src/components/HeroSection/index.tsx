import Image from 'next/image';

import { fetchHeroSection } from '../../lib/api';

type Props = {
  pathname: string;
};

const HeroSection = async ({ pathname }: Props) => {
  const [data, fetchError] = await fetchHeroSection(pathname);

  return (
    <section className=" bg-white px-2 py-8">
      <div className="min-h-[30vh] max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div className=" h-full flex flex-col justify-center items-center">
          {data && (
            <>
              <h1 className="text-5xl font-bold my-4">{data.title}</h1>
              <p>{data.subTitle}</p>
            </>
          )}
          {fetchError && (
            <p className=" text-red-700 font-semibold text-center">
              {fetchError}
            </p>
          )}
        </div>
        <div className="hidden md:h-full md:flex md:flex-col justify-center items-center">
          {data && (
            <Image
              src={data.image.src}
              alt={data.image.alt}
              width={data.image.width}
              height={data.image.height}
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
};

export const HeroSectionSkeleton = () => (
  <section className=" bg-white px-2 py-8">
    <div className="min-h-[30vh] max-w-5xl mx-auto grid grid-cols-1 gap-2 md:grid-cols-[2fr_1fr]  p-2 border-2 border-slate-300 rounded-lg">
      <div className=" h-full flex flex-col justify-start items-center">
        <div className=" bg-slate-200 h-[95px] rounded w-full my-2"> </div>
        <div className=" bg-slate-200  h-[50px] rounded w-full my-2"> </div>
      </div>
      <div className="hidden md:h-full md:flex md:flex-col justify-start items-center">
        <div className=" bg-slate-200 h-[200px] w-full rounded my-2"> </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
