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
        <Calendar>
          <Day date="Oct 21">
            <Card color="blue" title="Surf Curse concert was amazing!!" date="21 October" />
            <Card color="green" title="Awaiting vacations" date="14 December" />
          </Day>

          <Day date="Nov 20">
            <Card color="purple" title="Finally seeing Still Woozy" date="20 November" />
            <Card color="yellow" title="Still Woozy Jpengs" date="20 November" />
          </Day>

          <Day date="Nov 26">
            <Card color="orange" title="Happy birthday Sophia 🎉🥳" date="26 November" />
            <Card color="green" title="Merry Christmas" date="25 December" />
          </Day>

          <Day date="Dec 31">
            <Card color="red" title="Some progress made on this" date="3 January" />
            <Card color="purple2" title="Playing with Procreate" date="14 January" />
          </Day>

          <Day date="Jan 2">
            <Card color="orange" title="Thinking about how to make the next year in review better 🤔" date="31 December" />
          </Day>
        </Calendar>
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
