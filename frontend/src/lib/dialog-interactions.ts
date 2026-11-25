/** True only when a pointer is on the native dialog backdrop, outside its panel. */
export function isDialogBackdropPointer(
  dialog: HTMLDialogElement,
  target: EventTarget | null,
  clientX: number,
  clientY: number,
) {
  if (target !== dialog) return false;
  const bounds = dialog.getBoundingClientRect();
  return (
    clientX < bounds.left ||
    clientX > bounds.right ||
    clientY < bounds.top ||
    clientY > bounds.bottom
  );
}
