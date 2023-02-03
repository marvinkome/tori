import Logo from "./components/logo";
import { Card } from "./components/card";
import { Calendar, Day } from "./components/calendar";

export default function Page() {
  return (
    <main className="h-full relative flex flex-col">
      <header className="flex items-baseline px-14 py-6 space-x-2">
        <h1 className="text-2xl font-medium text-neutral-700">Marvin Kome</h1>
        <p className="text-sm text-neutral-400">A couple of things about me</p>
      </header>

      <main className="grow">
        <Calendar>{/*  */}</Calendar>
      </main>

      <footer className="absolute bottom-0 mt-auto flex px-5 py-2 items-center space-x-2">
        <div className="inline-flex items-center space-x-2">
          <Logo className="w-[40px] mt-[-4px] text-neutral-700" />
          <p className="text-sm text-neutral-400">Made with Recit</p>
        </div>
        <span>-</span>
        <button className="text-sm text-neutral-400">Join the waiting list</button>
      </footer>
    </main>
  );
}
