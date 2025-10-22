import { Card } from "@/components/ui/card";

interface PhotoCardProps {
  src: string;
  alt: string;
  delay?: number;
}

const PhotoCard = ({ src, alt, delay = 0 }: PhotoCardProps) => {
  return (
    <Card 
      className="overflow-hidden group hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 hover:rotate-2 animate-fade-in-up border-4 border-primary/30 hover:border-primary/60 bg-gradient-to-br from-card to-primary/5"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
      </div>
    </Card>
  );
};

export default PhotoCard;
