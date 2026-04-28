type PageHeaderProps = {
  eyebrow: string;
  title: string;
  body?: string;
  image?: string;
};

export function PageHeader({ eyebrow, title, body, image }: PageHeaderProps) {
  return (
    <section
      className="relative bg-cover bg-center px-5 pb-20 pt-40 text-white"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(15, 43, 38, 0.92), rgba(15, 43, 38, 0.5)), url('${
          image ||
          "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1800&q=80"
        }')`,
      }}
    >
      <div className="mx-auto max-w-7xl">
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
