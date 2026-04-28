import Image from "next/image";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  body?: string;
  image?: string;
  imageAlt?: string;
  noImage?: boolean;
};

export function PageHeader({
  eyebrow,
  title,
  body,
  image = "/images/topview1.jpg",
  imageAlt = "Baan APA Resort",
  noImage = false,
}: PageHeaderProps) {
  if (noImage) {
    return (
      <section className="relative overflow-hidden bg-[#17352f] px-5 pb-20 pt-40 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(242,195,107,0.2),transparent_32%),linear-gradient(135deg,#17352f,#102722)]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase text-[#f2c36b]">
            {eyebrow}
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {body && (
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              {body}
            </p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-40 text-white">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f2b26]/95 to-[#0f2b26]/45" />
      <div className="relative mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-semibold uppercase text-[#f2c36b]">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {body && (
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
            {body}
          </p>
        )}
      </div>
    </section>
  );
}
