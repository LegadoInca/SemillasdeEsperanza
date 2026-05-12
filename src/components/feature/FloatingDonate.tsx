export default function FloatingDonate() {
  return (
    <a
      href="#donaciones"
      className="fixed bottom-6 right-6 z-50 bg-amber-500 hover:bg-amber-600 text-white font-bold px-4 md:px-5 py-2.5 md:py-3 rounded-full shadow-lg transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 text-sm"
    >
      <i className="ri-heart-line" />
      Donar ahora
    </a>
  );
}