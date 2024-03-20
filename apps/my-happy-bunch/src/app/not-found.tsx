import Image from 'next/image';

const NotFoundPage = (): JSX.Element => (
  <div className=" h-screen flex flex-col justify-center items-center">
    <h1>Oups!...</h1>
    <Image
      src="https://i.imgur.com/FOeYt4E.png"
      alt="oustrich"
      width={400}
      height={400}
      priority
    />
    <h2>Not found</h2>
    <p>We haven&rsquo;t found the page you have requested.</p>
  </div>
);

export default NotFoundPage;
