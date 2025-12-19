import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1f1108]/95 backdrop-blur-sm border-b border-orange-600/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-12">
              <img 
                src="https://cdn.poehali.dev/files/669d6128745bdd71a1d84303_Screenshot-1-OCnBIzL.png"
                alt="Chocolate Logo"
                className="h-16 w-auto"
              />
              
              <nav className="hidden lg:flex items-center gap-8">
                <button 
                  onClick={() => scrollToSection('specialists')}
                  className="text-muted-foreground hover:text-orange-600 transition-colors"
                >
                  Мастера
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-orange-600 transition-colors"
                >
                  Услуги
                </button>
                <button 
                  onClick={() => scrollToSection('vacancy')}
                  className="text-muted-foreground hover:text-orange-600 transition-colors"
                >
                  Вакансии
                </button>
                <button 
                  onClick={() => scrollToSection('promo')}
                  className="text-muted-foreground hover:text-orange-600 transition-colors"
                >
                  Акции
                </button>
              </nav>
            </div>

            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-3">
                <a 
                  href="https://vk.com/yoursalon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-orange-600 transition-colors"
                >
                  <Icon name="MessageSquare" size={20} />
                </a>
                <a 
                  href="https://t.me/yoursalon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-orange-600 transition-colors"
                >
                  <Icon name="Send" size={20} />
                </a>
              </div>
              
              <div className="flex flex-col text-sm">
                <a href="tel:+79200117839" className="text-foreground hover:text-orange-600 transition-colors font-medium">
                  +7-920-011-78-39
                </a>
                <span className="text-muted-foreground text-xs">г. Нижний Новгород</span>
              </div>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-foreground"
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={28} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#140700] border-t border-orange-600/20">
            <nav className="flex flex-col p-6 gap-4">
              <button 
                onClick={() => { scrollToSection('specialists'); setMobileMenuOpen(false); }}
                className="text-left text-muted-foreground hover:text-orange-600 transition-colors py-2"
              >
                Мастера
              </button>
              <button 
                onClick={() => { scrollToSection('services'); setMobileMenuOpen(false); }}
                className="text-left text-muted-foreground hover:text-orange-600 transition-colors py-2"
              >
                Услуги
              </button>
              <button 
                onClick={() => { scrollToSection('vacancy'); setMobileMenuOpen(false); }}
                className="text-left text-muted-foreground hover:text-orange-600 transition-colors py-2"
              >
                Вакансии
              </button>
              <button 
                onClick={() => { scrollToSection('promo'); setMobileMenuOpen(false); }}
                className="text-left text-muted-foreground hover:text-orange-600 transition-colors py-2"
              >
                Акции
              </button>
              
              <div className="flex items-center gap-4 pt-4 border-t border-orange-600/20">
                <a 
                  href="https://vk.com/yoursalon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-orange-600 transition-colors"
                >
                  <Icon name="MessageSquare" size={24} />
                </a>
                <a 
                  href="https://t.me/yoursalon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-orange-600 transition-colors"
                >
                  <Icon name="Send" size={24} />
                </a>
              </div>
              
              <a href="tel:+79200117839" className="text-foreground hover:text-orange-600 transition-colors font-medium pt-2">
                +7-920-011-78-39
              </a>
              <span className="text-muted-foreground text-sm">г. Нижний Новгород</span>
            </nav>
          </div>
        )}
      </header>

      <section id="hero" className="relative min-h-screen flex items-center justify-center px-8 md:px-16 overflow-hidden">
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
        
        <div className="relative z-10 max-w-3xl text-center space-y-8 animate-fade-in">
          <div className="inline-block text-white px-6 py-3 rounded-full text-sm md:text-base font-medium uppercase tracking-wider bg-[#cc9f67]">
            Эротический массаж в Нижнем Новгороде
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
            Мужской клуб<br/>
            GENTLEMAN CLUB<br/>
            CHOCOLATE
          </h1>
          
          <div className="flex flex-col gap-6 pt-4 items-center">
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-10 py-7 text-lg rounded-lg shadow-lg"
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

      <section id="services" className="py-24 px-6 bg-[#0b0501]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 space-y-2">
            <h2 className="text-5xl md:text-6xl font-light text-foreground uppercase tracking-wide">
              White Chocolate
            </h2>
            <p className="text-lg text-muted-foreground">
              для джентльменов, ограниченных во времени
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            <Card className="bg-[#1f1108] border-orange-600/20 overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/ef852a89-ba00-4a18-aa3f-8b9b570a09e5/files/459ff211-f78c-46a5-ada3-46cbd086f706.jpg"
                  alt="Express"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-normal text-foreground mb-3">Express</h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  Экспресс программа подойдёт тебе, если ты хочешь впервые познакомиться с нашим SPA-клубом или очень спешишь...
                </p>
                <div className="pt-4 space-y-3 mt-auto">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-semibold text-orange-600">4000 руб</span>
                    <span className="text-muted-foreground">/ 30 мин.</span>
                  </div>
                  <Button 
                    variant="outline"
                    className="w-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                  >
                    Подробнее
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="bg-[#1f1108] border-orange-600/20 overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/ef852a89-ba00-4a18-aa3f-8b9b570a09e5/files/d59e29a4-fb49-4d60-ab4b-2a0c3b283bf0.jpg"
                  alt="Эгоист"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-normal text-foreground mb-3">Эгоист</h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  Легкая завеса загадочности и бесконечное очарование необычной красоты. Эта программа для тех, кто не любит торопиться.
                </p>
                <div className="pt-4 space-y-3 mt-auto">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-semibold text-orange-600">5000 руб</span>
                    <span className="text-muted-foreground">/ 45 мин.</span>
                  </div>
                  <Button 
                    variant="outline"
                    className="w-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                  >
                    Подробнее
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="bg-[#1f1108] border-orange-600/20 overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/ef852a89-ba00-4a18-aa3f-8b9b570a09e5/files/1346fe87-4a20-4c41-bbd7-94c021c45530.jpg"
                  alt="Вожделение"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-normal text-foreground mb-3">Вожделение</h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  Экспресс программа подойдёт тебе, если ты хочешь впервые познакомиться с нашим SPA-клубом или очень спешишь...
                </p>
                <div className="pt-4 space-y-3 mt-auto">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-semibold text-orange-600">7000 руб</span>
                    <span className="text-muted-foreground">/ 60 мин.</span>
                  </div>
                  <Button 
                    variant="outline"
                    className="w-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                  >
                    Подробнее
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="bg-[#1f1108] border-orange-600/20 overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col md:col-start-1 lg:col-start-auto">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/ef852a89-ba00-4a18-aa3f-8b9b570a09e5/files/ab73daf2-978a-48f5-b0aa-0dce988d39d3.jpg"
                  alt="Поцелуй Гейши"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-normal text-foreground mb-3">Поцелуй Гейши</h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  Руки гейши растворят твои эмоции в потоке холодного и горячего наслаждения. Окунут в море удовольствия и незабываемого времяпрепровождения.
                </p>
                <div className="pt-4 space-y-3 mt-auto">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-semibold text-orange-600">8000 руб</span>
                    <span className="text-muted-foreground">/ 60 мин.</span>
                  </div>
                  <Button 
                    variant="outline"
                    className="w-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                  >
                    Подробнее
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="bg-[#1f1108] border-orange-600/20 overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col md:col-start-2 lg:col-start-auto">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/ef852a89-ba00-4a18-aa3f-8b9b570a09e5/files/9d8e1275-57a4-4e73-a0b5-df6344ce7d0d.jpg"
                  alt="Вожделение 2.0"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-normal text-foreground mb-3">Вожделение 2.0</h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  Перед таким не устоять. Яркая чувственная часть и долгое приятное послевкусие.
                </p>
                <div className="pt-4 space-y-3 mt-auto">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-semibold text-orange-600">9000 руб</span>
                    <span className="text-muted-foreground">/ 60 мин.</span>
                  </div>
                  <Button 
                    variant="outline"
                    className="w-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                  >
                    Подробнее
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#3d2817]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6 space-y-2">
            <h2 className="text-5xl md:text-6xl font-light text-foreground uppercase tracking-wide">
              Bitter Chocolate
            </h2>
            <p className="text-lg text-muted-foreground">
              для раскрепощённых джентльменов
            </p>
          </div>

          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 text-lg">
            Эта программа придется по вкусу настоящим ценителям властных и страстных женщин.
          </p>

          <Card className="bg-[#1f1108] border-red-600/30 overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-square md:aspect-auto overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/669d888f342ed9747720c25d_IMG_7941 1.png"
                  alt="Lady Bathory"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-4xl md:text-5xl font-light text-foreground mb-6">Lady Bathory</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                  Погрузись в мир власти и страсти. Насладись незабываемым опытом с королевой доминирования.
                </p>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl md:text-5xl font-semibold text-orange-500">10 000 руб</span>
                    <span className="text-muted-foreground text-lg">/ 60 мин.</span>
                  </div>
                  <Button 
                    size="lg"
                    className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-6"
                  >
                    Подробнее
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-[#140700]">
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

      <section id="contacts" className="py-24 px-6 bg-[#3d2817]">
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
              className="flex flex-col items-center gap-4 p-8 bg-[#140700] border border-border rounded-lg hover:bg-[#1a0900] hover:scale-105 transition-all duration-300 group"
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
              className="flex flex-col items-center gap-4 p-8 bg-[#140700] border border-border rounded-lg hover:bg-[#1a0900] hover:scale-105 transition-all duration-300 group"
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
              className="flex flex-col items-center gap-4 p-8 bg-[#140700] border border-border rounded-lg hover:bg-[#1a0900] hover:scale-105 transition-all duration-300 group"
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