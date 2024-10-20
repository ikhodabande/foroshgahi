import { Menu } from "../common/menu/Menu"
import SearchModule from "../modules/search-module/SearchModule"

export const Layout = ({children}) => {
  return (
    <>
    <header className="fixed top-0 w-full h-16 flex items-center justify-center bg-white z-10 mb-4">
      <SearchModule companyName={"وبکام"}/>
    </header>
    <main className="w-[95vw] sm:w-full">
        {children}
    </main>
    <footer className="w-full fixed bottom-0 left-[50%] -translate-x-[50%]">
      <Menu/>
    </footer>
    </>
  )
}
