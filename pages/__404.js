import { useEffect } from "react"
import { useRouter } from 'next/router';
import { redirect } from 'next/navigation'

export default function NotFoundPage(){
const router = useRouter();

useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 10);
  }, []);

return null;

} 