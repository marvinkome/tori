import Link from "next/link";
import Form from "./form";

const Page = () => {
  return (
    <div className="mt-2">
      <div className="mb-4">
        <h2 className="font-medium text-neutral-600">Sign up</h2>
        <p className="text-sm text-neutral-400">
          Have an account?{" "}
          <Link className="text-neutral-500 hover:underline" href="/signin">
            Sign in.
          </Link>
        </p>
      </div>

      <Form />
    </div>
  );
};

export default Page;
