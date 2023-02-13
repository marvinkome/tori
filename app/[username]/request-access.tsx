"use client";

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
            <section key={idx} className="w-[60vw] sm:w-[40vw] md:w-[20vw] h-full flex flex-col">
              <article className="w-full h-full grow p-3">
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
            <h2 className="text-sm font-medium text-neutral-500">Ohh snap!</h2>
            <p className="mt-2 text-neutral-700">
              You don&apos;t have access to this page. You can contact the author to grant you access to their story
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RequestAccess;
