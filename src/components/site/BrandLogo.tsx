import hsPartnersLogo from "@/assets/hs-partners-logo.png";

export function BrandLogo({ size = "nav" }: { size?: "nav" | "footer" }) {
  const isFooter = size === "footer";

  return (
    <span className={`inline-flex items-center ${isFooter ? "gap-3" : "gap-2 sm:gap-2.5"}`}>
      <img
        src={hsPartnersLogo}
        alt=""
        width={isFooter ? 64 : 44}
        height={isFooter ? 60 : 41}
        className={`w-auto object-contain drop-shadow-[0_0_16px_rgba(37,99,255,0.45)] ${isFooter ? "h-14 sm:h-16" : "h-10 sm:h-11"}`}
      />
      <span
        className={`font-display font-bold uppercase leading-none tracking-[0.16em] text-white ${isFooter ? "text-2xl sm:text-3xl" : "text-[15px] sm:text-lg"}`}
      >
        HSPARTNERS
      </span>
    </span>
  );
}
