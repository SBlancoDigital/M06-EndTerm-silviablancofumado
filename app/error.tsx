"use client";

export default function ProductsError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main>
      <h1>Ha ocurrido un error</h1>
      <p>{error?.message || "Inténtalo de nuevo."}</p>
      <button onClick={() => reset()}>Reintentar</button>
    </main>
  );
}
