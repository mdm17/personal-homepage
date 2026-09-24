import type { Metadata } from "next";
import ContactForm from "../_component/ContactForm";
import { profile } from "../_data/cv";

export const metadata: Metadata = {
  title: "Kontak — M Dicky Maulana",
  description:
    "Kontak M Dicky Maulana, pengembang perangkat lunak full-stack di Palembang.",
};

export default function Contact() {
  return (
    <div className="glass overflow-hidden rounded-sm">
      <aside className="border-b border-starlight/15 p-8">
        <h1 className="font-display text-3xl text-starlight">Kontak</h1>
        <p className="mt-3 max-w-reading leading-relaxed text-starlight/80">
          Silakan menghubungi saya untuk diskusi profesional atau kerja sama. Saya akan membalas melalui email.
        </p>
        <dl className="mt-6 grid gap-6 text-sm sm:grid-cols-2">
          <div className="sm:col-span-2">
            <dt className="text-dust">Alamat</dt>
            <dd className="mt-1 text-starlight">{profile.address}</dd>
          </div>
          <div>
            <dt className="text-dust">Telepon</dt>
            <dd className="mt-1">
              <a className="text-starlight underline decoration-starlight/30 underline-offset-4" href={profile.phoneHref}>
                {profile.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-dust">Email</dt>
            <dd className="mt-1">
              <a className="text-starlight underline decoration-starlight/30 underline-offset-4" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-dust">LinkedIn</dt>
            <dd className="mt-1">
              <a className="text-starlight underline decoration-starlight/30 underline-offset-4" href={profile.linkedin} target="_blank">
                linkedin.com/in/mdm-1707
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-dust">CV</dt>
            <dd className="mt-1">
              <a className="text-starlight underline decoration-starlight/30 underline-offset-4" href={profile.cvHref}>
                Unduh curriculum vitae
              </a>
            </dd>
          </div>
        </dl>
      </aside>
      <div className="p-8">
        <h2 className="font-display text-3xl text-starlight">Kirim pesan</h2>
        <p className="mt-3 max-w-reading leading-relaxed text-starlight/80">
          Lengkapi nama dan keperluan Anda.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
