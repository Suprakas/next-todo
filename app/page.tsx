import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-lg w-screen h-screen flex items-center justify-center" >
      <div className='flex flex-col items-center justify-center'>
         Todo Application
        <br/>
        <br/>
      <Link href= "/signin" className='text-md border m-2'> Sign in to Todo App</Link>
      <br/>
      <br/>
      <Link href= "/signup" className='text-md border m-2'> Sign up to Todo App </Link>
      </div> 
    </div>
  );
}
