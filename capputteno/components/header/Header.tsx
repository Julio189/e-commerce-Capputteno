import Input from "./Input"
import Logo from "./Logo"


function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-2 md:px-40 md:py-5">
        <Logo/>
        <Input/>
    </header>
  )
}

export default Header
