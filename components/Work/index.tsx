export default function Work() {
  return (
    <section className="w-full bg-white py-[30px]">
      <div className="w-full py-[15px] px-[25px]">
        <h2 className="font-light text-sm">WORK</h2>
      </div>
      <div className="relative h-screen w-full bg-black">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full absolute inset-0 object-cover object-center opacity-70"
        >
          <source src="/videos/ozkan-eng.mp4" type="video/mp4" />
        </video>
        <h3 className="font-extralight text-3xl text-white">WalletSpace</h3>
      </div>
      <div className="h-screen w-full bg-black">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover object-center opacity-70"
        >
          <source src="/videos/ozkan-eng.mp4" type="video/mp4" />
        </video>
        <h3 className="font-extralight text-3xl text-white">Ozkan Eng.</h3>
      </div>
    </section>
  );
}
