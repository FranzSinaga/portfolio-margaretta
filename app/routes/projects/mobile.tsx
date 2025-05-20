import sales from "~/assets/projects/adira-sales.png";
import partner from "~/assets/projects/adira-partner.png";

export const mobile = [
  {
    description:
      "Aplikasi yang dirancang khusus untuk tim sales ADIRA Finance dalam mengelola dan memantau aktivitas penjualan pembiayaan.",
    image: sales,
    project: "AD1Sales (Aplikasi Sales Officer)",
    role: "QA Manual",
    tools: ["Jira", "Postman", "Google Sheets", "Swagger", "Confluence"],
    kontribusi_utama: [
      "Menyusun dan menjalankan test case untuk seluruh proses penjualan, mulai dari pencatatan prospek hingga pengajuan kredit.",
      "Melakukan pengujian fitur simulasi kredit untuk memastikan hasil perhitungan akurat dan sesuai produk yang dipilih.",
      "Mengecek alur pengajuan dan approval kredit agar berjalan real-time tanpa gangguan dari sisi aplikasi.",
      "Memastikan tampilan status aplikasi dan notifikasi follow-up muncul sesuai kondisi terkini.",
      "Uji dashboard performa sales untuk memastikan data target dan pencapaian tampil dengan benar.",
      "Melakukan testing di perangkat Android untuk memastikan performa stabil di lapangan.",
    ],
    nilai_tambah: [
      "Membantu sales officer bekerja lebih cepat dan efisien tanpa hambatan teknis saat melayani pelanggan.",
      "Memastikan data pelanggan, simulasi, dan pengajuan tampil akurat sehingga proses penjualan lebih lancar.",
      "Mendukung pencapaian target sales dengan aplikasi yang stabil dan siap digunakan di lapangan.",
    ],
  },
  {
    description:
      "Aplikasi yang digunakan oleh mitra ADIRA Finance, seperti dealer kendaraan, toko elektronik, atau agen pembiayaan, untuk mempermudah pengelolaan kerja sama dengan ADIRA",
    image: partner,
    project: "AD1Partner (Aplikasi Mobile Rekanan)",
    role: "QA Manual",
    tools: ["Jira", "Postman", "Google Sheets", "Swagger", "Confluence"],
    kontribusi_utama: [
      "Melakukan pengujian end-to-end dari proses input order oleh partner hingga tahap survey dan billing.",
      "Memvalidasi akurasi data hasil OCR dari dokumen yang diunggah untuk memastikan auto-fill berjalan sesuai.",
      "Menyusun test case untuk alur pengajuan, verifikasi, dan approval, serta integrasi antar modul backend.",
      "Melakukan pengecekan konsistensi data antar aplikasi mobile dan sistem utama melalui API testing.",
      "Uji performa aplikasi di perangkat mobile untuk memastikan penggunaan stabil dan responsif.",
      "Melaporkan bug dan melakukan regression testing hingga aplikasi siap digunakan oleh partner eksternal.",
    ],
    nilai_tambah: [
      "Mengurangi kesalahan input dengan validasi otomatis dari hasil scan OCR.",
      "Memastikan proses bisnis partner dari order hingga tagihan berjalan lancar tanpa kendala teknis.",
      "Meningkatkan kepercayaan partner melalui aplikasi yang cepat, stabil, dan mudah digunakan.",
    ],
  },
];
