import hsPartnersLogo from "@/assets/hs-partners-logo.png";

export function BrandLogo({ size = "nav" }: { size?: "nav" | "footer" }) {
  const isFooter = size === "footer";

  return (
    <span className={`inline-flex min-w-0 items-center ${isFooter ? "gap-3" : "gap-1.5 sm:gap-2.5"}`}>
      <img
        src={hsPartnersLogo}
        alt=""
        width={isFooter ? 64 : 44}
        height={isFooter ? 60 : 41}
        className={`w-auto shrink-0 object-contain drop-shadow-[0_0_16px_rgba(37,99,255,0.45)] ${isFooter ? "h-12 sm:h-16" : "h-8 sm:h-11"}`}
      />
      <span
        className={`truncate font-display font-bold uppercase leading-none tracking-[0.12em] text-white sm:tracking-[0.16em] ${isFooter ? "text-xl sm:text-3xl" : "text-[13px] sm:text-lg"}`}
      >
        HSPARTNERS
      </span>
    </span>
  );
}
