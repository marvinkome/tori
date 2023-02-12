import Link from "next/link";
import Form from "./form";

const Page = () => {
  return (
    <div className="mt-2">
      <div className="mb-4">
        <h2 className="font-medium text-neutral-600">Sign in</h2>
        <p className="text-sm text-neutral-400">
          Don&apos;t have an account yet?{" "}
          <Link className="text-neutral-500 hover:underline" href="/signup">
            Sign up.
          </Link>
        </p>
      </div>

      <Form />

      <Link className="block mt-2 text-sm text-neutral-500 hover:underline" href="/forgot-password">
        Forgot your password?
      </Link>
    </div>
  );
};

export default Page;
