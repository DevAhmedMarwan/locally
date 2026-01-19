const Marquee = () => {
  return (
    <div className="w-full h-[48px] bg-[#404040] overflow-hidden flex items-center">
      <div className="marquee flex items-center gap-8">
        <span className="mx-6 text-white">
          🔥 🛍️ CHECK OUT THE NEW COLLECTION & THE RESTOCKED ITEMS 💙
        </span>
        <span className="mx-4 text-blue-200">•</span>
        <span className="mx-6 text-white">
          🔥 🛍️ CHECK OUT THE NEW COLLECTION & THE RESTOCKED ITEMS 💙
        </span>
      </div>
    </div>
  );
};

export default Marquee;
