import { Menu } from "../common/menu/Menu";

export const Layout = ({ children }) => {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer className="w-full fixed bottom-0 left-[50%] -translate-x-[50%]">
        <Menu />
      </footer>
    </>
  );
};
