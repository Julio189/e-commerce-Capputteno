import { Saira_Stencil_One } from "next/font/google"
import Link from "next/link"

const sairaStencil = Saira_Stencil_One({ 
    weight:['400'],
    subsets: ['latin'] 
  })

function Logo() {
  return (
    <Link href='/'
    className={`${sairaStencil.className} text-logoColor text-[40px] leading-[60px]`}>
      Capputeeno
    </Link>
  )
}

export default Logo
