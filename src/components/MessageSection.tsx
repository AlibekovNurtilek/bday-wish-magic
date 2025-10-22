import { Card, CardContent } from "@/components/ui/card";

interface MessageSectionProps {
  title: string;
  message: string;
  delay?: number;
}

const MessageSection = ({ title, message, delay = 0 }: MessageSectionProps) => {
  return (
    <Card 
      className="bg-gradient-to-br from-card/90 to-primary/5 backdrop-blur-md border-3 border-primary/30 animate-fade-in-up shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:border-primary/60 group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-10 md:p-14 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
        
        <h3 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent relative z-10 group-hover:scale-105 transition-transform duration-500">
          {title}
        </h3>
        <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 relative z-10">
          {message}
        </p>
      </CardContent>
    </Card>
  );
};

export default MessageSection;
