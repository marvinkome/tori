const Layout = async ({ children }: any) => {
  return (
    <div className="max-w-sm my-20 mx-auto">
      <div className="px-6 py-6 h-full">{children}</div>
    </div>
  );
};

export default Layout;
