// 'use client'

// import Image from 'next/image'
// import { useState } from 'react'
// import { AnimatePresence, motion } from 'framer-motion'
// import { ArrowDown, ArrowUpRight, ChevronRight, Headphones, Menu, Music2, Pause, Play, X } from 'lucide-react'
// import { heroImage, aboutCards, timeline, awards, dictionary, things, letter } from '@/data/birthday'
// import { memories } from '@/data/memories'

// const nav = ['Amara', 'French Journey', 'Awards', 'Dictionary', 'Memories', '10 Things', 'Quiz', 'Voice', 'Letter', 'Final Surprise']
// const quizzes = [
//   ['What does “Joyeux anniversaire” mean?', ['Good morning', 'Happy birthday', 'See you tomorrow'], 1],
//   ['Tu es une ______ incroyable.', ['amie', 'livre', 'maison'], 0],
//   ['“Je suis contente de t’avoir comme amie.” means…', ['I am happy to have you as a friend.', 'I forgot my homework.', 'I speak fluent French.'], 0],
//   ['What does “On continue” mean?', ['We stop here.', 'We continue / Let’s keep going.', 'Good night.'], 1],
//   ['“Une amie pas comme les autres” means…', ['A friend like no other.', 'A very funny teacher.', 'A French birthday.'], 0],
// ]

// function SectionTitle({ eyebrow, title, light = false }: { eyebrow?: string; title: string; light?: boolean }) {
//   return <div className={`section-title ${light ? 'light' : ''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
// }

// export default function Page() {
//   const [entered, setEntered] = useState(false)
//   const [menu, setMenu] = useState(false)
//   const [flip, setFlip] = useState<number | null>(null)
//   const [photo, setPhoto] = useState<{ image: string; caption: string } | null>(null)
//   const [quizIndex, setQuizIndex] = useState(0)
//   const [score, setScore] = useState(0)
//   const [quizDone, setQuizDone] = useState(false)
//   const [playing, setPlaying] = useState(false)
//   const [surprise, setSurprise] = useState(false)

//   const answerQuiz = (answer: number) => { if (answer === quizzes[quizIndex][2]) setScore(s => s + 1); if (quizIndex === quizzes.length - 1) setQuizDone(true); else setQuizIndex(i => i + 1) }
//   const restartQuiz = () => { setQuizIndex(0); setScore(0); setQuizDone(false) }

//   if (!entered) return <main className="entry"><div className="grain" /><div className="entry-stars">✦　·　✧　·　✦</div><p className="eyebrow">A birthday story in twelve chapters</p><h1>AMARA</h1><p className="entry-fr">Une amie pas comme les autres <span>🇫🇷</span></p><p className="entry-copy">A little corner of the internet<br />made just for you.</p><button className="enter-button" onClick={() => setEntered(true)}>Entrer dans notre histoire <ArrowUpRight /></button><p className="entry-note">scroll slowly · there’s no rush</p></main>

//   return <main className="site">
//     <header className="topbar"><a href="#top" className="brand">A<span>.</span></a><div className="chapter">A little story for Amara</div><button className="menu-button" aria-label="Open navigation" onClick={() => setMenu(true)}><Menu /></button></header>
//     <AnimatePresence>{menu && <motion.aside className="nav-drawer" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}><button className="close-button" onClick={() => setMenu(false)}><X /></button><p className="eyebrow">Notre histoire</p>{nav.map((item, i) => <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setMenu(false)}><span>0{i + 1}</span>{item}</a>)}</motion.aside>}</AnimatePresence>

//     <section id="top" className="hero section-pad"><div className="hero-copy"><p className="eyebrow">Une amie pas comme les autres</p><h1>AMARA<span className="period">.</span></h1><p className="hero-sub">The birthday girl<span className="scribble">— yes, I made an entire website for you. 😂</span></p><div className="hero-traits"><span>Fun.</span><span>Goofy.</span><span>Kind.</span><span>Unforgettable.</span></div><a href="#amara" className="scroll-cue">Discover her story <ArrowDown /></a></div><div className="hero-image-wrap"><div className="hero-image-frame"><Image src={heroImage} alt="Amara smiling" fill priority sizes="(max-width: 768px) 90vw, 48vw" /></div><span className="frame-label">birthday girl / 01</span></div></section>

