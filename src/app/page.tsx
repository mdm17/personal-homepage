import Image from "next/image";
import profilePict from "./_img/diky.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative bg-black bg-opacity-55 dark:bg-white dark:bg-opacity-10 p-5 xl:p-16 rounded-lg" id="profile">
      <div className="flex flex-col">
        <Image
          className="h-52 w-auto mx-auto rounded-full shadow-lg  shadow-slate-500 transition ease-in-out duration-150 hover:-translate-y-1 hover:ease-in hover:scale-125"
          src={profilePict}
          alt="diky"
        />
        <h1 className="text-3xl pt-5 text-slate-300 font-semibold text-center">
          M Dicky Maulana
        </h1>
        <p className="xl:w-1/2 m-3 mx-auto text-white text-center text-wrap">
          Saya adalah seorang Fullstack Developer berpengalaman &#xB1; 3 tahun di industri logistik, berdomisili di Palembang.
          <br />
          Saat ini saya bekerja di <Link href={'https://siberat.id/'} target="_blank">Siberat Digital Logistik</Link> sebagai Engineering Senior Officer.
          <br />
          Berbekal keahlian dalam JavaScript,
          PHP, SQL, dan Linux OS, serta memiliki pengalaman dalam pengembangan aplikasi menggunakan tools dan frameworks yang populer seperti
          &nbsp;<Link href={'https://laravel.com/'} target="_blank">Laravel</Link>,
          &nbsp;<Link href={'https://expressjs.com/'} target="_blank">ExpressJS</Link>,
          &nbsp;<Link href={'https://nextjs.org/'} target="_blank">NextJS</Link>,
          &nbsp;<Link href={'https://github.com/'} target="_blank">Git</Link>, dan
          &nbsp;<Link href={'https://www.docker.com/'} target="_blank">Docker</Link>.
          <br />
          Saya juga memiliki semangat yang tinggi untuk mempelajari teknologi baru dan terus meningkatkan keahlian guna menghadapi tantangan industri yang dinamis.
          Berbekal pengalaman dan kemampuan ini, saya percaya dapat memberikan kontribusi signifikan dalam menciptakan proyek-proyek inovatif dan solusi berdampak nyata.
        </p>
      </div>
    </div>
  );
}
