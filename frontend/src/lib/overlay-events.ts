/** Coordinate global interfaces without coupling their state or changing page layouts. */
export const overlayEvent = "nova-proposta:overlay";
export type OverlayName = "chat" | "quote" | "menu";
export function announceOverlay(name: OverlayName) {
  window.dispatchEvent(
    new CustomEvent<OverlayName>(overlayEvent, { detail: name }),
  );
}