//     <section id="amara" className="section-pad about"><SectionTitle eyebrow="01 — The person behind the memories" title="Meet Amara" /><div className="about-grid"><div className="about-text"><p>Some people enter your life quietly.</p><p>And then somehow they become part of the moments you remember most.</p><p>Amara is one of those people.</p><p>She’s fun. She’s goofy. She’s amazing. And she has this way of making ordinary moments feel a little more special.</p></div><div className="about-cards">{aboutCards.map((card, i) => <motion.article whileHover={{ y: -6, rotate: i % 2 ? 1 : -1 }} key={card.title} className="trait-card"><span>{card.icon}</span><h3>{card.title}</h3><p>{card.text}</p></motion.article>)}</div></div></section>

//     <section id="french-journey" className="dark-section section-pad"><SectionTitle light eyebrow="02 — Our little French adventure" title="Depuis Février" /><p className="lead light-text">It started with French. Two people deciding to learn a language together… without fully understanding what they had signed up for. <i>😂</i></p><div className="timeline">{timeline.map((item, i) => <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} className="timeline-item" key={item.date}><div className="timeline-dot" /><div><p className="date">{item.date}</p><h3>{item.title}</h3><p>{item.text}</p></div></motion.div>)}</div><blockquote>“Notre français n’est peut-être pas parfait.<br /><strong>Mais notre amitié est quelque chose que je chérirai toujours.</strong>”</blockquote></section>

//     <section id="awards" className="section-pad awards"><SectionTitle eyebrow="03 — The completely official & definitely unbiased" title="Les Prix d’Amara" /><div className="award-grid">{awards.map(([title, text], i) => <motion.article whileHover={{ rotate: i % 2 ? -1 : 1 }} className="award-card" key={title}><span className="award-no">0{i + 1}</span><span className="trophy">✦</span><h3>{title}</h3><p>{text}</p><span className="winner">WINNER: AMARA</span></motion.article>)}</div></section>

//     <section id="dictionary" className="dictionary-section section-pad"><SectionTitle light eyebrow="04 — A tiny glossary of us" title="Notre Petit Dictionnaire" /><div className="dictionary-grid">{dictionary.map(([word, type, definition], i) => <button className={`dictionary-card ${flip === i ? 'is-flipped' : ''}`} onClick={() => setFlip(flip === i ? null : i)} key={word}><span className="dict-front"><b>{word}</b><small>{type}</small><em>tap to reveal ↗</em></span><span className="dict-back"><b>{word}</b><p>{definition}</p><small>tap to flip back</small></span></button>)}</div></section>

//     <section id="memories" className="section-pad memories"><SectionTitle eyebrow="05 — The moments I never want to forget" title="Our Little Moments" /><p className="lead">Funny how the little moments become the ones you remember.</p><div className="memory-grid">{memories.map((memory, i) => <motion.button whileHover={{ y: -8, rotate: 0 }} className={`memory-card card-${i + 1}`} key={memory.image} onClick={() => setPhoto(memory)}><div className="memory-photo"><Image src={memory.image} alt={memory.caption} fill sizes="(max-width: 768px) 90vw, 30vw" /></div><p>{memory.caption}</p></motion.button>)}</div><div className="memory-note">The random conversations.<br />The stupid jokes. The laughter.<br /><strong>Somehow, those are often the moments that matter most.</strong></div></section>

//     <section id="10-things" className="rose-section section-pad"><SectionTitle eyebrow="06 — Ten tiny truths" title="10 Petites Choses Que J’aime Chez Toi" /><div className="things-grid">{things.map(([title, text], i) => <motion.article initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="thing" key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></motion.article>)}</div></section>

//     <section id="quiz" className="quiz-section section-pad"><SectionTitle light eyebrow="07 — Let’s see if those lessons paid off" title="Le Petit Défi d’Amara" />{!quizDone ? <div className="quiz-card"><div className="quiz-progress"><span>0{quizIndex + 1} / 05</span><div><i style={{ width: `${((quizIndex + 1) / 5) * 100}%` }} /></div></div><h3>{quizzes[quizIndex][0] as string}</h3><div className="quiz-options">{(quizzes[quizIndex][1] as string[]).map((answer, i) => <button key={answer} onClick={() => answerQuiz(i)}>{String.fromCharCode(65 + i)} <span>{answer}</span></button>)}</div></div> : <div className="quiz-result"><span className="eyebrow">résultat</span><h3>{score === 5 ? 'FÉLICITATIONS! ✦' : `${score} / 5 — pas mal!`}</h3><p>{score === 5 ? 'You have officially survived another French lesson.' : 'It’s okay. We’re blaming French grammar. 😂'}</p><button className="outline-button" onClick={restartQuiz}>Try again <ChevronRight /></button></div>}</section>

