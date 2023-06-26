'use client';

import { useRouter } from "next/navigation"
import BackIcon from "./icons/BackIcon"

interface BackButtonProps {
    navigation: string
}

const BackButton = ({navigation}: BackButtonProps) => {
    const router = useRouter();
    const handleNavigate = () => {
        router.push(navigation)
    }

  return (
    <button 
    onClick={handleNavigate}
    className="flex gap-2 items-center text-[#617480]">
    <BackIcon />
    <h3 className="text-sm">Voltar</h3>
  </button>
  )
}

export default BackButton
