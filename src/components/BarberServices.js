function BarberServices() {
  return (
    <section className="max-w-xl">
      <h2 className="text-center text-3xl py-4 text-red-800">Layanan Barber</h2>
      <ul className="max-w-6xl grid grid-cols-1 grid-rows-1 gap-2 text-center mx-auto">
        <div className="text-left">
          <div className="flex items-end">
            <h2 className="font-bold min-w-fit">Potong & Gaya Signature</h2>
            <div className="h-px w-full mb-1 bg-neutral-400"></div>
            <p>Rp675.000+</p>
          </div>
          <p>Kunjungan pertama atau sudah lebih dari 5 minggu? Silakan pesan layanan ini!</p>
        </div>

        <div className="text-left">
          <div className="flex items-end">
            <h2 className="font-bold min-w-fit">Potong Rutin</h2>
            <div className="h-px w-full mb-1 bg-neutral-400"></div>
            <p>Rp525.000+</p>
          </div>
          <p>Layanan 30 menit hanya dasar saja. Untuk kunjungan setiap 5 minggu atau kurang.</p>
        </div>

        <div className="text-left">
          <div className="flex items-end">
            <h2 className="font-bold min-w-fit">Potong Rambut - Anak 13 Tahun ke Bawah</h2>
            <div className="h-px w-full mb-1 bg-neutral-400"></div>
            <p>Rp465.000+</p>
          </div>
          <p>Gaya potongan barber (gunting pendek dan clipper).</p>
        </div>

        <div className="text-left">
          <div className="flex items-end">
            <h2 className="font-bold min-w-fit">Fade/Desain Lanjutan</h2>
            <div className="h-px w-full mb-1 bg-neutral-400"></div>
            <p>Rp975.000+</p>
          </div>
          <p>Rp15.000/menit</p>
        </div>

        <div className="text-left">
          <div className="flex items-end">
            <h2 className="font-bold min-w-fit">Rapih Jenggot</h2>
            <div className="h-px w-full mb-1 bg-neutral-400"></div>
            <p>Rp330.000+</p>
          </div>
        </div>

        <div className="text-left">
          <div className="flex items-end">
            <h2 className="font-bold min-w-fit">Perawatan Kulit Kepala</h2>
            <div className="h-px w-full mb-1 bg-neutral-400"></div>
            <p>Rp330.000+</p>
          </div>
        </div>
      </ul>
    </section>
  );
}

export default BarberServices;
