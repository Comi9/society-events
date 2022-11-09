import { SlButton, SlIcon } from 'shoelace'

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gradient-to-b from-cyan-500 to-blue-500">
      <main className="">
        <article className="prose">
          <p className="mb-0">Coming soon</p>
          <h1 className="text-white">society<span className="font-light">.events</span></h1>
        </article>

        {/* <div className='flex flex-row gap-3 my-2'>
          <SlButton variant="primary">
            <SlIcon slot="prefix" name="gear"></SlIcon>
            Settings
          </SlButton>
        </div> */}

      </main>
    </div>
  )
}
