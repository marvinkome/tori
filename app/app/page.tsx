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
    </main>
  );
}
