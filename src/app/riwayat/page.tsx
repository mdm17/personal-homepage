import type { Metadata } from "next";
import { courses, education, organization, roles, skills } from "../_data/cv";

export const metadata: Metadata = {
  title: "Riwayat — M Dicky Maulana",
  description:
    "Riwayat profesional M Dicky Maulana: pengalaman kerja, pendidikan di Politeknik Negeri Sriwijaya, organisasi, dan keahlian.",
};

export default function Riwayat() {
  return (
    <div className="flex flex-col gap-10">
      <header className="max-w-reading">
        <h1 className="font-display text-4xl font-medium text-starlight sm:text-5xl">
          Riwayat
        </h1>
        <p className="mt-3 leading-relaxed text-starlight/80">
          Pengalaman profesional, pendidikan, dan keahlian.
        </p>
      </header>

      <section>
        <h2 className="font-display text-2xl text-starlight">Pengalaman</h2>
        <ol className="mt-6 border-l border-starlight/20">
          {roles.map((role) => (
            <li key={role.org} className="relative pb-10 pl-6 last:pb-0">
              <span className="absolute -left-1 top-2 h-2 w-2 rounded-full bg-dust" aria-hidden="true" />
              <p className="text-sm text-dust">{role.dates}</p>
              <h3 className="mt-1 font-display text-2xl text-starlight">{role.title}</h3>
              <p className="mt-1 text-starlight/70">
                {role.org} · {role.place}
              </p>
              <p className="mt-3 max-w-reading leading-relaxed text-starlight/80">{role.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="glass rounded-sm p-6 sm:p-8">
        <h2 className="font-display text-2xl text-starlight">Pendidikan</h2>
        <p className="mt-4 text-sm text-dust">{education.dates}</p>
        <h3 className="mt-1 font-display text-2xl text-starlight">{education.degree}</h3>
        <p className="mt-1 text-starlight/70">
          {education.school} · {education.place}
        </p>
        <p className="mt-3 text-starlight/80">IPK {education.gpa}</p>
      </section>

      <section className="glass rounded-sm p-6 sm:p-8">
        <h2 className="font-display text-2xl text-starlight">Organisasi</h2>
        <p className="mt-4 text-sm text-dust">{organization.dates}</p>
        <h3 className="mt-1 font-display text-2xl text-starlight">{organization.title}</h3>
        <p className="mt-1 text-starlight/70">
          {organization.org} · {organization.place}
        </p>
        <p className="mt-3 max-w-reading leading-relaxed text-starlight/80">{organization.body}</p>
      </section>

      <section>
        <h2 className="font-display text-2xl text-starlight">Keahlian</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li key={skill} className="border border-starlight/20 px-3 py-1.5 text-sm text-starlight/90">
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl text-starlight">Sertifikasi dan pencapaian</h2>
        <ul className="mt-4 max-w-reading divide-y divide-starlight/15">
          {courses.map((course) => (
            <li key={course.name} className="flex gap-4 py-3 text-starlight/80">
              <span className="w-12 shrink-0 text-dust">{course.year}</span>
              <span>{course.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
