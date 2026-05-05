import { useEffect } from "react";
import {
  Search,
  ShoppingCart,
  Headphones,
  PackageCheck,
  ShieldCheck,
  Truck,
  Star,
  MapPin,
  Phone,
  Mail,
  Menu,
  ChevronRight,
  MessageCircle,
  Wrench,
  Zap,
  Settings,
  Gauge,
  Lightbulb,
  Car,
  Disc3,
  Filter,
  BatteryCharging,
  ArrowRight,
  BadgeCheck,
  Sparkles
} from "lucide-react";

import "./App.css";

import { useState } from "react";

function CustomSelect() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Todas as categorias");

  const options = [
    "Todas as categorias",
    "Suspensão",
    "Freios",
    "Motor",
    "Iluminação"
  ];

  return (
    <div className="custom-select">
      <div
        className="select-selected"
        onClick={() => setOpen(!open)}
      >
        {selected}
      </div>

      {open && (
        <div className="select-options">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                setSelected(opt);
                setOpen(false);
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const whatsappNumber = "5511999999999";

const categories = [
  { name: "Suspensão", icon: Wrench },
  { name: "Freios", icon: Disc3 },
  { name: "Motor", icon: Settings },
  { name: "Iluminação", icon: Lightbulb },
  { name: "Acessórios", icon: Car },
  { name: "Elétrica", icon: Zap },
  { name: "Filtros", icon: Filter },
  { name: "Performance", icon: Gauge }
];

const products = [
  {
    name: "Farol Gol G5 2009 a 2012",
    price: "R$ 189,90",
    image: "/assets/farol.svg",
    compatible: "Gol, Voyage e Saveiro G5",
  },
  {
    name: "Disco de Freio Ventilado",
    price: "R$ 129,90",
    image: "/assets/disco-freio.svg",
    compatible: "Linha Volkswagen e Fiat",
  },
  {
    name: "Amortecedor Dianteiro",
    price: "R$ 219,90",
    image: "/assets/amortecedor.svg",
    compatible: "Modelos nacionais",
  },
  {
    name: "Lanterna Traseira Gol G6",
    price: "R$ 159,90",
    image: "/assets/lanterna.svg",
    compatible: "Gol G6 2013 a 2016",
  },
  {
    name: "Filtro de Ar Motor",
    price: "R$ 39,90",
    image: "/assets/filtro-ar.svg",
    compatible: "Diversos modelos",
  }
];

const brands = ["BOSCH", "NAKATA", "SKF", "TRW", "MAHLE", "VALEO"];

function waLink(text) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

function Header() {
  return (
    <header className="header">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Entrega para todo o Brasil</span>
          <span>Atendimento especializado via WhatsApp</span>
          <span>Peças selecionadas com garantia</span>
        </div>
      </div>

      <div className="container nav">
        <a className="logo" href="#home">
          <strong>AUTOPARTS</strong>
          <small>PRIME</small>
        </a>

        <nav className="desktop-menu">
          <a href="#home">Home</a>
          <a href="#categorias">Categorias</a>
          <a href="#produtos">Produtos</a>
          <a href="#marcas">Marcas</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>

        <a
          className="header-whatsapp"
          href={waLink("Olá, quero consultar uma peça automotiva.")}
          target="_blank"
        >
          <MessageCircle size={18} />
          Comprar pelo WhatsApp
        </a>

        <button className="mobile-menu" aria-label="Abrir menu">
          <Menu />
        </button>
      </div>

      <div className="container search-bar">
        <CustomSelect />

        <div className="search-input">
          <input placeholder="Digite peça, modelo ou categoria..." />
          <button aria-label="Buscar">
            <Search size={20} />
          </button>
        </div>

        <div className="quick-actions">
          <span><PackageCheck size={21} /> Pedidos</span>
          <span><Headphones size={21} /> Suporte</span>
          <span className="cart"><ShoppingCart size={24} /><b>0</b></span>
        </div>
      </div>
    </header>
  );
}

function Hero() {
 useEffect(() => {
    const hero = document.querySelector(".hero");
    const car = document.querySelector(".hero-visual img");

    if (!hero || !car) return;

    const handleMove = (e) => {
      const rect = hero.getBoundingClientRect();

      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 28;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 18;

      car.style.transform = `
        scale(1.08)
        translateX(${22 + x}px)
        translateY(${-8 + y}px)
      `;

      hero.style.setProperty("--smoke-x", `${x * -0.7}px`);
      hero.style.setProperty("--smoke-y", `${y * -0.7}px`);
      hero.style.setProperty("--shine-x", `${e.clientX - rect.left}px`);
      hero.style.setProperty("--shine-y", `${e.clientY - rect.top}px`);
    };

    const reset = () => {
      car.style.transform = "scale(1.06) translateX(22px) translateY(-8px)";
      hero.style.setProperty("--smoke-x", "0px");
      hero.style.setProperty("--smoke-y", "0px");
    };

    hero.addEventListener("mousemove", handleMove);
    hero.addEventListener("mouseleave", reset);

    return () => {
      hero.removeEventListener("mousemove", handleMove);
      hero.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-noise"></div>

      <div className="container hero-grid">
        <div className="hero-content">
          <span className="eyebrow">
            <Sparkles size={15} />
            Vitrine automotiva premium
          </span>

          <h1>
            Peças certas para carros que merecem <em>performance.</em>
          </h1>

          <p>
            Consulte autopeças com rapidez, visual moderno e atendimento direto
            pelo WhatsApp. Uma experiência feita para transmitir confiança desde
            o primeiro clique.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#produtos">
              Ver produtos <ArrowRight size={18} />
            </a>

            <a
              className="btn btn-glass"
              href={waLink("Olá, quero ajuda para encontrar uma peça.")}
              target="_blank"
            >
              Falar com especialista
            </a>
          </div>

          <div className="hero-benefits">
            <div>
              <Truck />
              <span>Envio nacional</span>
            </div>
            <div>
              <ShieldCheck />
              <span>Peças com garantia</span>
            </div>
            <div>
              <BadgeCheck />
              <span>Compra consultiva</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card floating one">
            <strong>+500</strong>
            <span>peças disponíveis</span>
          </div>

          <div className="hero-card floating two">
            <strong>24h</strong>
            <span>resposta rápida</span>
          </div>

          <img src="/assets/carro-premium.png" alt="Carro premium" />
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section id="categorias" className="categories section">
      <div className="container">
        <div className="section-header">
          <span>Categorias</span>
          <h2>Encontre a peça ideal com poucos cliques.</h2>
          <p>Organização visual clara para deixar a vitrine mais profissional e fácil de navegar.</p>
        </div>

        <div className="category-grid">
          {categories.map(({ name, icon: Icon }) => (
            <a className="category-card" href="#produtos" key={name}>
              <Icon size={34} />
              <strong>{name}</strong>
              <small>Ver peças</small>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="produtos" className="products section">
      <div className="container">
        <div className="section-header light">
          <span>Produtos</span>
          <h2>Destaques da vitrine.</h2>
          <p>Cards com aparência premium, foco em consulta rápida e venda pelo WhatsApp.</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-badge">Pronta entrega</div>

              <div className="product-img">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="stars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
                <small>(28)</small>
              </div>

              <h3>{product.name}</h3>
              <p>{product.compatible}</p>

              <div className="product-bottom">
                <strong>{product.price}</strong>

                <a
                  className="consult-btn"
                  href={waLink(`Olá, quero consultar disponibilidade da peça: ${product.name}`)}
                  target="_blank"
                >
                  <MessageCircle size={17} />
                  Consultar
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PromoBanner() {
  return (
    <section className="promo">
      <div className="container promo-card">
        <div>
          <span>linha completa</span>
          <h2>Freios, suspensão, motor, iluminação e acessórios.</h2>
          <p>
            Uma vitrine feita para lojas que querem vender mais com aparência
            profissional, rápida e confiável.
          </p>
          <a className="btn btn-primary" href="#categorias">
            Explorar categorias <ChevronRight size={18} />
          </a>
        </div>

        <img src="/assets/pecas-banner.svg" alt="Peças automotivas" />
      </div>
    </section>
  );
}

function FeaturedProduct() {
  return (
    <section className="featured-product section">
      <div className="container detail-grid">
        <div className="detail-gallery">
          <span className="breadcrumb">Home / Iluminação / Faróis</span>

          <div className="main-product-image">
            <img src="/assets/farol.svg" alt="Farol Gol G5" />
          </div>

          <div className="thumbs">
            <img src="/assets/farol.svg" alt="Farol miniatura" />
            <img src="/assets/carro-mini.svg" alt="Carro miniatura" />
            <img src="/assets/lanterna.svg" alt="Lanterna miniatura" />
          </div>
        </div>

        <div className="detail-info">
          <span className="tag">Produto em destaque</span>
          <h2>Farol Gol G5 2009 a 2012</h2>

          <div className="stars large">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={17} fill="currentColor" />
            ))}
            <small>(28 avaliações)</small>
          </div>

          <div className="price">R$ 189,90</div>
          <p className="installments">em até 6x de R$ 31,65 sem juros</p>

          <ul className="product-checks">
            <li><ShieldCheck /> Peça nova com garantia</li>
            <li><Truck /> Pronta entrega</li>
            <li><PackageCheck /> Envio para todo o Brasil</li>
          </ul>

          <a
            className="btn btn-primary full"
            href={waLink("Olá, quero saber se esse Farol Gol G5 2009 a 2012 serve no meu carro.")}
            target="_blank"
          >
            <MessageCircle size={20} />
            Comprar pelo WhatsApp
          </a>

          <div className="compatibility">
            <h4>Compatível com:</h4>
            <p>Volkswagen Gol G5 2009 a 2012</p>
            <p>Volkswagen Voyage G5 2009 a 2012</p>
            <p>Volkswagen Saveiro G5 2009 a 2012</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Brands() {
  return (
    <section id="marcas" className="brands section">
      <div className="container">
        <div className="section-header">
          <span>Marcas</span>
          <h2>Trabalhe com marcas reconhecidas.</h2>
        </div>

        <div className="brand-row">
          {brands.map((brand) => (
            <strong key={brand}>{brand}</strong>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="about section">
      <div className="container about-grid">
        <div>
          <span className="eyebrow dark">Sobre a AutoParts Prime</span>
          <h2>Uma experiência moderna para vender autopeças online.</h2>
          <p>
            A AutoParts Prime foi criada para transformar uma loja comum em uma
            vitrine digital profissional, com visual premium, navegação simples
            e atendimento rápido pelo WhatsApp.
          </p>

          <div className="about-list">
            <span><ShieldCheck /> Confiança visual para o cliente</span>
            <span><MessageCircle /> Conversão direta pelo WhatsApp</span>
            <span><Car /> Layout pensado para o setor automotivo</span>
          </div>

          <a className="btn btn-dark" href="#contato">
            Conhecer solução <ChevronRight size={18} />
          </a>
        </div>

        <div className="about-image">
          <img src="/assets/oficina-premium.svg" alt="Oficina premium" />
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: Truck, title: "Entrega rápida", text: "Envio para todo o Brasil" },
    { icon: ShieldCheck, title: "Garantia", text: "Produtos selecionados" },
    { icon: Headphones, title: "Atendimento", text: "Suporte especializado" },
    { icon: BatteryCharging, title: "Compra segura", text: "Consulta pelo WhatsApp" }
  ];

  return (
    <section className="trust">
      <div className="container trust-grid">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title}>
            <Icon />
            <strong>{title}</strong>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="newsletter section">
      <div className="container newsletter-card">
        <div>
          <Mail />
          <h3>Receba ofertas e novidades.</h3>
          <p>Cadastre seu e-mail e fique por dentro das peças em destaque.</p>
        </div>

        <form>
          <input placeholder="Seu melhor e-mail" />
          <button type="button">Cadastrar</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="container footer-grid">
        <div>
          <a className="logo footer-logo" href="#home">
            <strong>AUTOPARTS</strong>
            <small>PRIME</small>
          </a>
          <p>Qualidade, confiança e atendimento premium em peças automotivas.</p>
        </div>

        <div>
          <h4>Institucional</h4>
          <a>Sobre nós</a>
          <a>Política de Privacidade</a>
          <a>Trocas e Devoluções</a>
          <a>Termos de Uso</a>
        </div>

        <div>
          <h4>Categorias</h4>
          <a>Suspensão</a>
          <a>Freios</a>
          <a>Motor</a>
          <a>Iluminação</a>
        </div>

        <div>
          <h4>Atendimento</h4>
          <p><Phone size={16} /> (11) 94567-8901</p>
          <p><Mail size={16} /> contato@autopartsprime.com.br</p>
          <p><MapPin size={16} /> São Paulo - SP</p>
        </div>
      </div>

      <div className="container copy">
        <small>© 2026 AutoParts Prime. Todos os direitos reservados.</small>
        <small>Desenvolvido com ♥</small>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <Products />
      <PromoBanner />
      <FeaturedProduct />
      <Brands />
      <About />
      <TrustBar />
      <Newsletter />
      <Footer />

      <a
        className="whatsapp-float"
        href={waLink("Olá, vim pelo site AutoParts Prime e quero consultar uma peça.")}
        target="_blank"
        aria-label="WhatsApp"
      >
        <MessageCircle size={30} />
      </a>
    </>
  );
}