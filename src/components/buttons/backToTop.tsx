import { ArrowBigUpDash } from "lucide-react";
import { Button } from "../ui/button"

export const BackToTop = () => {

  const handleButton = () => {
    const scrollingToTop = window.scrollTo({ top: 0, behavior: "smooth" });
    return scrollingToTop;
  }

  return (
    <Button
      onClick={handleButton}
      className="w-full h-12 flex flex-row items-center justify-start p-2 gap-2 
      bg-zinc-600 text-slate-100 rounded-none hover:bg-zinc-700">
      <ArrowBigUpDash /> BACK TO TOP
    </Button>
  )
}