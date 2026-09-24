import Image from "next/image";
import profilePict from "./_img/diky.jpg";
import Link from "next/link";

const tools = [
  { name: "Node.js", href: "https://nodejs.org/" },
  { name: "TypeScript", href: "https://www.typescriptlang.org/" },
  { name: "Laravel", href: "https://laravel.com/" },
  { name: "Express", href: "https://expressjs.com/" },
  { name: "MySQL", href: "https://www.mysql.com/" },
  { name: "Linux", href: "https://www.kernel.org/" },
];

function calculateAge(birthday: Date): number {
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export default function Home() {
  const years = calculateAge(new Date("2021-09-01"));

  return (
    <article id="profile" className="glass rounded-sm p-6 sm:p-10">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="font-display text-4xl font-medium leading-tight text-starlight sm:text-5xl">
            M Dicky Maulana
          </h1>
          <p className="mt-3 text-lg text-dust">
            Pengembang perangkat lunak full-stack, Palembang
          </p>
        </div>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <Image
          className="h-28 w-28 shrink-0 rounded-full object-cover ring-1 ring-starlight/30"
          src={profilePict}
          alt="Foto M Dicky Maulana"
          priority
        />
        <div className="text-starlight/90">
          <p className="leading-relaxed">
            Saya lulusan D4 Manajemen Informatika dari Politeknik Negeri Sriwijaya. Selama {years} tahun saya mengembangkan aplikasi web, utamanya untuk operasional logistik, dan saat ini menjabat Engineering Senior Officer di{" "}
            <Link className="text-ice underline decoration-ice/40 underline-offset-4 hover:decoration-ice" href="https://siberat.id/" target="_blank">
              Siberat Digital Logistik
            </Link>.
          </p>
          <p className="mt-4 leading-relaxed">
            Keahlian utama saya berada di pengembangan backend: Node.js, TypeScript, dan Laravel, termasuk integrasi sistem dan solusi RAG. Saya merancang arsitektur yang tetap dapat dikembangkan seiring pertumbuhan tim dan data.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/portfolio"
              className="bg-dust px-5 py-2.5 text-sm font-medium text-void hover:bg-starlight"
            >
              Lihat portofolio
            </Link>
            <Link
              href="/riwayat"
              className="px-5 py-2.5 text-sm text-ice underline decoration-ice/40 underline-offset-4 hover:decoration-ice"
            >
              Lihat riwayat
            </Link>
          </div>
          <p className="mt-8 text-sm text-dust">Teknologi</p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {tools.map((tool) => (
              <li key={tool.name}>
                <Link className="text-ice underline decoration-ice/40 underline-offset-4 hover:decoration-ice" href={tool.href} target="_blank">
                  {tool.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    </article>
  );
}
