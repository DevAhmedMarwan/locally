const Marquee = () => {
  return (
    <div className="w-full h-[48px] bg-[#404040] overflow-hidden flex items-center">
      <div className="marquee flex items-center gap-10">
        <div className="flex items-center gap-5">
          <span className="mx-6 text-white">
            🔥 🛍️ HAPPY EID, ALL ORDERS WILL BE SHIPPED AFTER EID 💙
          </span>
          <span className="mx-4 text-blue-200">•</span>
        </div>
        <div className="flex items-center gap-5">
        <span className="mx-6 text-white">
          🔥 🛍️ HAPPY EID, ALL ORDERS WILL BE SHIPPED AFTER EID 💙
        </span>
        <span className="mx-4 text-blue-200">•</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
