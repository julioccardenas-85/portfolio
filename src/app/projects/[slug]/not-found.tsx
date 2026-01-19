import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-neutral-400 mb-6">
        The project you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="underline">
        Back to home
      </Link>
    </main>
  );
}
