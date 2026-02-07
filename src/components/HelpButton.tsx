export function HelpButton() {
  return (
    <button
      type="button"
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-white shadow-lg transition hover:bg-zinc-800"
      aria-label="Help"
    >
      <span className="text-lg font-semibold">?</span>
    </button>
  );
}
