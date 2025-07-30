import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';

const scenes = [
  {
    title: 'The Oracle of Fees',
    text: 'The Oracle reveals three paths to save on gas fees. Which one will Zycules choose?',
    image: '/images/scene1.jpg',
  },
  {
    title: 'The Bridge of Confusion',
    text: 'A chaotic bridge of buttons stands before him. Only one leads to clarity.',
    image: '/images/scene2.jpg',
  },
  {
    title: 'The Hydra of Overcomplexity',
    text: 'Three heads: Charts, Slippage, Leverage. Which UX beast does he tame first?',
    image: '/images/scene3.jpg',
  },
  {
    title: 'The Vault of Clarity',
    text: 'Inside, a pristine dashboard awaits. What element shines the brightest?',
    image: '/images/scene4.jpg',
  },
  {
    title: 'The Golden Apples',
    text: 'At last, the Golden Apples of Clean UX! Claim your reward, hero.',
    image: '/images/scene5.jpg',
  },
];

export default function Scene() {
  const router = useRouter();
  const { id } = router.query;
  const idStr = Array.isArray(id) ? id[0] : id;
  const idx = parseInt(idStr || '1', 10) - 1;
  const scene = scenes[idx] || scenes[0];
  const nextId = idx + 2;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-black/50 relative">
      <img src="/images/legendxkilla-logo.png" alt="@legendxkilla.eth" className="absolute top-4 left-4 w-32" />
      <div className="max-w-2xl bg-gray-800 bg-opacity-90 p-6 rounded-xl shadow-xl text-center">
        <h1 className="text-3xl font-bold mb-4">{scene.title}</h1>
        <motion.img
          src={scene.image}
          alt={scene.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
        <p className="mb-6">{scene.text}</p>
        {nextId <= scenes.length ? (
          <Link href={`/scene/${nextId}`}>
            <a className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-lg font-semibold transition">
              Continue
            </a>
          </Link>
        ) : (
          <p className="text-xl font-semibold">Congratulations, you've completed the Trial of Zycules!</p>
        )}
      </div>
    </div>
  );
}
