import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <section className="w-full bg-white py-[30px]">
      <div className="w-full py-[15px] px-[25px]">
        <h2 className="font-light text-sm">WORK</h2>
      </div>
      <div className="md:flex flex-row contents gap-[50px] mx-[50px]">
        <div className="w-full space-y-[20px] mb-[50px]">
          <div className="relative w-full aspect-square">
            <Image
              src="/ozkan-screen.png"
              alt="ozkan engineering website screenshot "
              fill
              className="w-full h-full absolute inset-0 object-cover object-center"
            />
          </div>
          <div className="flex items-center justify-between px-[15px]">
            <h3 className="font-extralight text-3xl text-foreground">
              Ozkan Eng.
            </h3>
            <Link href="https://ozkanmuhendislik.com.tr" target="_blank">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 11.4L21.2 3.19995"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.0002 7.1999V2.3999H17.2002"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 2.3999H9C4 2.3999 2 4.3999 2 9.3999V15.3999C2 20.3999 4 22.3999 9 22.3999H15C20 22.3999 22 20.3999 22 15.3999V13.3999"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <div className="px-[15px] space-y-[13px]">
            <span className="px-[15px] py-[5px] border-[0.5px] border-gray-400 rounded-full inline-block mr-[13px]">
              Web Design
            </span>
            <span className="px-[15px] py-[5px] border-[0.5px] border-gray-400 rounded-full inline-block mr-[13px]">
              Web Development
            </span>
            <span className="px-[15px] py-[5px] border-[0.5px] border-gray-400 rounded-full inline-block mr-[13px]">
              SEO
            </span>
          </div>
        </div>
        <div className="w-full space-y-[20px] mb-[50px]">
          <div className="relative w-full aspect-square">
            <Image
              src="/walletspace-screen.png"
              alt="walletspace website screenshot "
              fill
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex items-center justify-between px-[15px]">
            <h3 className="font-extralight text-3xl text-foreground">
              WalletSpace
            </h3>
            <Link href="https://wallet-space.com" target="_blank">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 11.4L21.2 3.19995"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.0002 7.1999V2.3999H17.2002"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 2.3999H9C4 2.3999 2 4.3999 2 9.3999V15.3999C2 20.3999 4 22.3999 9 22.3999H15C20 22.3999 22 20.3999 22 15.3999V13.3999"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <div className="px-[15px] space-y-[13px]">
            <span className="px-[15px] py-[5px] border-[0.5px] border-gray-400 rounded-full inline-block mr-[13px]">
              Web Design
            </span>
            <span className="px-[15px] py-[5px] border-[0.5px] border-gray-400 rounded-full inline-block mr-[13px]">
              Web Development
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
