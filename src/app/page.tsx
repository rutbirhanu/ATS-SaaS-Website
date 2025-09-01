import Aurora from '../../reactbits/Aurora/Aurora';


export default function Home() {
  return (
    <div className="h-full w-full">

      <Aurora
        colorStops={["#39FF14", "#C77DFF", "#0B132B"]}
        blend={0}
        amplitude={1}
        speed={0.3}
      />

    </div>
  );
}
