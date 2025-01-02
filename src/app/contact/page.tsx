import React from 'react'


export default function Contact() {
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="grid grid-cols-6 h-full w-full">
        <div className="bg-black  p-10 col-span-2 rounded-l-lg">
          <h2 className="mb-10 font-bold text-2xl text-blue-100 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">Info Kontak</h2>
          <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
            Alamat
            <span className="font-normal text-xs text-white block">Palembang, Indonesia</span>
          </p>
          <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
            No. Telpon
            <span className="font-normal text-xs text-white block">+62 896 4343 1414</span>
          </p>
          <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
            Email
            <span className="font-normal text-xs text-white block">diky.maulana88@gmail.com</span>
          </p>
          {/* <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
            Sosial Media
            <span className="font-normal text-xs text-white block">zigzagexampl.com</span>
          </p> */}

        </div>
        <div className=" bg-black bg-opacity-40 dark:bg-white dark:bg-opacity-20 p-14 col-span-4 rounded-r-lg">
          <h2 className="mb-14 font-bold text-4xl text-slate-300 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">Hubungi Saya</h2>
          <div className="grid gap-6 mb-6 grid-cols-2">
            <div className="flex flex-col">
              <input className="py-4 bg-gray-600 dark:bg-gray-400 rounded-full px-6 placeholder:text-xs" aria-placeholder="Votre nom" placeholder="Nama" />
            </div>
            <div className="flex flex-col">
              <input className="py-4 bg-gray-600 dark:bg-gray-400 rounded-full px-6 placeholder:text-xs" aria-placeholder="Votre nom" placeholder="No HP" />
            </div>
          </div>
          <div className="grid gap-6 mb-6 grid-cols-2">
            <div className="flex flex-col">
              <input className="py-4 bg-gray-600 dark:bg-gray-400 rounded-full px-6 placeholder:text-xs" aria-placeholder="Votre nom" placeholder="Email" />
            </div>
            <div className="flex flex-col">
              <input className="py-4 bg-gray-600 dark:bg-gray-400 rounded-full px-6 placeholder:text-xs" aria-placeholder="Votre nom" placeholder="Subject" />
            </div>
          </div>
          <div className="mb-6">
            <textarea className="w-full bg-gray-600 dark:bg-gray-400 rounded-2xl placeholder:text-xs px-6 py-4" placeholder="Pesan" name="" id="" rows={8}></textarea>
          </div>
          <div className="flex justify-center">
            <button className="rounded-full bg-blue-900 text-white font-bold py-4 px-6 min-w-40 hover:bg-blue-800 transition-all">Kirim</button>
          </div>
        </div>
      </div>
    </div>
  )
}