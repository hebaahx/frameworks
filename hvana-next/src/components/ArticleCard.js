import Image from "next/image";

export default function ArticleCard({ heading, image, alt, large = false }) {
  return (
    <article className={large ? "card card-large" : "card"}>
      <Image
        src={image}
        alt={alt}
        fill
        unoptimized
        sizes="(min-width: 810px) 60vw, 100vw"
      />
      <a href="#">
        <h2>{heading}</h2>
      </a>
    </article>
  );
}