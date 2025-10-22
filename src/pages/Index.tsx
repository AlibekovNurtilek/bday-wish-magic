import PhotoCard from "@/components/PhotoCard";
import MessageSection from "@/components/MessageSection";
import Confetti from "@/components/Confetti";
import { Heart, Sparkles, Gift, Cake } from "lucide-react";

const Index = () => {
  // Placeholder photos - replace with actual photos later
  const photos = [
    { src: "https://images.unsplash.com/photo-1464207687429-7505649dae38", alt: "Memory 1" },
    { src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3", alt: "Memory 2" },
    { src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d", alt: "Memory 3" },
    { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30", alt: "Memory 4" },
    { src: "https://images.unsplash.com/photo-1464047736614-af63643285bf", alt: "Memory 5" },
    { src: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88", alt: "Memory 6" },
  ];

  const messages = [
    {
      title: "С Днем Рождения! 🎉",
      message: "Желаю тебе невероятного счастья, бесконечной радости и исполнения всех твоих самых заветных желаний! Пусть каждый день приносит новые улыбки и незабываемые моменты!",
    },
    {
      title: "Особенный день ✨",
      message: "Сегодня твой день, и я хочу, чтобы он был наполнен волшебством! Пусть этот год будет самым ярким, полным невероятных приключений и удивительных открытий!",
    },
    {
      title: "Искренние пожелания 💝",
      message: "Желаю тебе крепкого здоровья, море позитива и океан любви! Пусть мечты становятся реальностью, а каждый новый день будет лучше предыдущего!",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50 to-pink-50 relative overflow-hidden">
      <Confetti />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-pulse" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8 animate-scale-in">
          <div className="flex justify-center gap-4 mb-8">
            <Cake className="w-12 h-12 text-primary animate-bounce-subtle" />
            <Sparkles className="w-12 h-12 text-secondary animate-float" style={{ animationDelay: "0.2s" }} />
            <Gift className="w-12 h-12 text-accent animate-bounce-subtle" style={{ animationDelay: "0.4s" }} />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight animate-fade-in">
            С Днем Рождения!
          </h1>
          
          <p className="text-2xl md:text-3xl text-foreground/80 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Пусть этот день будет самым ярким и незабываемым! 🎊
          </p>
          
          <div className="flex justify-center gap-4 mt-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Heart className="w-8 h-8 text-primary fill-primary animate-glow" />
            <Heart className="w-8 h-8 text-secondary fill-secondary animate-glow" style={{ animationDelay: "0.5s" }} />
            <Heart className="w-8 h-8 text-accent fill-accent animate-glow" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in">
          Наши воспоминания 📸
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {photos.map((photo, index) => (
            <PhotoCard
              key={index}
              src={photo.src}
              alt={photo.alt}
              delay={index * 100}
            />
          ))}
        </div>
      </section>

      {/* Messages Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto space-y-8">
        {messages.map((msg, index) => (
          <MessageSection
            key={index}
            title={msg.title}
            message={msg.message}
            delay={index * 200}
          />
        ))}
      </section>

      {/* Final Wishes */}
      <section className="py-20 px-4 md:px-8 lg:px-16 text-center">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
          <Sparkles className="w-16 h-16 mx-auto text-primary animate-float" />
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Пусть сбудутся все твои мечты!
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
            Ты особенный человек, и этот день создан специально для тебя! 
            Наслаждайся каждым мгновением! 🎈✨🎁
          </p>
          
          <div className="pt-8">
            <Heart className="w-12 h-12 mx-auto text-primary fill-primary animate-glow" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground">
        <p className="animate-fade-in">
          С любовью и наилучшими пожеланиями! 💕
        </p>
      </footer>
    </div>
  );
};

export default Index;
