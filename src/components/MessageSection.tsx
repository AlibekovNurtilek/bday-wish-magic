import { Card, CardContent } from "@/components/ui/card";

interface MessageSectionProps {
  title: string;
  message: string;
  delay?: number;
}

const MessageSection = ({ title, message, delay = 0 }: MessageSectionProps) => {
  return (
    <Card 
      className="bg-card/80 backdrop-blur-sm border-2 border-primary/20 animate-fade-in-up shadow-lg hover:shadow-xl transition-all duration-500"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-8 md:p-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
          {message}
        </p>
      </CardContent>
    </Card>
  );
};

export default MessageSection;
