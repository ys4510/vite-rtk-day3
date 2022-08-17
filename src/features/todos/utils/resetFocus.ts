export const resetFocus = () => {
  const activeEl = document.activeElement;
  if (!activeEl) return;
  (activeEl as HTMLElement).blur();
}