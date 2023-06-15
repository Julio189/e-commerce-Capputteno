import Input from "./Input"
import Logo from "./Logo"


function Header() {
  return (
    <header className="flex items-center justify-between px-40 py-5">
        <Logo/>
        <Input/>
    </header>
  )
}

export default Header
