"use client";

import { FormEvent } from "react";

export default function ContactForm() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "Pesan dari situs portofolio");
    const message = String(data.get("message") ?? "");
    const body = `Nama: ${name}\nTelepon: ${phone}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:diky.maulana88@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="mt-8 space-y-5" onSubmit={onSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-starlight/80">
          Nama
          <input className="field mt-2" name="name" autoComplete="name" required />
        </label>
        <label className="block text-sm text-starlight/80">
          Telepon
          <input className="field mt-2" name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-starlight/80">
          Email
          <input className="field mt-2" name="email" type="email" autoComplete="email" required />
        </label>
        <label className="block text-sm text-starlight/80">
          Subjek
          <input className="field mt-2" name="subject" placeholder="Keperluan atau topik diskusi" required />
        </label>
      </div>
      <label className="block text-sm text-starlight/80">
        Pesan
        <textarea
          className="field mt-2 min-h-40"
          name="message"
          placeholder="Jelaskan keperluan atau topik yang ingin dibahas."
          required
        />
      </label>
      <button
        type="submit"
        className="bg-dust px-5 py-2.5 text-sm font-medium text-void hover:bg-starlight"
      >
        Kirim melalui email
      </button>
      <p className="text-sm text-dust">Pengiriman akan membuka aplikasi email Anda.</p>
    </form>
  );
}
