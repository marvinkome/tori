"use client";
import Link from "next/link";

const RequestAccess = () => {
  return (
    <main className="h-full relative flex flex-col">
      <header className="flex items-baseline justify-between px-4 md:px-14 py-4 md:py-6">
        <div>
          <h1 className="font-serif text-2xl md:text-4xl font-semibold text-neutral-900 mb-1 animate-pulse bg-[rgb(251_251_251)] w-40 h-8 rounded-md" />
          <p className="hidden md:block font-light text-neutral-500 animate-pulse bg-[rgb(251_251_251)] w-96 h-6 mt-2 rounded-md" />
        </div>
      </header>

      <div className="relative w-full h-full overflow-y-hidden overflow-x-auto [&::-webkit-scrollbar]:hidden">
        <div className="absolute h-full left-0 flex">
          {Array.from({ length: 5 }).map((_, idx) => (
            <section key={idx} className="w-[65vw] md:w-[40vw] lg:w-[20vw] h-full flex flex-col">
              <article className="w-full grow p-3">
                <div className="animate-pulse rounded-md h-full bg-[rgb(251_251_251)]" />
              </article>
            </section>
          ))}
        </div>
      </div>

      <div className="relative z-50">
        <div className="fixed inset-0 bg-gray-50/50 transition-opacity" />
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div className="bg-white w-full mx-4 md:max-w-sm md:mx-auto py-3 px-4 rounded-lg shadow-lg">
            <h2 className="mb-2 text-sm font-medium text-neutral-500">This profile is private</h2>
            <p className="mb-4 text-neutral-700">
              You can ask the author to grant you access to their story or sign in if you already have access.
            </p>

            <Link
              href="/signin"
              className="inline-flex items-center justify-center bg-neutral-900 text-sm text-white rounded-lg px-3 py-1.5 hover:bg-neutral-800 active:bg-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:bg-neutral-600"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RequestAccess;
