import { Card } from "@/components/ui/card";

interface PhotoCardProps {
  src: string;
  alt: string;
  delay?: number;
}

const PhotoCard = ({ src, alt, delay = 0 }: PhotoCardProps) => {
  return (
    <Card 
      className="overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up border-2 border-primary/20"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </Card>
  );
};

export default PhotoCard;
