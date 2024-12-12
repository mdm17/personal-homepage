import Image from "next/image";
import profilePict from "./_img/diky.jpg";

export default function Home() {
  return (
    <div className="relative bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10 p-16" id="profile">
      <div className="flex flex-col">
        <Image
          className="h-52 w-auto mx-auto rounded-full shadow-lg  shadow-slate-500 transition ease-in-out duration-150 hover:-translate-y-1 hover:ease-in hover:scale-125"
          src={profilePict}
          alt="diky"
        />
        <h1 className="text-3xl pt-5 text-slate-700 dark:text-slate-300 font-semibold text-center">
          M Dicky Maulana
        </h1>
        <p className="w-1/2 m-3 mx-auto text-center dark:text-white ">
          Saya adalah seorang Lulusan dari D4 jurusan Manajemen Informatika
          Politeknik Negeri Sriwijaya. Saya memiliki pengalaman bekerja di PT
          Hedo Global Technology tergabung sebagai tim Programmer untuk
          pembuatan aplikasi Dibajolbae selama kurang lebih 7 bulan, lalu saya
          juga pernah bekerja di tempat kursus programming dan Software Host di
          kota Palembang, CV Tekno Pertiwi pada posisi IT Support dan Web
          Developer. Selain pengalaman bekerja, saya juga memiliki pengalaman
          berorganisasi aktif di mana saya menjadi anggota Himpunan Mahasiswa
          Jurusan Manajemen Informatika dengan posisi saya sebagai koordinator
          divisi Akademik. Pengalaman tersebut terbukti membantu saya dalam
          meningkatkan kemampuan komunikasi dan pemecahan masalah. Saya juga
          merupakan pribadi terampil yang memungkinkan saya berbaur dengan
          budaya kelompok atau tim.
        </p>
      </div>
    </div>
  );
}