//     <section id="voice" className="voice-section section-pad"><div><SectionTitle eyebrow="08 — Some things are better when they’re heard" title="Écoute-moi" /><p>Best experienced with headphones. ♡</p></div><button className={`play-button ${playing ? 'playing' : ''}`} onClick={() => setPlaying(!playing)}><span>{playing ? <Pause /> : <Play />}</span><b>{playing ? 'Pause my birthday message' : 'Play my birthday message'}</b><small>audio / 02:14</small></button><p className="audio-note">Add your message at <code>/audio/amara-birthday-message.mp3</code></p></section>

//     <section id="letter" className="letter-section section-pad"><SectionTitle eyebrow="09 — A letter, in case I didn’t say it enough" title="Pour Amara" /><div className="letter-paper"><span className="letter-mark">A.</span>{letter.split('\n\n').map((paragraph, i) => <p key={i} className={i === 0 || i === letter.split('\n\n').length - 1 ? 'letter-emphasis' : ''}>{paragraph}</p>)}</div></section>

//     <section id="final-surprise" className={`surprise-section ${surprise ? 'revealed' : ''}`}>{!surprise ? <div><p className="eyebrow">12 — Il reste une dernière chose</p><h2>Attends<span>...</span></h2><p>One last little thing.</p><button className="enter-button" onClick={() => setSurprise(true)}>Click me <ArrowUpRight /></button></div> : <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="reveal"><p className="eyebrow">AMARA</p><h2>If this entire website<br />was trying to say one thing…</h2><motion.div initial={{ scale: .8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: .8, type: 'spring' }}><strong>TU ES AIMÉE <span>♡</span></strong><p>You are loved.</p></motion.div><div className="reveal-days">Aujourd’hui.<br />Demain.<br />Et tous les jours après.</div><h3>Joyeux anniversaire, Amara! 🎂</h3></motion.div>}</section>

//     <footer>Made with love, laughter, and questionable French pronunciation. 🇫🇷<br /><span>— From someone very lucky to call you a friend. ♡</span></footer>
//     <AnimatePresence>{photo && <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setPhoto(null)}><button onClick={() => setPhoto(null)}><X /></button><div onClick={e => e.stopPropagation()}><Image src={photo.image} alt={photo.caption} width={1000} height={800} /><p>{photo.caption}</p></div></motion.div>}</AnimatePresence>
//     <button className="music-fab" aria-label="Toggle background music" onClick={() => setPlaying(!playing)}>{playing ? <Pause /> : <Music2 />}</button>
//   </main>
// }

'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, ChevronRight, Headphones, Menu, Music2, Pause, Play, X } from 'lucide-react'
import { heroImage, aboutCards, timeline, awards, dictionary, things, letter } from '@/data/birthday'
import { memories } from '@/data/memories'

const nav = ['Amara', 'French Journey', 'Awards', 'Dictionary', 'Memories', '10 Things', 'Quiz', 'Voice', 'Letter', 'Final Surprise']
const quizzes = [
  ['What does “Joyeux anniversaire” mean?', ['Good morning', 'Happy birthday', 'See you tomorrow'], 1],
  ['Tu es une ______ incroyable.', ['amie', 'livre', 'maison'], 0],
  ['“Je suis contente de t’avoir comme amie.” means…', ['I am happy to have you as a friend.', 'I forgot my homework.', 'I speak fluent French.'], 0],
  ['What does “On continue” mean?', ['We stop here.', 'We continue / Let’s keep going.', 'Good night.'], 1],
  ['“Une amie pas comme les autres” means…', ['A friend like no other.', 'A very funny teacher.', 'A French birthday.'], 0],
]

