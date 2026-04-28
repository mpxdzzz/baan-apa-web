import Image from "next/image";

type ResortImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function ResortImage({
  src,
  alt,
  className = "h-72",
  priority = false,
}: ResortImageProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />
    </div>
  );
}
