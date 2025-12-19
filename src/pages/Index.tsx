import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const specialists = [
    {
      name: "Алина",
      age: 24,
      height: 168,
      weight: 52,
      bust: 3,
      image: "https://cdn.poehali.dev/files/IMG_1181-Bearbeitet.JPG"
    },
    {
      name: "Вероника",
      age: 26,
      height: 172,
      weight: 55,
      bust: 4,
      image: "https://cdn.poehali.dev/projects/ef852a89-ba00-4a18-aa3f-8b9b570a09e5/files/b7459a76-94e4-43c2-9997-fb8b8fec9402.jpg"
    },
    {
      name: "Диана",
      age: 23,
      height: 165,
      weight: 50,
      bust: 3,
      image: "https://cdn.poehali.dev/projects/ef852a89-ba00-4a18-aa3f-8b9b570a09e5/files/b103c0e4-d5c4-40ef-945d-5f3184994992.jpg"
    },
    {
      name: "Карина",
      age: 25,
      height: 170,
      weight: 54,
      bust: 3,
      image: "https://cdn.poehali.dev/projects/ef852a89-ba00-4a18-aa3f-8b9b570a09e5/files/33c645e0-0251-4380-a2d0-8f7dc89a12f0.jpg"
    },
    {
      name: "Софья",
      age: 27,
      height: 175,
      weight: 58,
      bust: 4,
      image: "https://cdn.poehali.dev/projects/ef852a89-ba00-4a18-aa3f-8b9b570a09e5/files/519e8dba-f6c6-4252-b96c-b9ee8a023f09.jpg"
    },
    {
      name: "Милана",
      age: 22,
      height: 163,
      weight: 48,
      bust: 2,
      image: "https://cdn.poehali.dev/projects/ef852a89-ba00-4a18-aa3f-8b9b570a09e5/files/855355c7-6bd5-40cf-ba3c-b94ebf0812ca.jpg"
    }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section id="hero" className="relative min-h-screen flex items-start justify-start px-8 md:px-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/ef852a89-ba00-4a18-aa3f-8b9b570a09e5/files/05ad9283-8771-435b-acac-ab073bf03ec8.jpg)' }}
        ></div>
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(46, 30, 20, 0.95) 0%, rgba(46, 30, 20, 0.7) 40%, rgba(139, 69, 19, 0.3) 70%, rgba(218, 112, 37, 0.2) 100%)'
          }}
        ></div>
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="relative z-10 max-w-3xl text-left space-y-8 animate-fade-in pt-32 md:pt-40">
          <div className="inline-block text-white px-6 py-3 rounded-full text-sm md:text-base font-medium uppercase tracking-wider bg-[#cc9f67]">
            Эротический массаж в Нижнем Новгороде
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
            Мужской клуб<br/>
            GENTLEMAN CLUB<br/>
            CHOCOLATE
          </h1>
          
          <div className="flex flex-col gap-6 pt-4">
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-10 py-7 text-lg w-fit rounded-lg shadow-lg"
              onClick={() => scrollToSection('specialists')}
            >
              Выбрать девушку
            </Button>
            
            <div className="space-y-1">
              <p className="text-lg md:text-xl text-foreground font-medium">
                Скидка 10% на первое посещение
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                *действует от 60 минут
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-accent" size={32} />
        </div>
      </section>

      <section className="py-12 px-6 bg-orange-600/10 border-y border-orange-600/20">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            Дорогие гости! К сожалению, звонки в Telegram и WhatsApp на территории РФ блокируют. 
            Но вы всегда можете связаться с нами по номеру телефона{' '}
            <a href="tel:+79200117839" className="text-orange-600 font-semibold hover:text-orange-700 underline">
              +7-920-011-78-39
            </a>{' '}
            ❤️
          </p>
          <div className="pt-2 space-y-1">
            <p className="text-xl md:text-2xl font-semibold text-foreground">21+</p>
            <p className="text-sm text-muted-foreground italic">
              *если молодо выглядишь — захвати паспорт
            </p>
          </div>
        </div>
      </section>

      <section id="specialists" className="py-24 px-6 bg-[#0b0501]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-light text-foreground uppercase tracking-wide">
              Мастера <span className="text-orange-500 font-medium">спа-салона</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Посетив Gentleman Spa Шоколад, даже самый искушённый гость, получит 100% удовольствие и расслабление!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialists.map((specialist, index) => (
              <Card 
                key={index}
                className="bg-[#1f1108] border-border overflow-hidden hover:scale-105 transition-transform duration-300 group"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={specialist.image} 
                    alt={specialist.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-normal text-foreground">{specialist.name}</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Cake" size={16} className="text-orange-600" />
                      <span className="text-muted-foreground">{specialist.age} лет</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Ruler" size={16} className="text-orange-600" />
                      <span className="text-muted-foreground">{specialist.height} см</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Scale" size={16} className="text-orange-600" />
                      <span className="text-muted-foreground">{specialist.weight} кг</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Heart" size={16} className="text-orange-600" />
                      <span className="text-muted-foreground">{specialist.bust} размер</span>
                    </div>
                  </div>
                  <Button 
                    size="sm"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                    onClick={() => scrollToSection('contact')}
                  >
                    Записаться
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-light text-foreground">
              О <span className="text-accent">салоне</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="mt-1">
                  <Icon name="Sparkles" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-normal mb-2 text-foreground">Философия</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Мы создаём пространство, где каждое прикосновение — это искусство, 
                    а каждый сеанс — путь к гармонии и расслаблению.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="mt-1">
                  <Icon name="Shield" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-normal mb-2 text-foreground">Конфиденциальность</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ваша приватность — наш приоритет. Полная анонимность 
                    и дискретность гарантированы.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="mt-1">
                  <Icon name="Heart" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-normal mb-2 text-foreground">Атмосфера</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Элегантный интерьер, приглушённый свет и расслабляющая музыка 
                    создают идеальную обстановку для отдыха.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="mt-1">
                  <Icon name="Clock" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-normal mb-2 text-foreground">График работы</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ежедневно с 10:00 до 23:00<br />
                    Запись по предварительной договорённости
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="mt-1">
                  <Icon name="MapPin" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-normal mb-2 text-foreground">Локация</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Центр города, удобная транспортная доступность<br />
                    Точный адрес сообщается при записи
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="mt-1">
                  <Icon name="Star" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-normal mb-2 text-foreground">Преимущества</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Профессиональные мастера, роскошный интерьер, 
                    индивидуальный подход к каждому гостю
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-light text-foreground">
              Свяжитесь <span className="text-accent">с нами</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Мы всегда рады ответить на ваши вопросы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a 
              href="tel:+79991234567"
              className="flex flex-col items-center gap-4 p-8 bg-card border border-border rounded-lg hover:bg-card/80 hover:scale-105 transition-all duration-300 group"
            >
              <Icon name="Phone" className="text-accent group-hover:rotate-12 transition-transform" size={40} />
              <div>
                <p className="text-muted-foreground text-sm mb-1">Телефон</p>
                <p className="text-foreground text-lg">+7 (999) 123-45-67</p>
              </div>
            </a>

            <a 
              href="https://wa.me/79991234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-8 bg-card border border-border rounded-lg hover:bg-card/80 hover:scale-105 transition-all duration-300 group"
            >
              <Icon name="MessageCircle" className="text-accent group-hover:rotate-12 transition-transform" size={40} />
              <div>
                <p className="text-muted-foreground text-sm mb-1">WhatsApp</p>
                <p className="text-foreground text-lg">Написать</p>
              </div>
            </a>

            <a 
              href="https://t.me/yoursalon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-8 bg-card border border-border rounded-lg hover:bg-card/80 hover:scale-105 transition-all duration-300 group"
            >
              <Icon name="Send" className="text-accent group-hover:rotate-12 transition-transform" size={40} />
              <div>
                <p className="text-muted-foreground text-sm mb-1">Telegram</p>
                <p className="text-foreground text-lg">Написать</p>
              </div>
            </a>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              Услуги предоставляются совершеннолетним лицам 18+
            </p>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Салон эротического массажа. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;