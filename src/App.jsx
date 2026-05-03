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
  BatteryCharging
} from "lucide-react";
import "./App.css";

const whatsappNumber = "5511999999999";

const categories = [
  { name: "Suspensão", icon: Wrench },
  { name: "Freios", icon: Disc3 },
  { name: "Motor", icon: Settings },
  { name: "Iluminação", icon: Lightbulb },
  { name: "Acessórios", icon: Car },
  { name: "Elétrica", icon: Zap },
  { name: "Filtros", icon: Filter },
  { name: "Lataria", icon: Gauge }
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
    image: "assets/disco-freio.svg",
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
      <div className="container nav">
        <a className="logo" href="#">
          <span className="car-line"></span>
          <strong>AUTOPARTS</strong>
          <small>PRIME</small>
        </a>

        <nav className="desktop-menu">
          <a href="#home">Home</a>
          <a href="#produtos">Produtos</a>
          <a href="#categorias">Categorias</a>
          <a href="#marcas">Marcas</a>
          <a href="#sobre">Sobre nós</a>
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

        <button className="mobile-menu">
          <Menu />
        </button>
      </div>

      <div className="container search-bar">
        <select>
          <option>Todas as categorias</option>
          <option>Suspensão</option>
          <option>Freios</option>
          <option>Motor</option>
          <option>Iluminação</option>
        </select>

        <div className="search-input">
          <input placeholder="O que você precisa?" />
          <button>
            <Search size={20} />
          </button>
        </div>

        <div className="quick-actions">
          <span><PackageCheck size={22} /> Meus pedidos</span>
          <span><Headphones size={22} /> Atendimento</span>
          <span className="cart"><ShoppingCart size={25} /><b>0</b></span>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="eyebrow">Peças premium para seu carro</span>
          <h1>
            Peças de qualidade para quem entende do <em>assunto.</em>
          </h1>
          <p>
            A melhor vitrine online de autopeças para seu cliente consultar,
            comparar e comprar direto pelo WhatsApp com atendimento especializado.
          </p>

          <div className="hero-benefits">
            <div><Truck /> Envio para todo o Brasil</div>
            <div><ShieldCheck /> Peças novas com garantia</div>
            <div><Headphones /> Atendimento especializado</div>
          </div>

          <a className="btn btn-primary" href="#produtos">
            Ver produtos <ChevronRight size={18} />
          </a>
        </div>

        <div className="hero-image">
          <img src="/assets/carro-premium.png" alt="Carro premium" />
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section id="categorias" className="categories">
      <div className="container">
        <div className="section-title">
          <span>Categorias</span>
          <h2>Encontre por tipo de peça</h2>
          <p>Organize sua vitrine de forma clara e profissional.</p>
        </div>

        <div className="category-grid">
          {categories.map(({ name, icon: Icon }) => (
            <div className="category-card" key={name}>
              <Icon size={38} />
              <strong>{name}</strong>
            </div>
          ))}
        </div>

        <div className="center">
          <button className="btn btn-dark">Ver todas as categorias <ChevronRight size={18} /></button>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="produtos" className="products">
      <div className="container">
        <div className="section-title">
          <span>Mais vendidos</span>
          <h2>Produtos em destaque</h2>
          <p>Cards pensados para vitrine com venda pelo WhatsApp.</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-img">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="stars">
                {[1,2,3,4,5].map((i) => <Star key={i} size={15} fill="currentColor" />)}
                <small>(28 avaliações)</small>
              </div>
              <h3>{product.name}</h3>
              <p>{product.compatible}</p>
              <strong>{product.price}</strong>
              <a
                className="consult-btn"
                href={waLink(`Olá, quero consultar disponibilidade da peça: ${product.name}`)}
                target="_blank"
              >
                <MessageCircle size={17} />
                Consultar
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProduct() {
  return (
    <section className="featured-product">
      <div className="container detail-grid">
        <div className="detail-gallery">
          <span className="breadcrumb">Home &gt; Iluminação &gt; Faróis</span>
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
            {[1,2,3,4,5].map((i) => <Star key={i} size={17} fill="currentColor" />)}
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

function PromoBanner() {
  return (
    <section className="promo">
      <div className="container promo-card">
        <div>
          <span>Linha completa</span>
          <h2>Freios, Suspensão, Motor e muito mais!</h2>
          <p>As melhores marcas e peças para garantir segurança e desempenho para seu veículo.</p>
          <a className="btn btn-primary" href="#categorias">Ver categorias</a>
        </div>
        <img src="/assets/pecas-banner.svg" alt="Peças automotivas" />
      </div>
    </section>
  );
}

function Brands() {
  return (
    <section id="marcas" className="brands">
      <div className="container">
        <div className="section-title">
          <span>Marcas parceiras</span>
          <h2>As melhores marcas</h2>
        </div>
        <div className="brand-row">
          {brands.map((brand) => <strong key={brand}>{brand}</strong>)}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="about">
      <div className="container about-grid">
        <div>
          <span className="eyebrow dark">Sobre nós</span>
          <h2>Especialistas em peças para todas as marcas.</h2>
          <p>
            A AutoParts Prime nasceu para oferecer uma experiência moderna,
            rápida e confiável para lojas de autopeças que querem vender mais
            pela internet sem complicar o processo.
          </p>
          <a className="btn btn-dark" href="#contato">Saiba mais</a>
        </div>
        <img src="/assets/oficina-premium.svg" alt="Oficina premium" />
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: Truck, title: "Entrega rápida", text: "Enviamos para todo o Brasil" },
    { icon: ShieldCheck, title: "Peças com garantia", text: "Produtos selecionados" },
    { icon: Headphones, title: "Atendimento", text: "Suporte especializado" },
    { icon: BatteryCharging, title: "Compra segura", text: "Venda consultiva por WhatsApp" }
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
    <section className="newsletter">
      <div className="container newsletter-card">
        <div>
          <Mail />
          <h3>Receba ofertas exclusivas!</h3>
          <p>Cadastre seu e-mail e fique por dentro das novidades.</p>
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
          <a className="logo footer-logo" href="#">
            <span className="car-line"></span>
            <strong>AUTOPARTS</strong>
            <small>PRIME</small>
          </a>
          <p>Qualidade, confiança e o melhor atendimento em peças automotivas.</p>
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
