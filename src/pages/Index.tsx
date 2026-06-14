import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/9a945276-e39d-4651-acda-5ac3d7f84b3a/files/b2177ab0-c104-43a3-a3c7-b4b53c6b518f.jpg";
const IMG_SUBSTATION = "https://cdn.poehali.dev/projects/9a945276-e39d-4651-acda-5ac3d7f84b3a/files/0629a185-5a4e-4c76-a8a2-e2c6ffa5558d.jpg";
const IMG_COMPRESSOR = "https://cdn.poehali.dev/projects/9a945276-e39d-4651-acda-5ac3d7f84b3a/files/6023c6d6-4dcf-49a7-a9cb-a00284998ffc.jpg";
const IMG_WORKERS = "https://cdn.poehali.dev/projects/9a945276-e39d-4651-acda-5ac3d7f84b3a/files/42dfb1e8-55b4-4728-a857-1c67a32f97d7.jpg";
const IMG_DATACENTER = "https://cdn.poehali.dev/projects/9a945276-e39d-4651-acda-5ac3d7f84b3a/files/63df0ef4-65c9-46cb-aaa0-f856d5c0615c.jpg";
const IMG_BLUEPRINT = "https://cdn.poehali.dev/projects/9a945276-e39d-4651-acda-5ac3d7f84b3a/files/8b95fdf0-e23d-4bc3-8c61-b6c6552afa58.jpg";
const IMG_BARRIER = "https://cdn.poehali.dev/projects/9a945276-e39d-4651-acda-5ac3d7f84b3a/files/79fbbe37-73f7-4549-b71f-9b812fca95b1.jpg";
const IMG_OIL = "https://cdn.poehali.dev/projects/9a945276-e39d-4651-acda-5ac3d7f84b3a/files/d1944f2f-8bde-4321-be12-51b0453890c7.jpg";

