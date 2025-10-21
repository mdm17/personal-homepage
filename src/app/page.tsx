import Image from "next/image";
import profilePict from "./_img/diky.jpg";
import Link from "next/link";

export default function Home() {

  function calculateAge(birthday: Date): number {
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs); // milliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  const alias = process.env.NEXT_PUBLIC_ALIAS_NAME;

  return (
    <div className="relative bg-white bg-opacity-20 p-5 xl:p-16 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm" id="profile">
      <div className="flex flex-col md:flex-row">
        <Image
          className="h-40 md:h-96 w-auto md:w-96 md:mt-3 md:pt-5 mx-auto md:object-cover md:rounded-full shadow-lg  shadow-slate-500 transition ease-in-out duration-150 hover:-translate-y-1 hover:ease-in hover:scale-125"
          src={profilePict}
          alt="diky"
        />
        <div className="xl:w-1/2 m-3 mx-auto text-white text-wrap grid gap-y-5">
          <div className="">
            <h1 className="text-3xl pt-5 text-slate-300 font-semibold text-center md:text-left">
              M Dicky Maulana {alias ? `(${alias}17)` : ''}
            </h1>
            <h3 className="text-xl text-slate-300 font-medium text-center md:text-left">
              Full-Stack Developer
            </h3>
          </div>
          <p>
            Saya adalah seorang Fullstack Developer berpengalaman &#xB1; {calculateAge(new Date("2021-09-01"))} tahun di industri logistik, berdomisili di Palembang.
            <br />
            Saat ini saya bekerja di <Link className="text-blue-500" href={"https://siberat.id/"} target="_blank">Siberat Digital Logistik</Link> sebagai Engineering Senior Officer.
          </p>
          <p>
            Berbekal keahlian dalam JavaScript,
            PHP, SQL, dan Linux OS, serta memiliki pengalaman dalam pengembangan aplikasi menggunakan tools dan frameworks yang populer seperti
            &nbsp;<Link className="text-blue-500" href={"https://laravel.com/"} target="_blank">Laravel</Link>,
            &nbsp;<Link className="text-blue-500" href={"https://expressjs.com/"} target="_blank">ExpressJS</Link>,
            &nbsp;<Link className="text-blue-500" href={"https://nextjs.org/"} target="_blank">NextJS</Link>,
            &nbsp;<Link className="text-blue-500" href={"https://github.com/"} target="_blank">Git</Link>, dan
            &nbsp;<Link className="text-blue-500" href={"https://www.docker.com/"} target="_blank">Docker</Link>.
            Dengan pengalaman tersebut saya mampu menerjemahkan persyaratan bisnis menjadi arsitektur yang skalabel, dan berpengalaman dalam berkolaborasi antar tim untuk mengembangkan aplikasi web yang aman dan berperforma tinggi.
          </p>
          <p>Saya juga memiliki semangat yang tinggi untuk mempelajari teknologi baru dan terus meningkatkan keahlian guna menghadapi tantangan industri yang dinamis.
            Berbekal pengalaman dan kemampuan ini, saya percaya dapat memberikan kontribusi signifikan dalam menciptakan proyek-proyek inovatif dan solusi berdampak nyata.
          </p>
        </div>
      </div>
    </div>
  );
}
