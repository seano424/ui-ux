function Skeleton() {
  return (
    <div
      className="
      max-w-sm
      relative isolate 
      space-y-5 overflow-hidden 
      rounded-2xl border-8
      border-black/10
      bg-white/5 p-4
      shadow-xl
      shadow-black/5
      before:absolute
      before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite]
      before:border-t
      before:border-black/10
      before:bg-gradient-to-r before:from-transparent
      before:via-black/10 before:to-transparent
      "
    >
      <div className="h-24 rounded-lg bg-black/10"></div>
      <div className="space-y-3">
        <div className="h-3 w-3/5 rounded-lg bg-black/10"></div>
        <div className="h-3 w-4/5 rounded-lg bg-black/20"></div>
        <div className="h-3 w-2/5 rounded-lg bg-black/20"></div>
      </div>
    </div>
  )
}

export default Skeleton
