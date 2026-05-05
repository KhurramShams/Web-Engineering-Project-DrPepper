import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, RefreshCcw } from 'lucide-react';

const QUESTIONS = [
  {
    id: 1,
    text: "Your ideal Friday night involves...",
    options: [
      { text: "A classic movie marathon", persona: "Classic" },
      { text: "Trying a viral trend", persona: "Bold" },
      { text: "A quiet niche bookstore", persona: "Mysterious" },
      { text: "hosting a smooth dinner party", persona: "Smooth" },
    ]
  },
  {
    id: 2,
    text: "Choose a flavor profile:",
    options: [
      { text: "Timeless & Original", persona: "Classic" },
      { text: "Intense & Punchy", persona: "Bold" },
      { text: "Complex & Hidden", persona: "Mysterious" },
      { text: "Rich & Creamy", persona: "Smooth" },
    ]
  },
  {
    id: 3,
    text: "When facing a challenge, you are...",
    options: [
      { text: "Reliable and steady", persona: "Classic" },
      { text: "Fearless and direct", persona: "Bold" },
      { text: "Strategically quiet", persona: "Mysterious" },
      { text: "Graceful and balanced", persona: "Smooth" },
    ]
  }
];

const PERSONAS = {
  Classic: {
    title: "The Bold Original",
    desc: "You're the lifeblood of the group. Timeless, reliable, and always one of a kind. You appreciate the heritage while staying fresh.",
    match: "Dr Pepper Classic"
  },
  Bold: {
    title: "The Intense Rebel",
    desc: "You don't follow trends, you set them. You like your experiences high-energy and your flavors punchy.",
    match: "Dr Pepper Zero Sugar"
  },
  Mysterious: {
    title: "The Deep Thinker",
    desc: "There are layers to you that most never see. You appreciate the complexity of the 23 flavors and the intrigue of the unknown.",
    match: "Dr Pepper Cherry"
  },
  Smooth: {
    title: "The Visionary",
    desc: "You bring a sense of harmony to everything. Balanced, sophisticated, and always effortlessly cool.",
    match: "Dr Pepper & Cream Soda"
  }
};

export function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<keyof typeof PERSONAS | null>(null);

  const handleAnswer = (persona: string) => {
    const newAnswers = [...answers, persona];
    setAnswers(newAnswers);
    
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      // Calculate result
      const counts = newAnswers.reduce((acc: any, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      }, {});
      const top = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
      setResult(top as keyof typeof PERSONAS);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white/5 rounded-[3rem] p-8 md:p-12 border border-white/10 backdrop-blur-xl relative overflow-hidden">
      <AnimatePresence mode="wait">
        {!result ? (
          <motion.div 
            key="quiz"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="mb-8 flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-drpepper-red">
                Question {step + 1} of {QUESTIONS.length}
              </span>
              <div className="flex gap-1">
                {QUESTIONS.map((_, idx) => (
                  <div key={idx} className={`h-1 w-8 rounded-full transition-colors ${idx <= step ? 'bg-drpepper-red' : 'bg-white/10'}`} />
                ))}
              </div>
            </div>

            <h3 className="text-3xl font-black font-display uppercase tracking-tight mb-8">
              {QUESTIONS[step].text}
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {QUESTIONS[step].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(opt.persona)}
                  className="w-full text-left p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-drpepper-red hover:bg-drpepper-red/10 transition-all font-bold uppercase tracking-widest text-sm group flex justify-between items-center"
                >
                  {opt.text}
                  <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-drpepper-red/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Sparkles className="text-drpepper-red" size={32} />
            </div>
            <h3 className="text-sm font-black uppercase tracking-[0.5em] text-drpepper-red mb-4">Your Persona is</h3>
            <h2 className="text-5xl font-black font-display uppercase mb-6 leading-none">
              {PERSONAS[result].title}
            </h2>
            <p className="text-white/50 mb-8 leading-relaxed max-w-sm mx-auto">
              {PERSONAS[result].desc}
            </p>
            <div className="p-6 rounded-2xl bg-drpepper-red/10 border border-drpepper-red/20 mb-8">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-2">Perfect Match</span>
              <span className="text-xl font-bold font-display uppercase">{PERSONAS[result].match}</span>
            </div>
            <button 
              onClick={reset}
              className="flex items-center gap-2 mx-auto text-[10px] font-black uppercase tracking-[0.3em] text-white/30 hover:text-white transition-colors"
            >
              <RefreshCcw size={12} /> Retake Quiz
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
