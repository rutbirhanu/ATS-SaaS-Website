import { Header } from '@/components/layout/Header';
import Aurora from '../../reactbits/Aurora/Aurora';


export default function Home() {
  return (
    <div className="relative w-full h-screen ">
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={["#39FF14", "#C77DFF", "#0B132B"]}
          blend={0}
          amplitude={2}
          speed={0.1}
        />
      </div>
      <div className="absolute inset-0 bg-black/40 -z-9" />

      <Header />

      <div className="flex flex-col items-center justify-center h-[calc(90vh-80px)]">

        <div className="text-center">
          <h1 className="text-5xl mb-5">The Only ATS Website You Need</h1>
          <div className="px-3">
            <p className="text-sm">
              Do you also want me to show you how to apply this as a global background layout
            </p>
            <p className="text-sm">(so it works across all pages) instead of just one page?</p>
          </div>
          <div><button className='bg-black rounded-xl px-6 py-3 mt-10'>Get Started</button></div>
        </div>
      </div>

      <div className='mx-10 bg-yellow-50 rounded-2xl h-60'>
      </div>
      <div className='flex'>
        <div className='ml-10 w-1/2 bg-green-100 rounded-2xl h-60'>
          hi
        </div>
        <div className='mr-10 w-1/2 bg-purple-200 rounded-2xl h-60'>
          hi
        </div>
      </div>

    </div>

  );
}
