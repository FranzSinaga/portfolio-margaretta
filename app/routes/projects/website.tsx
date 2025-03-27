import pip from "~/assets/projects/pip.jpeg";
import exit from "~/assets/projects/exit-management.png";

export const website = [
  {
    title: "Performance Improvement Plan",
    description:
      "Sistem yang dirancang untuk membantu perusahaan dalam mengelola karyawan yang berada dalam program peningkatan kinerja. ",
    image: pip,
    detail: [
      {
        highlight: "Identifikasi Karyawan",
        description:
          "Memilih karyawan yang perlu mengikuti program PIP berdasarkan evaluasi kinerja.",
      },
      {
        highlight: "Penetapan Tujuan",
        description:
          "Menetapkan target dan metrik yang harus dicapai oleh karyawan dalam jangka waktu tertentu.",
      },
      {
        highlight: "Monitoring & Evaluasi",
        description:
          "Melacak perkembangan karyawan selama PIP, mencatat perbaikan, serta memberikan umpan balik.",
      },
      {
        highlight: "Dokumentasi & Laporan",
        description:
          "Menyimpan seluruh riwayat PIP, termasuk hasil evaluasi dan rekomendasi selanjutnya.",
      },
    ],
    tech: "TEMAN (Management Tools CIMB), Taiga, Figma, Spreadsheet, Microsoft Excel, Microsoft Word, Postman, DBeaver",
  },
  {
    title: "Exit Management",
    description:
      "Arjuna Exit Management adalah sistem yang mengelola proses keluarnya karyawan dari perusahaan, baik karena resign, pensiun, atau pemutusan hubungan kerja (PHK). ",
    image: exit,
    detail: [
      {
        highlight: "Resignation Request & Approval",
        description:
          "Memfasilitasi pengajuan resign serta persetujuan dari atasan.",
      },
      {
        highlight: "Exit Interview & Feedback",
        description:
          "Merekam alasan keluar karyawan dan mendapatkan wawasan untuk perbaikan organisasi.",
      },
      {
        highlight: "Asset & Clearance Checklist",
        description:
          "Memastikan pengembalian aset perusahaan, penyelesaian dokumen, dan administrasi akhir.",
      },
      {
        highlight: "Final Settlement & Documentation",
        description:
          "Menghitung hak finansial terakhir karyawan dan menyediakan dokumen resmi seperti surat pengalaman kerja.",
      },
    ],
    tech: "Jira, Spreadsheet, Microsoft Office, Postman, Swagger, DBeaver, Confluence, SQL Server Management Studio",
  },
];