// ─── Navigation ──────────────────────────────────────────────────────────────
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#services", label: "Услуги" },
    { href: "#objects", label: "Объекты" },
    { href: "#solutions", label: "Решения" },
    { href: "#process", label: "Как работаем" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-brand-dark/95 backdrop-blur-md shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-brand-blue-light rounded flex items-center justify-center glow-blue">
              <Icon name="Shield" size={20} className="text-white" />
            </div>
            <div>
              <div className="font-oswald font-700 text-lg text-white tracking-wider leading-none">
                АирФортресс
              </div>
              <div className="text-[10px] text-brand-gray tracking-widest uppercase leading-none mt-0.5">
                Защитные конструкции
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-sm font-montserrat font-500 text-brand-gray-light hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+74991234567"
              className="hidden lg:flex items-center gap-2 text-sm font-montserrat font-600 text-white hover:text-brand-blue-light transition-colors"
            >
              <Icon name="Phone" size={15} />
              +7 (499) 123-45-67
            </a>
            <a
              href="#contacts"
              className="hidden lg:inline-flex items-center gap-2 bg-brand-blue-light hover:bg-brand-blue text-white text-sm font-montserrat font-600 px-5 py-2.5 rounded transition-all duration-200 hover:shadow-lg hover:shadow-brand-blue/30"
            >
              Получить КП
            </a>
            <button
              className="lg:hidden text-white p-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-brand-dark-2 border-t border-brand-dark-3 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 px-4 text-brand-gray-light hover:text-white hover:bg-brand-dark-3 transition-colors font-montserrat"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 pt-3 border-t border-brand-dark-3 mt-2">
              <a href="tel:+74991234567" className="flex items-center gap-2 text-brand-blue-light font-montserrat font-600">
                <Icon name="Phone" size={15} />
                +7 (499) 123-45-67
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Защитные конструкции" className="w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="grid-bg absolute inset-0 opacity-40" />
      </div>

      {/* Accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-brand-blue-light to-transparent" />

      <div className="relative container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="inline-flex items-center gap-2 bg-brand-blue/20 border border-brand-blue/40 text-brand-blue-light text-xs font-montserrat font-600 tracking-widest uppercase px-4 py-2 rounded-full mb-8 animate-fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-light animate-pulse" />
            Промышленная безопасность
          </div>

          <h1 className="font-oswald font-700 text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6 animate-fade-in-up delay-100">
            Защитно-<span className="text-brand-blue-light">оградительные</span><br />
            конструкции
          </h1>

          <p className="font-montserrat text-base lg:text-lg text-brand-gray-light leading-relaxed mb-10 max-w-xl animate-fade-in-up delay-200">
            Проектируем, производим и монтируем защитные конструкции для объектов
            энергетики, нефтегазового комплекса и промышленной инфраструктуры по всей России.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up delay-300">
            <a
              href="#contacts"
              className="inline-flex items-center justify-center gap-2 bg-brand-blue-light hover:bg-brand-blue text-white font-montserrat font-600 text-sm px-8 py-4 rounded transition-all duration-200 hover:shadow-xl hover:shadow-brand-blue/40"
            >
              <Icon name="FileText" size={18} />
              Получить коммерческое предложение
            </a>
            <a
              href="#objects"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-montserrat font-600 text-sm px-8 py-4 rounded transition-all duration-200 backdrop-blur-sm"
            >
              <Icon name="Building2" size={18} />
              Наши объекты
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg animate-fade-in-up delay-400">
            {[
              { value: "500+", label: "Объектов защищено" },
              { value: "85", label: "Регионов России" },
              { value: "10 лет", label: "На рынке" },
            ].map((stat) => (
              <div key={stat.label} className="border-l-2 border-brand-blue-light pl-4">
                <div className="font-oswald font-700 text-2xl lg:text-3xl text-white">{stat.value}</div>
                <div className="font-montserrat text-xs text-brand-gray mt-1 leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse-slow">
        <div className="text-brand-gray text-xs font-montserrat tracking-widest uppercase">Прокрутите</div>
        <Icon name="ChevronDown" size={20} className="text-brand-blue-light" />
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  const advantages = [
    { icon: "Award", title: "Собственное производство", desc: "Изготавливаем конструкции на собственном производстве — контролируем качество на каждом этапе." },
    { icon: "Users", title: "Опытная команда", desc: "Инженеры с опытом в промышленном строительстве. Работаем с объектами любой сложности." },
    { icon: "FileCheck", title: "Полный пакет документов", desc: "Предоставляем всю необходимую исполнительную и техническую документацию по завершении работ." },
    { icon: "Clock", title: "Соблюдение сроков", desc: "Работаем по чёткому графику. Срыв сроков недопустим — особенно на объектах непрерывного производства." },
    { icon: "ShieldCheck", title: "Соответствие нормативам", desc: "Проектируем и монтируем в соответствии с действующими ГОСТ, СП и требованиями промышленной безопасности." },
    { icon: "Handshake", title: "Работа с тендерами", desc: "Участвуем в закупочных процедурах по 44-ФЗ и 223-ФЗ. Готовим полный комплект тендерной документации." },
  ];

  return (
    <section className="py-20 lg:py-28 bg-brand-dark-2 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 text-brand-blue-light text-xs font-montserrat font-600 tracking-widest uppercase mb-4">
              <span className="w-8 h-px bg-brand-blue-light" />
              О компании
              <span className="w-8 h-px bg-brand-blue-light" />
            </div>
            <h2 className="font-oswald font-700 text-3xl lg:text-4xl text-white mb-6">
              Надёжная защита<br />
              <span className="text-brand-blue-light">промышленных объектов</span>
            </h2>
            <p className="font-montserrat text-sm text-brand-gray leading-relaxed mb-4">
              Компания АирФортресс специализируется на проектировании, производстве и монтаже защитно-оградительных конструкций для промышленных предприятий. Работаем с объектами энергетики, нефтегазового комплекса, связи и гражданской инфраструктуры.
            </p>
            <p className="font-montserrat text-sm text-brand-gray leading-relaxed mb-8">
              Решения разрабатываются индивидуально под каждый объект — с учётом технологических требований, условий эксплуатации и действующих нормативов промышленной безопасности. Полный цикл работ от обследования до сдачи объекта под ключ.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "10+", label: "лет на рынке" },
                { value: "500+", label: "реализованных объектов" },
                { value: "85", label: "регионов России" },
                { value: "24/7", label: "техническая поддержка" },
              ].map((s) => (
                <div key={s.label} className="bg-brand-dark border border-brand-dark-3 rounded-lg p-4">
                  <div className="font-oswald font-700 text-2xl text-brand-blue-light">{s.value}</div>
                  <div className="font-montserrat text-xs text-brand-gray mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Images grid */}
          <div className="grid grid-cols-2 gap-3">
            <img src={HERO_IMG} alt="Защитная конструкция" className="rounded-xl object-cover h-48 w-full" />
            <img src={IMG_SUBSTATION} alt="Трансформаторная подстанция" className="rounded-xl object-cover h-48 w-full" />
            <img src={IMG_WORKERS} alt="Монтаж конструкций" className="rounded-xl object-cover h-48 w-full col-span-2" />
          </div>
        </div>

        {/* Advantages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {advantages.map((adv) => (
            <div key={adv.title} className="card-hover flex gap-4 bg-brand-dark border border-brand-dark-3 rounded-xl p-5 group">
              <div className="w-10 h-10 rounded-lg bg-brand-blue/15 border border-brand-blue/25 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue/25 transition-colors">
                <Icon name={adv.icon} fallback="Circle" size={18} className="text-brand-blue-light" />
              </div>
              <div>
                <div className="font-oswald font-600 text-base text-white mb-1">{adv.title}</div>
                <p className="font-montserrat text-xs text-brand-gray leading-relaxed">{adv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Gallery ──────────────────────────────────────────────────────────────────
function Gallery() {
  const photos = [
    { img: IMG_SUBSTATION, title: "Трансформаторная подстанция", location: "Тюменская область" },
    { img: IMG_COMPRESSOR, title: "Компрессорная станция", location: "Ямало-Ненецкий АО" },
    { img: IMG_WORKERS, title: "Монтаж металлокаркаса", location: "Московская область" },
    { img: IMG_DATACENTER, title: "Центр обработки данных", location: "Санкт-Петербург" },
    { img: IMG_BARRIER, title: "Периметральное ограждение", location: "Свердловская область" },
    { img: IMG_BLUEPRINT, title: "Проектирование конструкций", location: "Краснодарский край" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-brand-dark relative">
      <div className="grid-bg absolute inset-0 opacity-20" />
      <div className="relative container mx-auto px-4 lg:px-8">
        <SectionHeader
          label="Выполненные проекты"
          title="Галерея объектов"
          subtitle="Реализованные защитные конструкции на объектах по всей России"
        />
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((p, i) => (
            <div key={i} className={`relative overflow-hidden rounded-xl group cursor-pointer ${i === 2 ? "col-span-2 lg:col-span-1" : ""}`}>
              <img
                src={p.img}
                alt={p.title}
                className="w-full object-cover h-52 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="font-oswald font-600 text-white text-base">{p.title}</div>
                <div className="flex items-center gap-1 mt-1">
                  <Icon name="MapPin" size={12} className="text-brand-blue-light" />
                  <span className="font-montserrat text-xs text-brand-gray-light">{p.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="#contacts"
            className="inline-flex items-center gap-2 bg-transparent border border-brand-blue/50 hover:border-brand-blue-light hover:bg-brand-blue/10 text-brand-blue-light font-montserrat font-600 text-sm px-8 py-3 rounded-lg transition-all"
          >
            <Icon name="FolderOpen" size={16} />
            Обсудить ваш проект
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
function Services() {
  const items = [
    {
      icon: "Ruler",
      title: "Обследование объекта",
      desc: "Выезд специалистов, оценка условий и требований, подготовка технического задания.",
    },
    {
      icon: "PenTool",
      title: "Проектирование",
      desc: "Разработка проектной документации, расчёт нагрузок, согласование с заказчиком.",
    },
    {
      icon: "Factory",
      title: "Производство",
      desc: "Изготовление конструкций на собственном производстве по ГОСТ и техническим требованиям.",
    },
    {
      icon: "Wrench",
      title: "Монтаж и сдача",
      desc: "Профессиональный монтаж бригадой, сдача объекта с полным комплектом документации.",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-brand-dark relative">
      <div className="grid-bg absolute inset-0 opacity-20" />
      <div className="relative container mx-auto px-4 lg:px-8">
        <SectionHeader
          label="Полный цикл"
          title="Наши услуги"
          subtitle="От первичного обследования до сдачи объекта под ключ"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {items.map((item, idx) => (
            <div
              key={item.title}
              className="card-hover bg-brand-dark-2 border border-brand-dark-3 rounded-lg p-6 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-blue-light/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-10 h-10 rounded bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center mb-5">
                <Icon name={item.icon} fallback="Circle" size={20} className="text-brand-blue-light" />
              </div>
              <div className="font-oswald font-500 text-xl text-white mb-3">
                <span className="text-brand-blue-light mr-2">0{idx + 1}</span>
                {item.title}
              </div>
              <p className="font-montserrat text-sm text-brand-gray leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Objects ──────────────────────────────────────────────────────────────────
function Objects() {
  const [active, setActive] = useState(0);

  const categories = [
    {
      icon: "Zap",
      title: "Объекты энергетики",
      img: IMG_SUBSTATION,
      items: [
        "Трансформаторные подстанции",
        "Автотрансформаторы и группы трансформаторов",
        "Открытые распределительные устройства (ОРУ)",
        "ТЭЦ, ГРЭС, ТЭС, ГЭС",
        "Открытые установки трансформаторов (ОУТ)",
        "Блочно-модульные подстанции (ПГУ)",
        "Энергетическая инфраструктура",
      ],
    },
    {
      icon: "Flame",
      title: "Нефтегазовый комплекс",
      img: IMG_COMPRESSOR,
      items: [
        "НПЗ, ГПЗ",
        "Нефтебазы и склады ГСМ",
        "Резервуарные парки (РВС, РГС)",
        "Наливные терминалы и эстакады",
        "Газораспределительные пункты (ГРП)",
        "Компрессорные станции (КС, КСУ)",
        "Насосные станции магистральных трубопроводов",
        "Объекты газотранспортной инфраструктуры",
      ],
    },
    {
      icon: "Warehouse",
      title: "Склады и производство",
      img: IMG_WORKERS,
      items: [
        "Логистические комплексы",
        "Складские объекты",
        "Производственные предприятия",
        "Производственные корпуса",
        "Технические помещения",
        "Заводские площадки",
      ],
    },
    {
      icon: "Server",
      title: "Объекты связи и данных",
      img: IMG_DATACENTER,
      items: [
        "Центры обработки данных (ЦОД)",
        "Узлы связи и телекоммуникационное оборудование",
        "Радиорелейные станции (РРЛ)",
        "Радиолокационные станции (РЛС)",
      ],
    },
    {
      icon: "HeartPulse",
      title: "Инфраструктура жизнеобеспечения",
      img: IMG_BARRIER,
      items: [
        "Котельные и тепловые пункты",
        "Водозаборные узлы и станции водоподготовки",
        "Больницы и медицинские центры",
        "Биологические, химические и медицинские лаборатории",
        "Газораспределительные станции (ГРС)",
      ],
    },
    {
      icon: "Building2",
      title: "Гражданская инфраструктура",
      img: IMG_OIL,
      items: [
        "Административные здания",
        "Общественные пространства",
        "Объекты транспортной инфраструктуры",
        "Муниципальные объекты",
        "Объекты городской инфраструктуры",
      ],
    },
  ];

  return (
    <section id="objects" className="py-20 lg:py-28 bg-brand-dark-2 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          label="Опыт и компетенции"
          title="Объекты защиты"
          subtitle="Работаем с предприятиями всех отраслей промышленности"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-0 border border-brand-dark-3 rounded-xl overflow-hidden">
          {/* Tabs */}
          <div className="lg:col-span-2 bg-brand-dark border-r border-brand-dark-3">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`w-full flex items-center gap-3 px-6 py-4 text-left transition-all border-b border-brand-dark-3 last:border-b-0 group ${
                  active === idx
                    ? "bg-brand-blue/15 border-l-2 border-l-brand-blue-light"
                    : "hover:bg-brand-dark-3"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded flex-shrink-0 flex items-center justify-center transition-colors ${
                    active === idx ? "bg-brand-blue/30" : "bg-brand-dark-3"
                  }`}
                >
                  <Icon
                    name={cat.icon}
                    fallback="Circle"
                    size={16}
                    className={active === idx ? "text-brand-blue-light" : "text-brand-gray"}
                  />
                </div>
                <span
                  className={`font-montserrat text-sm font-500 transition-colors ${
                    active === idx ? "text-white" : "text-brand-gray"
                  }`}
                >
                  {cat.title}
                </span>
                {active === idx && (
                  <Icon name="ChevronRight" size={16} className="text-brand-blue-light ml-auto" />
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:col-span-3 bg-brand-dark-2">
            <div className="relative h-48 lg:h-56 overflow-hidden">
              <img
                src={categories[active].img}
                alt={categories[active].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark-2" />
              <div className="absolute bottom-4 left-6">
                <h3 className="font-oswald font-600 text-2xl text-white">{categories[active].title}</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {categories[active].items.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Icon name="Check" size={14} className="text-brand-blue-light mt-1 flex-shrink-0" />
                    <span className="font-montserrat text-sm text-brand-gray-light">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="#contacts"
                className="mt-6 inline-flex items-center gap-2 bg-brand-blue-light hover:bg-brand-blue text-white font-montserrat font-600 text-sm px-6 py-3 rounded transition-all"
              >
                <Icon name="MessageSquare" size={15} />
                Обсудить проект
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Solutions ────────────────────────────────────────────────────────────────
function Solutions() {
  const solutions = [
    {
      icon: "Grid3x3",
      img: IMG_BARRIER,
      title: "Сетчатые защитные системы",
      desc: "Металлические сетчатые ограждения с высокой прочностью и долговечностью. Применяются для периметральной защиты открытых площадок, трансформаторных подстанций и технологических зон.",
      tags: ["Периметр", "Ограждение", "Сетка"],
    },
    {
      icon: "Box",
      img: IMG_SUBSTATION,
      title: "Металлокаркасные конструкции",
      desc: "Жёсткие несущие конструкции из стального проката. Используются для создания защитных корпусов вокруг трансформаторов, автотрансформаторов и высоковольтного оборудования.",
      tags: ["Каркас", "Сталь", "Корпус"],
    },
    {
      icon: "Layers",
      img: IMG_WORKERS,
      title: "Конструкции на базе строительных лесов",
      desc: "Модульные системы из сертифицированных строительных лесов для временной и постоянной защиты. Быстрый монтаж и демонтаж без остановки производства.",
      tags: ["Модульность", "Быстрый монтаж"],
    },
    {
      icon: "Tent",
      img: IMG_COMPRESSOR,
      title: "Защитные купола и арочные системы",
      desc: "Арочные защитные конструкции для полного укрытия оборудования. Обеспечивают защиту от механических воздействий, осадков и несанкционированного доступа.",
      tags: ["Купол", "Арка", "Укрытие"],
    },
    {
      icon: "SlidersHorizontal",
      img: IMG_DATACENTER,
      title: "Периметральные экраны и барьеры",
      desc: "Сплошные и перфорированные экраны для защиты периметра объекта. Создают физический барьер вокруг критически важной инфраструктуры.",
      tags: ["Экран", "Барьер", "Периметр"],
    },
    {
      icon: "Combine",
      img: IMG_OIL,
      title: "Комбинированные решения",
      desc: "Индивидуальные проекты, объединяющие несколько типов конструкций. Разрабатываются под конкретные требования объекта и технического задания заказчика.",
      tags: ["Индивидуально", "Комплекс"],
    },
  ];

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-brand-dark relative">
      <div className="grid-bg absolute inset-0 opacity-20" />
      <div className="relative container mx-auto px-4 lg:px-8">
        <SectionHeader
          label="Продуктовая линейка"
          title="Защитные решения"
          subtitle="6 типов конструкций для любых задач защиты промышленных объектов"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {solutions.map((sol) => (
            <div
              key={sol.title}
              className="card-hover bg-brand-dark-2 border border-brand-dark-3 rounded-xl group relative overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden flex-shrink-0">
                <img
                  src={sol.img}
                  alt={sol.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-dark-2" />
                <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-brand-dark/70 backdrop-blur-sm border border-brand-blue/30 flex items-center justify-center">
                  <Icon name={sol.icon} fallback="Circle" size={18} className="text-brand-blue-light" />
                </div>
              </div>
              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-oswald font-600 text-lg text-white mb-2">{sol.title}</h3>
                <p className="font-montserrat text-sm text-brand-gray leading-relaxed mb-4 flex-1">{sol.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {sol.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-montserrat bg-brand-blue/10 text-brand-blue-light border border-brand-blue/20 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Regions Map ──────────────────────────────────────────────────────────────
function RegionsMap() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const regions = [
    { id: "msk", name: "Москва и МО", x: 310, y: 195, projects: 120 },
    { id: "spb", name: "Санкт-Петербург", x: 265, y: 155, projects: 65 },
    { id: "ekb", name: "Екатеринбург", x: 500, y: 215, projects: 48 },
    { id: "nsk", name: "Новосибирск", x: 610, y: 240, projects: 37 },
    { id: "krd", name: "Краснодар", x: 320, y: 290, projects: 42 },
    { id: "kzn", name: "Казань", x: 405, y: 215, projects: 31 },
    { id: "ufa", name: "Уфа", x: 455, y: 235, projects: 29 },
    { id: "sam", name: "Самара", x: 420, y: 250, projects: 25 },
    { id: "vrn", name: "Воронеж", x: 340, y: 240, projects: 22 },
    { id: "kha", name: "Хабаровск", x: 820, y: 260, projects: 18 },
    { id: "irk", name: "Иркутск", x: 685, y: 255, projects: 21 },
    { id: "per", name: "Пермь", x: 460, y: 200, projects: 19 },
    { id: "tyum", name: "Тюмень", x: 530, y: 205, projects: 34 },
    { id: "omsk", name: "Омск", x: 575, y: 225, projects: 16 },
    { id: "nnov", name: "Нижний Новгород", x: 375, y: 205, projects: 28 },
  ];

  return (
    <section className="py-20 lg:py-28 bg-brand-dark-2 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          label="География присутствия"
          title="Работаем по всей России"
          subtitle="Выполняем проекты в 85 регионах страны"
        />

        <div className="mt-12 bg-brand-dark border border-brand-dark-3 rounded-xl overflow-hidden">
          <div className="relative w-full" style={{ paddingBottom: "45%" }}>
            <svg
              viewBox="0 100 960 430"
              className="absolute inset-0 w-full h-full"
              style={{ background: "transparent" }}
            >
              {/* Russia outline — simplified path */}
              <path
                d="M 185 148 L 195 140 L 220 138 L 240 130 L 260 128 L 275 135 L 285 130 L 300 125 L 320 120 L 350 118 L 370 122 L 390 115 L 420 118 L 445 112 L 470 108 L 500 112 L 530 108 L 560 105 L 590 108 L 620 115 L 650 118 L 680 120 L 710 125 L 740 128 L 770 132 L 800 138 L 830 145 L 855 155 L 870 165 L 875 180 L 870 195 L 860 210 L 855 225 L 858 240 L 865 255 L 870 270 L 868 285 L 860 295 L 850 305 L 845 318 L 840 330 L 835 345 L 825 358 L 810 368 L 795 372 L 780 368 L 770 358 L 760 348 L 745 345 L 730 348 L 715 355 L 700 362 L 685 368 L 670 372 L 650 375 L 630 372 L 610 368 L 590 365 L 570 362 L 550 360 L 530 362 L 510 365 L 490 368 L 470 370 L 450 368 L 430 362 L 410 355 L 395 348 L 380 355 L 365 362 L 348 368 L 332 372 L 318 375 L 305 372 L 292 365 L 280 358 L 268 352 L 255 348 L 242 345 L 230 340 L 218 335 L 205 328 L 195 318 L 185 308 L 178 295 L 175 280 L 178 265 L 182 248 L 185 232 L 182 215 L 178 198 L 182 182 L 185 168 Z"
                fill="rgba(19, 35, 56, 0.8)"
                stroke="rgba(30, 136, 229, 0.3)"
                strokeWidth="1.5"
              />

              {/* Overlay texture lines */}
              {Array.from({ length: 8 }).map((_, i) => (
                <line
                  key={i}
                  x1="175"
                  y1={130 + i * 35}
                  x2="875"
                  y2={130 + i * 35}
                  stroke="rgba(30, 136, 229, 0.04)"
                  strokeWidth="1"
                />
              ))}

              {/* Region dots */}
              {regions.map((region) => (
                <g
                  key={region.id}
                  className="region-dot"
                  onMouseEnter={() => setHoveredRegion(region.id)}
                  onMouseLeave={() => setHoveredRegion(null)}
                >
                  <circle
                    cx={region.x}
                    cy={region.y}
                    r={hoveredRegion === region.id ? 9 : 6}
                    fill={hoveredRegion === region.id ? "#1E88E5" : "rgba(30, 136, 229, 0.7)"}
                    stroke={hoveredRegion === region.id ? "#60B4FF" : "rgba(96, 180, 255, 0.5)"}
                    strokeWidth={hoveredRegion === region.id ? 2 : 1.5}
                    style={{ transition: "all 0.2s ease" }}
                  />
                  <circle
                    cx={region.x}
                    cy={region.y}
                    r={hoveredRegion === region.id ? 16 : 0}
                    fill="rgba(30, 136, 229, 0.15)"
                    style={{ transition: "all 0.2s ease" }}
                  />

                  {hoveredRegion === region.id && (
                    <g>
                      <rect
                        x={region.x - 70}
                        y={region.y - 52}
                        width={140}
                        height={38}
                        rx={4}
                        fill="#132338"
                        stroke="rgba(30, 136, 229, 0.5)"
                        strokeWidth={1}
                      />
                      <text
                        x={region.x}
                        y={region.y - 35}
                        textAnchor="middle"
                        fill="white"
                        fontSize="10"
                        fontFamily="Montserrat, sans-serif"
                        fontWeight="600"
                      >
                        {region.name}
                      </text>
                      <text
                        x={region.x}
                        y={region.y - 22}
                        textAnchor="middle"
                        fill="#1E88E5"
                        fontSize="9"
                        fontFamily="Montserrat, sans-serif"
                      >
                        {region.projects} объектов
                      </text>
                    </g>
                  )}
                </g>
              ))}
            </svg>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 border-t border-brand-dark-3">
            {[
              { value: "85", label: "регионов присутствия" },
              { value: "500+", label: "реализованных объектов" },
              { value: "24/7", label: "поддержка заказчиков" },
            ].map((s, i) => (
              <div
                key={i}
                className={`p-5 text-center ${i < 2 ? "border-r border-brand-dark-3" : ""}`}
              >
                <div className="font-oswald font-700 text-2xl text-brand-blue-light">{s.value}</div>
                <div className="font-montserrat text-xs text-brand-gray mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────
function Process() {
  const steps = [
    {
      num: "01",
      icon: "MapPin",
      title: "Обследование объекта",
      desc: "Выезжаем на объект, оцениваем условия, снимаем размеры, изучаем техническую документацию и требования безопасности.",
    },
    {
      num: "02",
      icon: "PenTool",
      title: "Проектирование системы защиты",
      desc: "Разрабатываем техническое решение, готовим рабочую документацию, проводим расчёты и согласуем проект с заказчиком.",
    },
    {
      num: "03",
      icon: "Factory",
      title: "Производство конструкций",
      desc: "Изготавливаем защитные конструкции на собственном производстве. Строгий контроль качества на каждом этапе.",
    },
    {
      num: "04",
      icon: "Hammer",
      title: "Монтаж и внедрение",
      desc: "Профессиональный монтаж силами аттестованных бригад. Сдача объекта с полным комплектом исполнительной документации.",
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-brand-dark relative">
      <div className="grid-bg absolute inset-0 opacity-20" />
      <div className="relative container mx-auto px-4 lg:px-8">
        <SectionHeader
          label="Этапы работы"
          title="Как мы работаем"
          subtitle="Чёткий и прозрачный процесс реализации проекта"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={step.num} className="relative">
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-brand-blue/40 to-transparent z-10" />
              )}

              <div className="card-hover bg-brand-dark-2 border border-brand-dark-3 rounded-lg p-6 h-full group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/20 border-2 border-brand-blue/40 flex items-center justify-center group-hover:bg-brand-blue/30 group-hover:border-brand-blue transition-all">
                    <Icon name={step.icon} fallback="Circle" size={20} className="text-brand-blue-light" />
                  </div>
                  <span className="font-oswald font-700 text-3xl text-brand-dark-3 group-hover:text-brand-blue/20 transition-colors select-none">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-oswald font-600 text-lg text-white mb-3">{step.title}</h3>
                <p className="font-montserrat text-sm text-brand-gray leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Process visual */}
        <div className="mt-12 rounded-xl overflow-hidden relative">
          <img src={IMG_BLUEPRINT} alt="Проектирование" className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 lg:px-12">
            <div className="max-w-lg">
              <h3 className="font-oswald font-600 text-2xl lg:text-3xl text-white mb-3">
                Работаем с проектными и закупочными процедурами
              </h3>
              <p className="font-montserrat text-sm text-brand-gray mb-5">
                Полное сопровождение от технического задания до тендерной документации.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Рассматриваем технические задания и проекты",
                  "Подготавливаем коммерческие предложения",
                  "Участвуем в тендерных процедурах по 44-ФЗ и 223-ФЗ",
                  "Выполняем расчёт стоимости и сроков",
                  "Предоставляем исполнительную документацию",
                  "Сопровождаем объект на всех этапах",
                ].map((adv) => (
                  <div key={adv} className="flex items-start gap-2">
                    <Icon name="CheckCircle" size={14} className="text-brand-accent mt-0.5 flex-shrink-0" />
                    <span className="font-montserrat text-xs text-brand-gray-light">{adv}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Form ─────────────────────────────────────────────────────────────
function Contacts() {
  const [form, setForm] = useState({
    name: "", company: "", phone: "", email: "", region: "", objectType: "", comment: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const objectTypes = [
    "Объект энергетики",
    "Нефтегазовый объект",
    "Склад / производство",
    "Объект связи и данных",
    "Инфраструктура жизнеобеспечения",
    "Гражданская инфраструктура",
    "Другое",
  ];

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacts" className="py-20 lg:py-28 bg-brand-dark-2 relative">
      <div className="grid-bg absolute inset-0 opacity-20" />
      <div className="relative container mx-auto px-4 lg:px-8">
        <SectionHeader
          label="Обратная связь"
          title="Свяжитесь с нами"
          subtitle="Оставьте заявку — рассмотрим и подготовим предложение в течение 24 часов"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 bg-brand-dark border border-brand-dark-3 rounded-xl p-6 lg:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-blue/20 border-2 border-brand-blue/50 flex items-center justify-center mb-5">
                  <Icon name="CheckCircle" size={32} className="text-brand-blue-light" />
                </div>
                <h3 className="font-oswald font-600 text-2xl text-white mb-3">Заявка отправлена!</h3>
                <p className="font-montserrat text-sm text-brand-gray max-w-sm">
                  Наш специалист свяжется с вами в течение 24 часов для обсуждения деталей проекта.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-brand-blue-light text-sm font-montserrat hover:underline"
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-montserrat font-600 text-brand-gray uppercase tracking-wider mb-1.5">
                      Контактное лицо <span className="text-brand-blue-light">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Иванов Иван Иванович"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-brand-dark-2 border border-brand-dark-3 focus:border-brand-blue-light rounded px-4 py-3 text-sm text-white placeholder-brand-gray font-montserrat outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-montserrat font-600 text-brand-gray uppercase tracking-wider mb-1.5">
                      Компания
                    </label>
                    <input
                      type="text"
                      placeholder="ООО «Название»"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full bg-brand-dark-2 border border-brand-dark-3 focus:border-brand-blue-light rounded px-4 py-3 text-sm text-white placeholder-brand-gray font-montserrat outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-montserrat font-600 text-brand-gray uppercase tracking-wider mb-1.5">
                      Телефон <span className="text-brand-blue-light">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (___) ___-__-__"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-brand-dark-2 border border-brand-dark-3 focus:border-brand-blue-light rounded px-4 py-3 text-sm text-white placeholder-brand-gray font-montserrat outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-montserrat font-600 text-brand-gray uppercase tracking-wider mb-1.5">
                      E-mail
                    </label>
                    <input
                      type="email"
                      placeholder="example@company.ru"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-brand-dark-2 border border-brand-dark-3 focus:border-brand-blue-light rounded px-4 py-3 text-sm text-white placeholder-brand-gray font-montserrat outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-montserrat font-600 text-brand-gray uppercase tracking-wider mb-1.5">
                      Регион объекта
                    </label>
                    <input
                      type="text"
                      placeholder="Москва, Тюменская обл."
                      value={form.region}
                      onChange={(e) => setForm({ ...form, region: e.target.value })}
                      className="w-full bg-brand-dark-2 border border-brand-dark-3 focus:border-brand-blue-light rounded px-4 py-3 text-sm text-white placeholder-brand-gray font-montserrat outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-montserrat font-600 text-brand-gray uppercase tracking-wider mb-1.5">
                      Тип объекта
                    </label>
                    <select
                      value={form.objectType}
                      onChange={(e) => setForm({ ...form, objectType: e.target.value })}
                      className="w-full bg-brand-dark-2 border border-brand-dark-3 focus:border-brand-blue-light rounded px-4 py-3 text-sm text-white font-montserrat outline-none transition-colors"
                    >
                      <option value="" className="text-brand-gray">Выберите тип</option>
                      {objectTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-montserrat font-600 text-brand-gray uppercase tracking-wider mb-1.5">
                    Комментарий
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Опишите задачу, требования, сроки..."
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                    className="w-full bg-brand-dark-2 border border-brand-dark-3 focus:border-brand-blue-light rounded px-4 py-3 text-sm text-white placeholder-brand-gray font-montserrat outline-none transition-colors resize-none"
                  />
                </div>

                {/* File upload */}
                <div>
                  <label className="block text-xs font-montserrat font-600 text-brand-gray uppercase tracking-wider mb-1.5">
                    Документация
                  </label>
                  <div
                    onClick={() => fileRef.current?.click()}
                    className="border-2 border-dashed border-brand-dark-3 hover:border-brand-blue/50 rounded-lg p-5 text-center cursor-pointer transition-colors group"
                  >
                    <Icon name="Upload" size={24} className="text-brand-gray mx-auto mb-2 group-hover:text-brand-blue-light transition-colors" />
                    <p className="font-montserrat text-sm text-brand-gray group-hover:text-brand-gray-light transition-colors">
                      {files.length > 0
                        ? files.map((f) => f.name).join(", ")
                        : "Перетащите или нажмите для загрузки"}
                    </p>
                    <p className="font-montserrat text-xs text-brand-gray/60 mt-1">
                      PDF, DOCX, XLSX, DWG, ZIP
                    </p>
                    <input
                      ref={fileRef}
                      type="file"
                      multiple
                      accept=".pdf,.docx,.xlsx,.dwg,.zip"
                      onChange={handleFile}
                      className="hidden"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-blue-light hover:bg-brand-blue text-white font-montserrat font-700 text-sm py-4 rounded transition-all duration-200 hover:shadow-xl hover:shadow-brand-blue/30 flex items-center justify-center gap-2"
                >
                  <Icon name="Send" size={16} />
                  Отправить заявку
                </button>

                <p className="font-montserrat text-xs text-brand-gray text-center">
                  Нажимая кнопку, вы соглашаетесь с{" "}
                  <span className="text-brand-blue-light cursor-pointer hover:underline">
                    политикой обработки персональных данных
                  </span>
                </p>
              </form>
            )}
          </div>

          {/* Contacts sidebar */}
          <div className="lg:col-span-2 space-y-5">
            {/* Contact cards */}
            {[
              { icon: "Phone", label: "Телефон", value: "+7 (499) 123-45-67", href: "tel:+74991234567" },
              { icon: "Mail", label: "E-mail", value: "info@airfortress.ru", href: "mailto:info@airfortress.ru" },
              { icon: "Globe", label: "Сайт", value: "airfortress.ru", href: "https://airfortress.ru" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-center gap-4 bg-brand-dark border border-brand-dark-3 hover:border-brand-blue/40 rounded-xl p-5 transition-all group card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-blue/15 border border-brand-blue/25 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue/25 transition-colors">
                  <Icon name={c.icon} fallback="Circle" size={18} className="text-brand-blue-light" />
                </div>
                <div>
                  <div className="font-montserrat text-xs text-brand-gray uppercase tracking-wider">{c.label}</div>
                  <div className="font-montserrat font-600 text-white mt-0.5">{c.value}</div>
                </div>
              </a>
            ))}

            {/* Messengers */}
            <div className="bg-brand-dark border border-brand-dark-3 rounded-xl p-5">
              <div className="font-montserrat text-xs text-brand-gray uppercase tracking-wider mb-4">
                Мессенджеры
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: "MessageCircle", label: "Telegram", color: "hover:border-[#2AABEE]/50 hover:text-[#2AABEE]" },
                  { icon: "MessageSquare", label: "WhatsApp", color: "hover:border-[#25D366]/50 hover:text-[#25D366]" },
                  { icon: "Smartphone", label: "Max", color: "hover:border-brand-blue/50 hover:text-brand-blue-light" },
                ].map((m) => (
                  <button
                    key={m.label}
                    className={`flex flex-col items-center gap-1.5 bg-brand-dark-2 border border-brand-dark-3 rounded-lg py-3.5 transition-all text-brand-gray ${m.color}`}
                  >
                    <Icon name={m.icon} fallback="Circle" size={20} />
                    <span className="font-montserrat text-xs">{m.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Advantages */}
            <div className="bg-brand-dark border border-brand-blue/20 rounded-xl p-5">
              <div className="font-oswald font-600 text-white text-base mb-4">
                Работаем с процедурами закупок
              </div>
              <div className="space-y-2.5">
                {[
                  "Рассматриваем ТЗ и проектную документацию",
                  "Готовим коммерческие предложения",
                  "Участвуем в тендерных процедурах",
                  "Предоставляем исполнительную документацию",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Icon name="Check" size={14} className="text-brand-accent mt-0.5 flex-shrink-0" />
                    <span className="font-montserrat text-xs text-brand-gray-light leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-dark-3 py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-blue-light rounded flex items-center justify-center">
              <Icon name="Shield" size={16} className="text-white" />
            </div>
            <div>
              <div className="font-oswald font-600 text-white">АирФортресс</div>
              <div className="font-montserrat text-xs text-brand-gray">Защитно-ограждательные конструкции</div>
            </div>
          </div>
          <div className="font-montserrat text-xs text-brand-gray text-center">
            © 2024 АирФортресс. Все права защищены.
          </div>
          <div className="flex items-center gap-4">
            {["Политика конфиденциальности", "Реквизиты"].map((link) => (
              <span key={link} className="font-montserrat text-xs text-brand-gray hover:text-white cursor-pointer transition-colors">
                {link}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Helper: Section Header ────────────────────────────────────────────────────
function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="inline-flex items-center gap-2 text-brand-blue-light text-xs font-montserrat font-600 tracking-widest uppercase mb-4">
        <span className="w-8 h-px bg-brand-blue-light" />
        {label}
        <span className="w-8 h-px bg-brand-blue-light" />
      </div>
      <h2 className="font-oswald font-700 text-3xl lg:text-4xl text-white mb-4">{title}</h2>
      <p className="font-montserrat text-sm text-brand-gray leading-relaxed">{subtitle}</p>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function Index() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      <Hero />
      <About />
      <Services />
      <Objects />
      <Solutions />
      <Gallery />
      <RegionsMap />
      <Process />
      <Contacts />
      <Footer />
    </div>
  );
}