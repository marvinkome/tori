import { Calendar } from "./components/calendar";
import Day from "./components/day";
import Onboarding from "./onboarding";

const Page = () => {
  // const initialDays = []
  return (
    <main className="h-full relative flex flex-col">
      <header className="flex items-baseline px-14 py-6 space-x-2">
        <h1 className="text-2xl font-semibold text-neutral-700">Marvin Kome</h1>
      </header>

      <div className="grow">
        <Calendar>
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
        </Calendar>

        <Onboarding />
      </div>
    </main>
  );
};

export default Page;
