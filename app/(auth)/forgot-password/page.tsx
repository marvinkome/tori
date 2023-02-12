import Link from "next/link";
import Form from "./form";

const Page = () => {
  return (
    <div className="mt-2">
      <div className="mb-4">
        <h2 className="font-medium text-neutral-600">Forgot your password?</h2>
        <p className="text-sm text-neutral-400">Reset it below</p>
      </div>

      <Form />

      <Link className="block mt-2 text-sm text-neutral-500 hover:underline" href="/signin">
        Sign in
      </Link>
    </div>
  );
};

export default Page;
