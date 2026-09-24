import type { Metadata } from "next";
import Image from "next/image";
import mdmGitea from "../_img/gitea.jpg";

export const metadata: Metadata = {
  title: "Portofolio — M Dicky Maulana",
  description:
    "Portofolio M Dicky Maulana: sistem operasional internal, chatbot Sigma, backend Dibajolbae, dan pengembangan aplikasi klien.",
};

const works = [
  {
    title: "Aktivitas pengembangan, 12 bulan terakhir",
    body: "Peta commit di Gitea internal selama satu tahun terakhir. Setiap kotak mewakili satu hari, dan intensitas warna menunjukkan frekuensi perubahan yang saya kirimkan.",
  },
];

export default function Portfolio() {
  return (
    <div id="portfolio" className="flex flex-col gap-8">
      <header className="max-w-reading">
        <h1 className="font-display text-4xl font-medium text-starlight sm:text-5xl">
          Portofolio
        </h1>
        <p className="mt-3 leading-relaxed text-starlight/80">
          Proyek yang saya pimpin atau kerjakan, mencakup aplikasi operasional dan solusi berbasis AI.
        </p>
      </header>

      <article className="glass rounded-sm p-6 sm:p-8">
        <h2 className="font-display text-2xl text-starlight">Sistem operasional internal</h2>
        <p className="mt-2 max-w-reading leading-relaxed text-starlight/80">
          Sistem operasional perusahaan yang saya pimpin pengembangannya. Cakupannya meliputi sinkronisasi data ke ERP, pengelolaan order, invoice checkpoint, serta modul pendukung lainnya. Sistem ini terdiri atas lebih dari 30 modul terintegrasi dan tiga aplikasi operasional. Saya juga merancang struktur basis datanya.
        </p>
      </article>

      <article className="glass overflow-hidden rounded-sm">
        <Image
          className="h-auto w-full object-cover"
          src={mdmGitea}
          alt="Heatmap aktivitas Git di Gitea"
        />
        <div className="p-6 sm:p-8">
          <h2 className="font-display text-2xl text-starlight">{works[0].title}</h2>
          <p className="mt-2 max-w-reading leading-relaxed text-starlight/80">{works[0].body}</p>
        </div>
      </article>

      <article className="glass overflow-hidden rounded-sm">
        <div className="aspect-video w-full bg-black/40">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/xzRAEXyea1k?si=9Cmuq5c_AYJ_qLb6"
            title="Demo Sigma Chatbot"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className="p-6 sm:p-8">
          <h2 className="font-display text-2xl text-starlight">Sigma Chatbot</h2>
          <p className="mt-2 max-w-reading leading-relaxed text-starlight/80">
            Chatbot untuk menjawab pertanyaan terkait layanan, rekomendasi vendor, dan estimasi biaya pengiriman. Dikembangkan dengan LangChain, OpenAI, dan Express.js.
          </p>
        </div>
      </article>

      <article className="glass rounded-sm p-6 sm:p-8">
        <h2 className="font-display text-2xl text-starlight">Dibajolbae</h2>
        <p className="mt-2 max-w-reading leading-relaxed text-starlight/80">
          Pengembangan dan pemeliharaan backend aplikasi Dibajolbae di PT Hedo Global Technology, termasuk integrasi layanan pihak ketiga.
        </p>
      </article>

      <article className="glass rounded-sm p-6 sm:p-8">
        <h2 className="font-display text-2xl text-starlight">Pengembangan aplikasi klien</h2>
        <p className="mt-2 max-w-reading leading-relaxed text-starlight/80">
          Di CV Tekno Pertiwi, saya mengembangkan aplikasi sesuai kebutuhan klien, dengan fokus pada fungsionalitas dan pengalaman pengguna.
        </p>
      </article>
    </div>
  );
}
