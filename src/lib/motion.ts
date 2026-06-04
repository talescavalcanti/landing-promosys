// Helpers de movimento — centralizam a decisão "reduzir movimento?".
// Estratégia: REDUZIR, não REMOVER. Fades de opacidade seguem; só o movimento
// grande/contínuo (scroll suave, tilt 3D, parallax) é desligado sob reduce.
// Override de desenvolvimento: abrir a página com /#motion (ou ?motion) força
// tudo ligado mesmo com "reduzir movimento" ativo no SO.

export function isForceMotion(): boolean {
  if (typeof window === "undefined") return false;
  return (
    document.documentElement.classList.contains("force-motion") ||
    window.location.hash === "#motion" ||
    new URLSearchParams(window.location.search).has("motion")
  );
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  if (isForceMotion()) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
