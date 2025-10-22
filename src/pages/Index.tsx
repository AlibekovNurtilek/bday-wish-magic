import PhotoCard from "@/components/PhotoCard";
import MessageSection from "@/components/MessageSection";
import Confetti from "@/components/Confetti";
import BackgroundMusic from "@/components/BackgroundMusic";
import FloatingParticles from "@/components/FloatingParticles";
import { Heart, Sparkles, Gift, Cake, PartyPopper, Crown } from "lucide-react";

const Index = () => {
  // Placeholder photos - replace with actual photos later
  const photos = [
    { src: "1.jpg", alt: "Любимая мама" },
    { src: "2.jpg", alt: "Вместе навсегда" },
    { src: "3.jpg", alt: "Драгоценные моменты" },
  ];

  const messages = [
    {
      title: "Бейишим апакем! 💝",
      message: "Үйдүн куту, төрдүн көркү апакем, бүгүнкү туулган күнүңүз менен💖Аллахым мага сиздей энени насип кылганы үчүн миң мертебе шүгүр айтамын🥰Бул дүйнөдө эле эмес бейиште да чогуу болууну Аллахым насип кылсын🤍Сизге болгон сүйүүмдү дүйнөдөгү эң кооз сөздөр менен айтсам да,  аздык кылат. Ин Шаа Аллах сиздерге акыретте таажы кийгизген кыз болууну Аллахым насип кылсын🤲",
    },
    {
      title: "Мээримдүү энекем 🌹",
      message: "Жашоодо эң таза, эң чыныгы сүйүү – бул апанын жүрөгүндөгү сүйүү. Сиз ар дайым бизди коргоп, түшүнүп, колдоп келесиз. Сиздин биз үчүн кылган ар бир эмгегиңиз, камкордугуңуз баа жеткис. Бизди эч нерседен кем кылбай өстүрдүңүз. Өзүңүз жебей, бизге жедирдиңиз. Өзүңүз кийбей бизге кийгиздиңиз. Баары үчүн ыраазымын апаке❤️Бул күндө Аллахым сизге “эне болуу” бактысын тартуулады. Дүйнөдөгү бардык нерселердин эң мыктысын сизге каалайм💖",
    },
    {
      title: "Сүйүктүүм апам ❤️",
      message: "Папам экөөңүздөр биздин сыйыбызды, бактылуу күндөрүбүздү, ийгиликтерибизди көрүңүздөр. Төрүбүздүн көркү болуңуздар😘 Менин тоюмду, менин балдарымдын тоюн көргөн күндү Аллахым насип кылсын🤲 Келиндериңиздин, күйөө балдарыңыздын, небере, чеберелериңиздин урматын көрүңүз. Папам экөөңүздөргө дөөлөттүү карылык насип кылсын❤️ экөөңүздөр жетелешип эле жакшылыктарда жүрө бериңиздер🤲Сиз сыймыктанган кыздардан боломун Ин Шаа Аллах🥰 Сүйүүм сизге чексиз апакем🫶🏻",
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
              Туулган күнүңүз менен,
            </h1>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-fade-in drop-shadow-2xl" style={{ animationDelay: "200ms" }}>
              Апаке!
            </h2>
          </div>
          
          <p className="text-2xl md:text-4xl text-foreground/90 font-medium animate-fade-in leading-relaxed" style={{ animationDelay: "400ms" }}>
            Дүйнөнүн эң мыкты апасына! 👑✨
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <Sparkles className="w-12 h-12 mx-auto mb-6 text-primary animate-float" />
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-lg">
            Мен сизди жакшы көрөм апаке
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
            Сиз - менин кумиримсиз!
          </h2>
          
          <p className="text-2xl md:text-3xl text-foreground/90 leading-relaxed font-medium max-w-3xl mx-auto">
            Өмүрүңүз сүйүүгө, кубанычка жана сыйкырга толсун! Сиз — эң мыкты энесиз, бул дүйнөдөгү эң жакшы нерселерге татыктуусуз!
          </p>
          
          <div className="pt-12 space-y-6">
            <Crown className="w-16 h-16 mx-auto text-accent fill-accent animate-bounce-subtle drop-shadow-2xl" />
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Сизге сүйүүм чексиз 💝✨🌹
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-foreground/70 relative z-10">
        <div className="space-y-4 animate-fade-in">
          <p className="text-xl font-medium">
            Сүйүү менен кызыңыз Аселя 💕
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
