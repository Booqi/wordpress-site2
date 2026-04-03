import { motion } from "motion/react";
import { Search, ArrowRight, Globe, Github, Twitter, Linkedin, Menu } from "lucide-react";

const BLOG_POSTS = [
  {
    id: 1,
    category: "Customer Story",
    date: "Mar 12, 2024",
    title: "Klotti Park Customer Story",
    description: "How Klotti Park optimized their visitor flow and increased seasonal ticket revenue by 40% using Booqi.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpgLCHB5bwhKV7SVqzxD7W68CdKIA3kzXNZ5W8yHV6I6I6ReOXWYu9_v4Yw7X884QBvnP0L9jLmL4V_JGlv4QIkwa4WLWNgr58uzCfA-8AhQK7_4oCUebaRpbypyQ1KqAH_EqsKUxSB1m-ho4Esgue3RL4PqaK21A_h6izkntaNCt61sEsopx_wl1ixz5XoKeJsTtrJRZU6t5VJ5mwbHxMstglgXOYRwGNZNmN-VWumfmiY9Lz5S5NALJe_0hLru7y7_olibUbYbgf"
  },
  {
    id: 2,
    category: "Product",
    date: "Mar 08, 2024",
    title: "Booqi Vouchers",
    description: "Launching our new flexible voucher system: Seamless gifting and redemption across all platform channels.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm1ss3vYfu2O5KcxgIsmlP3xRlVAw5Ek70THpOLUvttDx5sACwCGaOJsOSu4lrY6ILWo_wfVsg0h9x1kcSbddIhiQOONyk4dWOXQrAGMTeCuCjqsq5_mPWNGoOKdrzjCUPU6VTwlyCHrBPhMhv3UnGHFh3ijztEzj_fhdwb5jrT2o3ao21G3GQ8ZaXl9f4_vo91bmKKhJ03IQeCwVIqoeqPwQulB3vEmj2EeVGVoR6PpkvnEeeLeXnSCe946ncxu7tc0BSZzc7h6Pt"
  },
  {
    id: 3,
    category: "Features",
    date: "Mar 05, 2024",
    title: "Subscription Modules",
    description: "Transitioning to recurring revenue models: A deep dive into Booqi's automated subscription billing engine.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0sNt7ZCYmvB_xu2C-lUXl1hqerhMEB9lIIR7yHZmteGERcgEDNGd9eirGd5STYKHHkn8YTxdHBX7k7MkXEGvUGvoj97UDJX0udP6ejPfKar0vEW-MG9OfBSh5aZfJCI7mAjwmk3aAlF-kcQE4HdoBsLhUkvXmQgg5Uvj5v9SEM_kxUB_P1Sacy8CUdOETj_y-j1ws_yb52jnMnFStqCRGZVot3-EZUFbZ3pVVb7-wWhWnR9gndoa__e-dEik4WpT5_MWaDSow5wyk"
  },
  {
    id: 4,
    category: "Guide",
    date: "Feb 28, 2024",
    title: "Transactional vs Marketing Emails",
    description: "Understanding the critical balance between mandatory system alerts and high-conversion marketing campaigns.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxX1mESL54_oMF5gVkYpZijaqeTFH_FkcZ8CWSmx0B3eg9A-IQqd2m5Jb3TOTPkTMiazUI42SDGXo3-w8FiLXymcWjJuainierrf5CWtqSrOdg2RAcHyZifWB6Bi7TFaUQe3cF3iT5d7nqgDFCA58fN0qc5398eCuG9qERtmekly9R30U5Dp8JI13gfHpQsanI-YjpMKWRmUIfj2MuAAD7tHKGYkKKJpq9TwOC6Z6pWjXCdlcjMk5dFFKTdEZy_OrrN406rEdb59te"
  },
  {
    id: 5,
    category: "Updates",
    date: "Feb 22, 2024",
    title: "Capacity Poules",
    description: "How our new capacity pooling logic helps multi-venue operators manage attendance peaks dynamically.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzxZP092zRspaTjuNxRc2Lee3hOAA2bKIlP8pJY6aFQlc07YAjjw-tW4xBeEWCZotaUc1LUBOmGmAaArhID-e9f_gQNlOplKNGVAccXnJfsRlj82EVPBIJQd0OifOC2Qq3c2nJhb3afPqVlrlqaFtQ9-WEtzDEJZGB95oSQuLyTNfu7_b4eQdmAJpqJSPr3lOQ-ykWJZSX6OLtzmUyyA2nPdgscTQs5kwAl1lscgx7UQ253A0Z2zPcsKrSvs3WQILLFRNg_DOX7SHj"
  },
  {
    id: 6,
    category: "Engineering",
    date: "Feb 15, 2024",
    title: "Customer Groups",
    description: "Implementing hyper-targeted segmentation to deliver personalized ticketing experiences at scale.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClkWzFZZhs5F3Y5FYBgKFkKMvLOuPBTYxKfqHid3WBuhPA07qUKCK_SA7YCDua-nXIwZkztQtLkExb4KOb-o5dpMpOmPiFSzw-9ECuxDc7KFvP2UjVIo-aJdxgbkDxdxNeYVu5fsb7qp6_jJANEGlAxqGc8vbFJoTBLC9peAAT8-i6dGKczFs-mITUzmEPe6Q5TvS5i9rsljEtX1LgGaOhk6rmiJHifo6RuTsOQKu8qlau_mkdL4y3RhG-Utl4rbOoubWDYDzqlAGk"
  }
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary selection:text-on-primary-container">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="text-2xl font-black text-white tracking-tighter">Booqi</div>
            <div className="hidden md:flex items-center gap-8">
              {['Solutions', 'Pricing', 'Resources', 'Company'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`text-sm font-medium transition-colors relative py-2 ${
                    item === 'Resources' ? 'text-primary' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item}
                  {item === 'Resources' && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary shadow-[0_0_8px_#4DF2C9]"
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="text-zinc-400 hover:text-white transition-colors">
              <Search size={20} />
            </button>
            <button className="obsidian-pulse-btn">
              Get Started
            </button>
            <button className="md:hidden text-white">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative h-[600px] rounded-3xl overflow-hidden group"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6lxMfC00oRrHUqBjJZKXU2T4IgB5fK3UI4_rD3DBen9lxLSX2a6dj43ZQ7aSRyOI8S1AZIE6O_fA3gHOz2fVqyxKg75JqRM_WlM3FLR_4mcHR7vYPR3n3dSJrGQlbdYqvRwDvAhdudQxuyXsGcUihRQi5FvYKhnU170Ysq-7Z-_hOgbdhWKiCQN4CuuzwsWe_koiPw341emkysL8Z4h8ZpMngmQxibmeOrgXddlB5_nR_bswYtv--Xjyq3pIe35UTrx89I3aSCQEe"
              alt="Featured Story"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent" />
            
            <div className="absolute bottom-12 left-12 max-w-2xl glass-card p-10 rounded-3xl">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase mb-6 rounded-full border border-primary/20">
                Featured Story
              </span>
              <h1 className="font-headline font-extrabold text-5xl md:text-6xl text-white mb-6 leading-[1.1] tracking-tight">
                Revolutionizing Modern Ticket Management.
              </h1>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                Explore how Booqi's latest infrastructure updates are setting new benchmarks for transaction speed and user security in the high-tech ticketing ecosystem.
              </p>
              <button className="flex items-center gap-2 text-primary font-bold group/link">
                Read full article 
                <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </section>

        {/* Blog Grid Section */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="font-headline text-4xl font-bold text-white mb-4">Latest Insights</h2>
              <p className="text-zinc-500 text-lg">In-depth guides, customer success stories, and product updates from the Booqi team.</p>
            </div>
            <div className="flex gap-4 p-1 bg-surface-container-low rounded-full border border-white/5">
              {['All Posts', 'Engineering', 'Product'].map((filter) => (
                <button 
                  key={filter}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === 'All Posts' 
                      ? 'bg-surface-container-high text-white shadow-lg' 
                      : 'text-zinc-500 hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {BLOG_POSTS.map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col group cursor-pointer"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-white/5">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-primary text-[10px] font-bold tracking-widest uppercase">{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                  <span className="text-zinc-500 text-[10px] font-medium uppercase tracking-wider">{post.date}</span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-zinc-500 line-clamp-2 mb-6 leading-relaxed">
                  {post.description}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <button className="px-8 py-4 rounded-xl bg-surface-container-high border border-white/10 text-white font-headline font-bold hover:bg-surface-bright transition-all active:scale-95">
              Load More Articles
            </button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-24">
          <div className="max-w-7xl mx-auto bg-surface-container-low rounded-[2.5rem] p-16 md:p-24 text-center relative overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 blur-[100px] rounded-full" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-headline text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
                Ready to transform your ticketing?
              </h2>
              <p className="text-zinc-400 text-xl mb-12 leading-relaxed">
                Join 500+ venues using Booqi to deliver superior guest experiences and drive operational excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="obsidian-pulse-btn px-10 py-5 text-lg shadow-2xl shadow-primary/20 hover:scale-105">
                  Request Demo
                </button>
                <button className="px-10 py-5 rounded-full text-white font-headline font-bold border border-zinc-700 hover:bg-white/5 transition-all">
                  View Solutions
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0e0e0e] border-t border-white/5 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
            <div>
              <div className="text-2xl font-black text-white tracking-tighter mb-6">Booqi</div>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-xs">
                Elevating the high-tech ticketing experience with precision engineering and thoughtful design.
              </p>
              <div className="flex gap-4">
                {[Globe, Github, Twitter, Linkedin].map((Icon, i) => (
                  <a 
                    key={i}
                    href="#" 
                    className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-zinc-400 hover:text-primary hover:bg-surface-bright transition-all"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'API Reference', 'Integrations'] },
              { title: 'Company', links: ['About Us', 'Careers', 'Blog', 'Contact'] },
              { title: 'Support', links: ['Help Center', 'Privacy Policy', 'Terms of Service', 'Status'] }
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-white font-bold mb-6">{col.title}</h4>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-zinc-500 hover:text-primary transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-zinc-500 text-xs">
              © 2024 Booqi. Elevating the high-tech ticketing experience.
            </p>
            <div className="flex gap-8">
              <span className="text-[10px] text-zinc-600 font-bold tracking-widest uppercase">
                Obsidian Pulse UI v2.4
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
