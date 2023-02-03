const AuthLayout = async ({ children }: any) => {
  return (
    <div className="h-full w-screen flex flex-col items-center justify-center m-0 bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="w-[28rem] max-w-full min-h-[18rem] px-6">
        <div className="bg-white shadow-2xl px-6 py-6 rounded-lg h-full">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
