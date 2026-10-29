import React, { useEffect } from 'react';
import { X, ExternalLink, Clock, Instagram } from 'lucide-react';

export interface VideoContent {
  id: string;
  reelId: string;
  duration: string;
  category: string;
  title: string;
  image: string;
  synopsis: string;
  instagramUrl: string;
}

interface VideoModalProps {
  video: VideoContent | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (video) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#032622] border border-[#D8B779]/50 shadow-[0_25px_60px_rgba(0,0,0,0.85)] p-5 sm:p-8 text-[#F7F5EF]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#C4CECA] hover:text-[#D8B779] transition-colors rounded-full bg-[#052722]/80 hover:bg-[#0A3D36] border border-[#8D7952]/30"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Reel Embed Player Column */}
          <div className="md:col-span-6 lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] h-[500px] sm:h-[540px] rounded-2xl overflow-hidden bg-black border border-[#8D7952]/40 shadow-2xl flex flex-col justify-center items-center">
              <iframe
                src={`https://www.instagram.com/reel/${video.reelId}/embed`}
                className="w-full h-full border-0 rounded-2xl"
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title={video.title}
              />
            </div>
          </div>

          {/* Video Metadata & Synopsis Column */}
          <div className="md:col-span-6 lg:col-span-7 flex flex-col justify-between py-2 sm:py-4">
            <div>
              {/* Category & Duration Pill */}
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="font-sans-manrope text-xs font-semibold tracking-[0.2em] uppercase text-[#D8B779]">
                  {video.category}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8B779]/60" />
                <div className="px-2.5 py-0.5 rounded-full bg-[#052722] border border-[#8D7952]/40 text-[11px] font-mono text-[#F7F5EF] flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-[#D8B779]" />
                  <span>{video.duration}</span>
                </div>
              </div>

              {/* Title */}
              <h3
                id="video-modal-title"
                className="font-serif-cormorant text-2xl sm:text-3xl lg:text-4xl font-normal leading-snug text-[#F7F5EF] mb-4"
              >
                {video.title}
              </h3>

              {/* Synopsis / Summary */}
              <div className="bg-[#052722]/70 rounded-xl p-4 sm:p-5 border border-[#8D7952]/30 mb-6">
                <p className="font-sans-manrope text-sm sm:text-base text-[#C4CECA] leading-relaxed font-light">
                  {video.synopsis}
                </p>
              </div>

              <p className="font-sans-manrope text-xs text-[#8D7952] italic mb-6">
                Conteúdo oficial do Dr. Lucas Monteiro publicado no perfil institucional @lucasmonteiro1.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href={video.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#D8B779] text-[#032F2B] font-sans-manrope text-xs uppercase tracking-[0.14em] font-bold shadow-lg hover:bg-[#E9D1A0] hover:shadow-[0_0_20px_rgba(216,183,121,0.4)] transition-all active:scale-[0.99]"
              >
                <Instagram className="w-4 h-4" />
                <span>Assistir diretamente no Instagram</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#8D7952]/40 text-xs uppercase tracking-[0.12em] font-sans-manrope text-[#C4CECA] hover:text-[#F7F5EF] hover:border-[#D8B779] hover:bg-[#052722] transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
