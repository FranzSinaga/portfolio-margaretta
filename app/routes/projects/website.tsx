import pip from "~/assets/projects/pip.jpeg";
import exit from "~/assets/projects/exit-management.png";
import credit from "~/assets/projects/credit-simulation.png";
import ad1gate from "~/assets/projects/ad1gate.png";
import prodcat from "~/assets/projects/prodcat.png";

export const website = [
  {
    image: pip,
    description:
      "Sistem yang dirancang untuk membantu perusahaan dalam mengelola karyawan yang berada dalam program peningkatan kinerja.",
    project: "Performance Improvement Plan (PIP)",
    role: "QA Manual",
    tools: ["Taiga", "Postman", "MySQL", "Google Sheets", "TEMAN"],
    kontribusi_utama: [
      "Mereview 15+ user story di Taiga untuk memastikan acceptance criteria lengkap dan dapat diuji.",
      "Menyusun dan menjalankan test case pada alur PIP dengan status SP1, SP2, dan SP3, termasuk skenario edge case.",
      "Melakukan pengujian API (create/update/get data PIP) menggunakan Postman, dengan validasi response dan error handling.",
      "Verifikasi dan manipulasi data di database MySQL untuk memastikan integritas data dan aliran data antar modul (mutasi employee/atasan, cuti selama proses PIP, scheduler).",
      "Menguji notifikasi reminder otomatis yang mengingatkan karyawan dan atasan untuk pengerjaan dan evaluasi PIP.",
      "Melakukan pengecekan dan pengujian dashboard progress PIP yang membantu atasan memantau perkembangan karyawan secara real-time.",
      "Melaporkan dan mengelola defect di backlog Taiga, serta melakukan retesting hingga bug terselesaikan.",
    ],
    nilai_tambah: [
      "Membantu menemukan dan memperbaiki 10+ defect kritikal sebelum tahap User Acceptance Test (UAT).",
      "Memastikan proses PIP berjalan efektif dan karyawan mendapatkan pengingat tepat waktu sehingga mengurangi keterlambatan dalam pelaksanaan.",
      "Memastikan sistem mendukung skenario mutasi karyawan/atasan dan cuti tanpa mengganggu proses PIP.",
      "Memastikan dashboard progress memberikan data yang akurat dan mudah dipahami oleh atasan sehingga memudahkan monitoring.",
    ],
  },
  {
    image: exit,
    description:
      "Arjuna Exit Management adalah sistem yang mengelola proses keluarnya karyawan dari perusahaan, baik karena resign, pensiun, atau pemutusan hubungan kerja (PHK).",
    project: "Exit Management System",
    role: "QA Manual",
    tools: ["Taiga", "Postman", "MySQL", "Google Sheets"],
    kontribusi_utama: [
      "Mereview dan memvalidasi user story di Taiga terkait seluruh proses exit karyawan (resignasi, PHK, pensiun).",
      "Menyusun dan menjalankan test case untuk resignation, exit interview, clearance checklist, dan penerbitan dokumen.",
      "Melakukan pengujian API untuk pengajuan resign, approval, update status exit, serta generate dokumen keluar.",
      "Memastikan workflow berjalan urut dari pengajuan hingga administrasi akhir, termasuk pengecekan cuti dan aset.",
      "Menguji dashboard exit untuk membantu HR dan atasan memantau progres penyelesaian proses exit secara real-time.",
      "Mengecek penerbitan otomatis dokumen seperti surat referensi kerja, surat keterangan keluar, dan perjanjian bersama sesuai status dan level karyawan.",
      "Memastikan QR code pada dokumen digital sudah sesuai dan bisa digunakan untuk verifikasi tanda tangan elektronik.",
      "Memastikan data klaim seperti BPJS, DPLK, PHK, dan Paid Back Retention muncul otomatis sesuai kebijakan yang berlaku.",
      "Melakukan pengecekan konsistensi dan integritas data antara sistem HRIS, payroll, dan legal dengan akses langsung ke database.",
      "Melaporkan bug di Taiga dan melakukan retesting hingga sistem dinyatakan siap untuk UAT.",
    ],
    nilai_tambah: [
      "Memastikan proses exit berjalan lancar dan otomatis, mengurangi keterlambatan penyelesaian hingga 40%.",
      "Mendukung keakuratan klaim dan dokumen digital, termasuk validasi QR code untuk keabsahan tanda tangan.",
      "Memastikan keterhubungan antar sistem berjalan baik dan data tetap konsisten di seluruh modul.",
    ],
  },
  {
    image: credit,
    project: "Credit Simulation & Digital Pricelist",
    description:
      "Aplikasi ini digunakan untuk melakukan simulasi kredit bagi calon pelanggan sebelum mereka mengajukan pembiayaan.",
    role: "QA Manual",
    tools: [
      "Jira",
      "Confluence",
      "Postman",
      "Swagger",
      "DBeaver",
      "Spreadsheet",
      "Microsoft Office",
    ],
    dokumen_acuan: "BRD",
    kontribusi_utama: [
      "Mereview dan menginterpretasikan dokumen BRD untuk menyusun test case detail berdasarkan kebutuhan bisnis.",
      "Melakukan validasi kalkulasi angsuran kredit berdasarkan input variabel seperti DP, tenor, suku bunga, tipe pembayaran (ADDB/ADDM), dan jenis angsuran (annuitas/flat).",
      "Menguji alur lengkap fitur Credit Simulation, mulai dari input kendaraan, area domisili, produk, hingga hasil cicilan dan biaya-biaya tambahan yang muncul otomatis.",
      "Melakukan validasi integrasi antara simulasi kredit dengan data dari Product Catalogue, untuk memastikan data harga, tipe kendaraan, dan program terupdate.",
      "Menguji fitur Digital Pricelist untuk memastikan pembuatan pricelist berdasarkan kategori, program, dan parameter dealer dapat dilakukan dengan benar.",
      "Memastikan fitur unggah logo merk dan tampilan daftar kendaraan dapat berjalan tanpa error, termasuk validasi data kendaraan seperti ID, harga, dan DP.",
      "Mengecek hasil simulasi dan pricelist dapat di-generate, disimpan, dan dibagikan tanpa kehilangan data.",
      "Melakukan pengecekan data menggunakan DBeaver untuk validasi kondisi tertentu dan simulasi skenario edge-case.",
      "Menguji endpoint API (via Postman & Swagger) untuk memastikan semua kalkulasi dan integrasi backend berfungsi sesuai logika BRD.",
      "Melaporkan bug di Jira dan melakukan retesting terhadap perbaikan hingga fitur dinyatakan layak untuk UAT.",
    ],
    nilai_tambah: [
      "Menjamin hasil simulasi kredit akurat mendukung kepercayaan pelanggan dalam pengambilan keputusan pembiayaan.",
      "Meningkatkan efisiensi tim sales dan marketing dalam menyiapkan pricelist digital yang cepat dan sesuai parameter pasar.",
      "Mendukung proses pengujian berbasis dokumen BRD untuk menjembatani kebutuhan bisnis dan implementasi teknis.",
    ],
  },

  {
    image: prodcat,
    description:
      "Aplikasi ini digunakan untuk mengelola dan menampilkan berbagai produk pembiayaan yang ditawarkan oleh ADIRA Finance.",
    project: "Product Catalog",
    role: "QA Manual",
    tools: [
      "Jira",
      "Postman",
      "Swagger",
      "DBeaver",
      "Spreadsheet",
      "Microsoft Office",
      "Confluence",
    ],
    kontribusi_utama: [
      "Review user story dan susun test case untuk fitur manajemen dan segmentasi produk pembiayaan.",
      "Uji API dan alur integrasi dengan sistem simulasi kredit serta modul approval internal.",
      "Validasi tampilan, filtering, dan struktur data katalog untuk memudahkan pengelolaan produk oleh tim internal.",
      "Cek data langsung ke database untuk memastikan akurasi dan integritas lintas sistem.",
      "Laporkan bug dan lakukan retesting hingga sistem siap UAT.",
    ],
    nilai_tambah: [
      "Mempercepat proses peluncuran produk baru dengan sistem yang stabil dan bebas error.",
      "Mengurangi kesalahan input produk melalui pengujian menyeluruh dan aturan bisnis yang jelas.",
      "Mendukung tim produk bekerja lebih efisien tanpa ketergantungan pada tim teknis.",
    ],
  },
  {
    image: ad1gate,
    description:
      "Aplikasi ini digunakan untuk melakukan simulasi kredit bagi calon pelanggan sebelum mereka mengajukan pembiayaan.",
    project: "AD1Gate (Portal Gateway Internal)",
    role: "QA Manual",
    tools: [
      "Jira",
      "Postman",
      "Swagger",
      "DBeaver",
      "Google Sheets",
      "Confluence",
    ],
    kontribusi_utama: [
      "Menyusun dan menjalankan test case untuk fitur ganti password, lupa password, dan pengamanan login, termasuk aturan captcha, batas percobaan gagal, serta masa berlaku password.",
      "Menguji modul notifikasi saat login (misalnya informasi penutupan sistem saat hari libur nasional seperti Lebaran), termasuk skenario waktu tampil dan user flow-nya.",
      "Memastikan proses reset password berjalan aman dan sesuai kebijakan IT security, termasuk validasi email, OTP, dan reset token.",
      "Melakukan pengujian fitur tracking order untuk user AXI, memastikan data order muncul lengkap dan real-time sesuai status terkini.",
      "Validasi integrasi API untuk login, reset password, serta pelacakan order antar sistem internal dan eksternal.",
      "Melaporkan bug di Jira dan melakukan regression testing sampai fitur siap digunakan tim pengguna internal.",
    ],
    nilai_tambah: [
      "Memastikan fitur login dan keamanan akun berjalan sesuai standar keamanan perusahaan, mengurangi risiko akses tidak sah.",
      "Mendukung kenyamanan user saat momen khusus (seperti Lebaran) dengan notifikasi login yang tepat dan tidak mengganggu alur kerja.",
      "Membantu user internal (AXI) memantau order dengan lebih mudah dan cepat melalui fitur tracking yang akurat dan stabil.",
    ],
  },
];