function SectionTitle({ eyebrow, title, light = false }: { eyebrow?: string; title: string; light?: boolean }) {
  return <div className={`section-title ${light ? 'light' : ''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
}

export default function Page() {
  const [entered, setEntered] = useState(false)
  const [menu, setMenu] = useState(false)
  const [flip, setFlip] = useState<number | null>(null)
  const [photo, setPhoto] = useState<{ image: string; caption: string } | null>(null)
  const [quizIndex, setQuizIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [quizDone, setQuizDone] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [surprise, setSurprise] = useState(false)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio('/styleplus.mp3')
    audioRef.current.loop = true
    return () => {
      audioRef.current?.pause()
    }
  }, [])

  const togglePlay = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.play().catch(() => {})
      setPlaying(true)
    }
  }

  const answerQuiz = (answer: number) => { if (answer === quizzes[quizIndex][2]) setScore(s => s + 1); if (quizIndex === quizzes.length - 1) setQuizDone(true); else setQuizIndex(i => i + 1) }
  const restartQuiz = () => { setQuizIndex(0); setScore(0); setQuizDone(false) }

  if (!entered) return <main className="entry"><div className="grain" /><div className="entry-stars">✦ · ✧ · ✦</div><p className="eyebrow">A birthday story in twelve chapters</p><h1>AMARA</h1><p className="entry-fr">Une amie pas comme les autres <span>🇫🇷</span></p><p className="entry-copy">A little corner of the internet<br />made just for you.</p><button className="enter-button" onClick={() => setEntered(true)}>Entrer dans notre histoire <ArrowUpRight /></button><p className="entry-note">scroll slowly · there’s no rush</p></main>

  return <main className="site">
    <header className="topbar"><a href="#top" className="brand">A<span>.</span></a><div className="chapter">A little story for Amara</div><button className="menu-button" aria-label="Open navigation" onClick={() => setMenu(true)}><Menu /></button></header>
    <AnimatePresence>{menu && <motion.aside className="nav-drawer" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}><button className="close-button" onClick={() => setMenu(false)}><X /></button><p className="eyebrow">Notre histoire</p>{nav.map((item, i) => <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setMenu(false)}><span>0{i + 1}</span>{item}</a>)}</motion.aside>}</AnimatePresence>

    <section id="top" className="hero section-pad"><div className="hero-copy"><p className="eyebrow">Une amie pas comme les autres</p><h1>AMARA<span className="period">.</span></h1><p className="hero-sub">The birthday girl<span className="scribble">— yes, I made an entire website for you. 😂</span></p><div className="hero-traits"><span>Fun.</span><span>Goofy.</span><span>Kind.</span><span>Unforgettable.</span></div><a href="#amara" className="scroll-cue">Discover her story <ArrowDown /></a></div><div className="hero-image-wrap"><div className="hero-image-frame"><Image src={heroImage} alt="Amara smiling" fill priority sizes="(max-width: 768px) 90vw, 48vw" /></div><span className="frame-label">birthday girl / 01</span></div></section>

    <section id="amara" className="section-pad about"><SectionTitle eyebrow="01 — The person behind the memories" title="Meet Amara" /><div className="about-grid"><div className="about-text"><p>Some people enter your life quietly.</p><p>And then somehow they become part of the moments you remember most.</p><p>Amara is one of those people.</p><p>She’s fun. She’s goofy. She’s amazing. And she has this way of making ordinary moments feel a little more special.</p></div><div className="about-cards">{aboutCards.map((card, i) => <motion.article whileHover={{ y: -6, rotate: i % 2 ? 1 : -1 }} key={card.title} className="trait-card"><span>{card.icon}</span><h3>{card.title}</h3><p>{card.text}</p></motion.article>)}</div></div></section>

    <section id="french-journey" className="dark-section section-pad"><SectionTitle light eyebrow="02 — Our little French adventure" title="Depuis Février" /><p className="lead light-text">It started with French. Two people deciding to learn a language together… without fully understanding what they had signed up for. <i>😂</i></p><div className="timeline">{timeline.map((item, i) => <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} className="timeline-item" key={item.date}><div className="timeline-dot" /><div><p className="date">{item.date}</p><h3>{item.title}</h3><p>{item.text}</p></div></motion.div>)}</div><blockquote>“Notre français n’est peut-être pas parfait.<br /><strong>Mais notre amitié est quelque chose que je chérirai toujours.</strong>”</blockquote></section>

    <section id="awards" className="section-pad awards"><SectionTitle eyebrow="03 — The completely official & definitely unbiased" title="Les Prix d’Amara" /><div className="award-grid">{awards.map(([title, text], i) => <motion.article whileHover={{ rotate: i % 2 ? -1 : 1 }} className="award-card" key={title}><span className="award-no">0{i + 1}</span><span className="trophy">✦</span><h3>{title}</h3><p>{text}</p><span className="winner">WINNER: AMARA</span></motion.article>)}</div></section>

    <section id="dictionary" className="dictionary-section section-pad"><SectionTitle light eyebrow="04 — A tiny glossary of us" title="Notre Petit Dictionnaire" /><div className="dictionary-grid">{dictionary.map(([word, type, definition], i) => <button className={`dictionary-card ${flip === i ? 'is-flipped' : ''}`} onClick={() => setFlip(flip === i ? null : i)} key={word}><span className="dict-front"><b>{word}</b><small>{type}</small><em>tap to reveal ↗</em></span><span className="dict-back"><b>{word}</b><p>{definition}</p><small>tap to flip back</small></span></button>)}</div></section>

    <section id="memories" className="section-pad memories"><SectionTitle eyebrow="05 — The moments I never want to forget" title="Our Little Moments" /><p className="lead">Funny how the little moments become the ones you remember.</p><div className="memory-grid">{memories.map((memory, i) => <motion.button whileHover={{ y: -8, rotate: 0 }} className={`memory-card card-${i + 1}`} key={memory.image} onClick={() => setPhoto(memory)}><div className="memory-photo"><Image src={memory.image} alt={memory.caption} fill sizes="(max-width: 768px) 90vw, 30vw" /></div><p>{memory.caption}</p></motion.button>)}</div><div className="memory-note">The random conversations.<br />The stupid jokes. The laughter.<br /><strong>Somehow, those are often the moments that matter most.</strong></div></section>

    <section id="10-things" className="rose-section section-pad"><SectionTitle eyebrow="06 — Ten tiny truths" title="10 Petites Choses Que J’aime Chez Toi" /><div className="things-grid">{things.map(([title, text], i) => <motion.article initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="thing" key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></motion.article>)}</div></section>

    <section id="quiz" className="quiz-section section-pad"><SectionTitle light eyebrow="07 — Let’s see if those lessons paid off" title="Le Petit Défi d’Amara" />{!quizDone ? <div className="quiz-card"><div className="quiz-progress"><span>0{quizIndex + 1} / 05</span><div><i style={{ width: `${((quizIndex + 1) / 5) * 100}%` }} /></div></div><h3>{quizzes[quizIndex][0] as string}</h3><div className="quiz-options">{(quizzes[quizIndex][1] as string[]).map((answer, i) => <button key={answer} onClick={() => answerQuiz(i)}>{String.fromCharCode(65 + i)} <span>{answer}</span></button>)}</div></div> : <div className="quiz-result"><span className="eyebrow">résultat</span><h3>{score === 5 ? 'FÉLICITATIONS! ✦' : `${score} / 5 — pas mal!`}</h3><p>{score === 5 ? 'You have officially survived another French lesson.' : 'It’s okay. We’re blaming French grammar. 😂'}</p><button className="outline-button" onClick={restartQuiz}>Try again <ChevronRight /></button></div>}</section>

    <section id="voice" className="voice-section section-pad"><div><SectionTitle eyebrow="08 — Some things are better when they’re heard" title="Écoute-moi" /><p>Best experienced with headphones. ♡</p></div><button className={`play-button ${playing ? 'playing' : ''}`} onClick={togglePlay}><span>{playing ? <Pause /> : <Play />}</span><b>{playing ? 'Pause my birthday message' : 'Play my birthday message'}</b><small>audio / styleplus</small></button><p className="audio-note">Playing from <code>/styleplus.mp3</code></p></section>

    <section id="letter" className="letter-section section-pad"><SectionTitle eyebrow="09 — A letter, in case I didn’t say it enough" title="Pour Amara" /><div className="letter-paper"><span className="letter-mark">A.</span>{letter.split('\n\n').map((paragraph, i) => <p key={i} className={i === 0 || i === letter.split('\n\n').length - 1 ? 'letter-emphasis' : ''}>{paragraph}</p>)}</div></section>

    <section id="final-surprise" className={`surprise-section ${surprise ? 'revealed' : ''}`}>{!surprise ? <div><p className="eyebrow">12 — Il reste une dernière chose</p><h2>Attends<span>...</span></h2><p>One last little thing.</p><button className="enter-button" onClick={() => setSurprise(true)}>Click me <ArrowUpRight /></button></div> : <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="reveal"><p className="eyebrow">AMARA</p><h2>If this entire website<br />was trying to say one thing…</h2><motion.div initial={{ scale: .8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: .8, type: 'spring' }}><strong>TU ES AIMÉE <span>♡</span></strong><p>You are loved.</p></motion.div><div className="reveal-days">Aujourd’hui.<br />Demain.<br />Et tous les jours après.</div><h3>Joyeux anniversaire, Amara! 🎂</h3></motion.div>}</section>

    <footer>Made with love, laughter, and questionable French pronunciation. 🇫🇷<br /><span>— From someone very lucky to call you a friend. ♡</span></footer>
    <AnimatePresence>{photo && <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setPhoto(null)}><button onClick={() => setPhoto(null)}><X /></button><div onClick={e => e.stopPropagation()}><Image src={photo.image} alt={photo.caption} width={1000} height={800} /><p>{photo.caption}</p></div></motion.div>}</AnimatePresence>
    <button className="music-fab" aria-label="Toggle background music" onClick={togglePlay}>{playing ? <Pause /> : <Music2 />}</button>
  </main>
}