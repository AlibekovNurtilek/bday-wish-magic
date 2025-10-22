import PhotoCard from "@/components/PhotoCard";
import MessageSection from "@/components/MessageSection";
import Confetti from "@/components/Confetti";
import BackgroundMusic from "@/components/BackgroundMusic";
import FloatingParticles from "@/components/FloatingParticles";
import { Heart, Sparkles, Gift, Cake, PartyPopper, Crown } from "lucide-react";

const Index = () => {
  // Placeholder photos - replace with actual photos later
  const photos = [
    { src: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01", alt: "Любимая мама" },
    { src: "https://images.unsplash.com/photo-1543013309-0d1f4edeb868", alt: "Вместе навсегда" },
    { src: "https://images.unsplash.com/photo-1521791055366-0d553872125f", alt: "Драгоценные моменты" },
  ];

  const messages = [
    {
      title: "Любимая мамочка! 💝",
      message: "С днем рождения, самая лучшая мама на свете! Ты — мое вдохновение, моя опора и мой самый близкий человек. Спасибо тебе за твою бесконечную любовь, заботу и мудрость. Пусть этот день будет наполнен радостью и теплом!",
    },
    {
      title: "Слова благодарности 🌹",
      message: "Мамочка, ты научила меня быть сильным, добрым и верить в себя. Твоя улыбка — это самое яркое солнце в моей жизни. Желаю тебе крепкого здоровья, счастья и исполнения всех желаний. Ты заслуживаешь только самого лучшего!",
    },
    {
      title: "От всего сердца ❤️",
      message: "Пусть каждый твой день будет полон радости, любви и приятных сюрпризов! Ты — самая красивая, мудрая и добрая. Спасибо за то, что ты есть. Я люблю тебя больше всех слов на свете!",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100 relative overflow-hidden">
      <FloatingParticles />
      <Confetti />
      <BackgroundMusic />
      
      {/* Animated background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        
        <div className="relative z-10 text-center max-w-5xl mx-auto space-y-10 animate-scale-in">
          <div className="flex justify-center gap-6 mb-12">
            <Crown className="w-16 h-16 text-accent animate-bounce-subtle drop-shadow-lg" />
            <PartyPopper className="w-16 h-16 text-primary animate-float drop-shadow-lg" style={{ animationDelay: "0.3s" }} />
            <Sparkles className="w-16 h-16 text-secondary animate-bounce-subtle drop-shadow-lg" style={{ animationDelay: "0.6s" }} />
          </div>
          
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight animate-fade-in drop-shadow-2xl">
              С Днем Рождения,
            </h1>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-fade-in drop-shadow-2xl" style={{ animationDelay: "200ms" }}>
              Мамочка!
            </h2>
          </div>
          
          <p className="text-2xl md:text-4xl text-foreground/90 font-medium animate-fade-in leading-relaxed" style={{ animationDelay: "400ms" }}>
            Самой лучшей маме на свете! 👑✨
          </p>
          
          <div className="flex justify-center gap-6 mt-12 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <Heart className="w-12 h-12 text-primary fill-primary animate-glow drop-shadow-lg" />
            <Gift className="w-12 h-12 text-secondary fill-secondary animate-glow drop-shadow-lg" style={{ animationDelay: "0.5s" }} />
            <Cake className="w-12 h-12 text-accent fill-accent animate-glow drop-shadow-lg" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <Sparkles className="w-12 h-12 mx-auto mb-6 text-primary animate-float" />
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-lg">
            Наши драгоценные моменты
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {photos.map((photo, index) => (
            <PhotoCard
              key={index}
              src={photo.src}
              alt={photo.alt}
              delay={index * 150}
            />
          ))}
        </div>
      </section>

      {/* Messages Section */}
      <section className="py-24 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto space-y-12 relative z-10">
        {messages.map((msg, index) => (
          <MessageSection
            key={index}
            title={msg.title}
            message={msg.message}
            delay={index * 250}
          />
        ))}
      </section>

      {/* Final Wishes */}
      <section className="py-32 px-4 md:px-8 lg:px-16 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
          <div className="flex justify-center gap-4 mb-8">
            <Heart className="w-20 h-20 text-primary fill-primary animate-glow drop-shadow-2xl" />
            <Sparkles className="w-20 h-20 text-accent animate-float drop-shadow-2xl" />
            <Heart className="w-20 h-20 text-secondary fill-secondary animate-glow drop-shadow-2xl" style={{ animationDelay: "0.5s" }} />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight drop-shadow-xl">
            Ты — само совершенство!
          </h2>
          
          <p className="text-2xl md:text-3xl text-foreground/90 leading-relaxed font-medium max-w-3xl mx-auto">
            Пусть твоя жизнь будет наполнена любовью, радостью и волшебством! 
            Ты — лучшая мама, и ты заслуживаешь всего самого прекрасного в этом мире! 
          </p>
          
          <div className="pt-12 space-y-6">
            <Crown className="w-16 h-16 mx-auto text-accent fill-accent animate-bounce-subtle drop-shadow-2xl" />
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Люблю тебя бесконечно! 💝✨🌹
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-foreground/70 relative z-10">
        <div className="space-y-4 animate-fade-in">
          <p className="text-xl font-medium">
            С любовью и нежностью! 💕
          </p>
          <div className="flex justify-center gap-3">
            <Heart className="w-6 h-6 text-primary fill-primary" />
            <Heart className="w-6 h-6 text-secondary fill-secondary" />
            <Heart className="w-6 h-6 text-accent fill-accent" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
