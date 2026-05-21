import { useState, FormEvent } from "react";
import { Star, MessageSquare, ThumbsUp, Calendar, Check, Send, Pencil } from "lucide-react";
import { REVIEWS_DATA, BUSINESS_INFO } from "../data";
import { Review } from "../types";

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS_DATA);
  const [filter, setFilter] = useState<string>("all"); // all, highest
  
  // Custom review writing states
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newAuthor, setNewAuthor] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const handleCreateReview = (e: FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newComment) return;

    const crafted: Review = {
      id: `custom_${Date.now()}`,
      author: newAuthor,
      role: newRole || "Cliente DUOS",
      rating: newRating,
      comment: newComment,
      timeAgo: "Agora mesmo",
      avatarInitial: newAuthor.substring(0, 2).toUpperCase()
    };

    setReviewsList([crafted, ...reviewsList]);
    setSuccessMessage(true);
    
    // reset
    setNewAuthor("");
    setNewRole("");
    setNewRating(5);
    setNewComment("");
    
    setTimeout(() => {
      setSuccessMessage(false);
      setIsFormOpen(false);
    }, 2800);
  };

  const filteredReviews = filter === "all" 
    ? reviewsList 
    : reviewsList.filter(r => r.rating === 5);

  return (
    <section id="avaliacoes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-100 uppercase font-semibold">
            PROVA SOCIAL
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Históricos de Quem Confia e Cresce Conosco
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Nossa melhor publicidade é a satisfação e o sucesso fiscal de nossos parceiros em Santos e região. Confira depoimentos de quem vivencia nossa assessoria exclusiva.
          </p>
        </div>

        {/* Google review dashboard grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-14">
          
          {/* Dashboard aggregated rating panel (Left) */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-100 rounded-3xl p-6 text-center space-y-6 lg:sticky lg:top-24">
            <div>
              <h3 className="text-slate-400 font-mono text-[10px] uppercase font-bold tracking-widest leading-none mb-1">
                AVALIAÇÃO CONSOLIDADA
              </h3>
              <div className="font-display font-black text-6xl text-slate-950 tracking-tighter">
                {BUSINESS_INFO.googleRating.toFixed(1)}
              </div>
            </div>

            <div className="flex flex-col items-center space-y-1">
              <div className="flex text-amber-500 space-x-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 text-xs font-medium">
                Média baseada em avaliações ativas no Google Maps
              </p>
            </div>

            {/* Simulated bar ratings breakdown */}
            <div className="space-y-2 pt-4 border-t border-slate-200 text-left">
              {[
                { stars: 5, pct: 100 },
                { stars: 4, pct: 0 },
                { stars: 3, pct: 0 },
                { stars: 2, pct: 0 },
                { stars: 1, pct: 0 }
              ].map((row) => (
                <div key={row.stars} className="flex items-center text-xs text-slate-500">
                  <span className="w-3 font-semibold mr-1.5 font-mono">{row.stars}</span>
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400 mr-2" />
                  <div className="flex-1 bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-amber-400 h-full rounded-full" style={{ width: `${row.pct}%` }} />
                  </div>
                  <span className="w-8 text-right font-mono ml-3 text-[10px]">{row.stars === 5 ? "100%" : "0%"}</span>
                </div>
              ))}
            </div>

            {/* Interaction buttons */}
            <div className="pt-4 border-t border-slate-200 space-y-2">
              <button
                id="btn-open-review-form"
                onClick={() => setIsFormOpen(!isFormOpen)}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-4 rounded-xl text-xs flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <Pencil className="w-3.5 h-3.5" />
                <span>Deixar Minha Avaliação</span>
              </button>
            </div>
          </div>

          {/* List of reviews cards (Right) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Filter bar toggles */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center space-x-2">
                <button
                  id="filter-all-btn"
                  onClick={() => setFilter("all")}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    filter === "all" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  Todas ({reviewsList.length})
                </button>
                <button
                  id="filter-highest-btn"
                  onClick={() => setFilter("highest")}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    filter === "highest" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  Apenas 5 Estrelas
                </button>
              </div>

              <span className="text-slate-400 text-xs font-mono">
                Ordenado por: Relevância
              </span>
            </div>

            {/* Animated Form drop to write a review */}
            {isFormOpen && (
              <form 
                id="add-review-form" 
                onSubmit={handleCreateReview} 
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-4 animate-fadeIn transition-all duration-300"
              >
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <h4 className="font-display font-bold text-sm text-slate-900">Deixe seu depoimento</h4>
                  <span className="text-[10px] text-slate-500 font-mono">Avaliação interna simulada</span>
                </div>

                {successMessage ? (
                  <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-emerald-800 font-medium text-xs text-center flex items-center justify-center space-x-2">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Obrigado! Sua avaliação foi adicionada ao topo da lista local.</span>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Nome Completo</label>
                        <input
                          id="review-input-name"
                          type="text"
                          required
                          value={newAuthor}
                          onChange={(e) => setNewAuthor(e.target.value)}
                          placeholder="Ex: Luciana Fré"
                          className="w-full bg-white border border-slate-350 px-3 py-2 rounded-lg text-xs focus:ring-1 focus:ring-teal-500 focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Sua Atividade / Empresa</label>
                        <input
                          id="review-input-role"
                          type="text"
                          value={newRole}
                          onChange={(e) => setNewRole(e.target.value)}
                          placeholder="Ex: Clínica Odontológica Santos"
                          className="w-full bg-white border border-slate-350 px-3 py-2 rounded-lg text-xs focus:ring-1 focus:ring-teal-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Star Rating selector */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wide block">Nota atribuída (Estrelas):</label>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            id={`btn-star-select-${star}`}
                            key={star}
                            type="button"
                            onClick={() => setNewRating(star)}
                            className="p-1 cursor-pointer"
                          >
                            <Star className={`w-5 h-5 ${star <= newRating ? "text-amber-500 fill-amber-500" : "text-slate-300"}`} />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Sua Mensagem</label>
                      <textarea
                        id="review-input-comment"
                        required
                        rows={3}
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Escreva como foi sua experiência com a equipe DUOS..."
                        className="w-full bg-white border border-slate-350 px-3 py-2 rounded-lg text-xs focus:ring-1 focus:ring-teal-500 focus:outline-none"
                      />
                    </div>

                    <div className="flex justify-end pt-2">
                      <button
                        id="review-btn-submit"
                        type="submit"
                        className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-5 rounded-lg text-xs flex items-center space-x-1.5 cursor-pointer shadow-sm"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Publicar</span>
                      </button>
                    </div>
                  </>
                )}
              </form>
            )}

            {/* Dynamic visual cards list */}
            {filteredReviews.length === 0 ? (
              <p className="text-center py-6 text-slate-500 text-sm">Nenhuma avaliação corresponde ao filtro selecionado.</p>
            ) : (
              <div className="space-y-4">
                {filteredReviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-slate-50/50 border border-slate-100 rounded-2xl p-5 space-y-3 hover:border-slate-200 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      {/* Left: Avatar initial + Name */}
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-display font-bold flex items-center justify-center text-sm shrink-0 uppercase shadow-xs">
                          {review.avatarInitial}
                        </div>
                        <div>
                          <p className="font-display font-bold text-sm text-slate-900 flex items-center">
                            {review.author}
                            {review.hasPhoto && (
                              <span className="ml-1.5 bg-emerald-500/10 text-emerald-600 text-[8px] font-mono px-1.5 py-0.5 rounded-sm uppercase tracking-wider font-semibold">
                                Proprietário Real
                              </span>
                            )}
                          </p>
                          <p className="text-[10.5px] text-slate-500 font-light leading-none">{review.role}</p>
                        </div>
                      </div>

                      {/* Right: star rating indicator */}
                      <div className="flex flex-col items-end space-y-1">
                        <div className="flex text-amber-500">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
                                i < review.rating ? "fill-current" : "opacity-30"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {review.timeAgo}
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-light pl-1 pt-1 italic font-sans">
                      "{review.comment}"
                    </p>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100/60 pt-2 pb-0.5">
                      <span className="flex items-center text-emerald-600">
                        <Check className="w-3.5 h-3.5 mr-1 text-emerald-500" />
                        Avaliação Verificada
                      </span>
                      
                      <button
                        id={`like-btn-${review.id}`}
                        className="flex items-center space-x-1 hover:text-slate-800 transition-colors cursor-pointer text-[10.5px] font-mono"
                        onClick={(e) => {
                          const btnItem = e.currentTarget;
                          btnItem.classList.toggle("text-teal-600");
                        }}
                      >
                        <ThumbsUp className="w-3.5 h-3.5 shrink-0" />
                        <span>Gostei</span>
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
