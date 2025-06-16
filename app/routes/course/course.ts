import swag from "~/assets/course-exploration/swag.png";
import orange from "~/assets/course-exploration/orange.png";
import demo_qa from "~/assets/course-exploration/demo-qa.png";

export const course = [
  {
    title: "AfterOffice Academy",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D560BAQFmUyE_LaFBjw/company-logo_200_200/company-logo_200_200/0/1728277618083?e=1753315200&v=beta&t=5imwapRnZmY_QOR5I-GKYkuj3Ag8XITbJwEV5ypsgzM",
    description:
      "Saat ini sedang mengikuti program Bootcamp Intensive QA Automation Katalon Studio selama 7 minggu melalui Learning Management System (LMS) Rakamin Academy. Program ini untuk membantu QA Manual beralih ke QA Automation, dengan materi mencakup fundamental automation testing, web & API automation, serta integrasi CI/CD dan reporting.",
    types: "Kursus Online",
    periode: "April 2025 - Sekarang",
    links: [
      {
        name: "Tugas 1 - Katalon Cura",
        url: "https://github.com/Margaretha05/katalon-cura",
      },
      {
        name: "Tugas Akhir - Katalon Project",
        url: "https://github.com/Margaretha05/katalon-demo-qa",
      },
    ],
  },
  {
    title: "Kominfo",
    imageUrl:
      "https://media.suara.com/pictures/653x366/2023/02/07/65406-logo-digitalent.webp",
    description:
      "Kelas berlangsung selama 6 minggu dan memanfaatkan Sistem Manajemen Pembelajaran (LMS) Rakamin Academy.",
    types: "Sertifikasi",
    periode: "September - Oktober 2023",
    links: [
      {
        name: "Automation Testing Cucumber.pdf",
        url: "https://drive.google.com/file/d/1nsxElw1ssr_Q0slEMaTb75sZY8cjPJON/view?usp=sharing",
      },
      {
        name: "Bug Report",
        url: "https://docs.google.com/spreadsheets/d/1HkXSEKPEVVkniFSIxEpsYkGPBZrpMra9/edit?usp=sharing&ouid=114299747387650871482&rtpof=true&sd=true",
      },
      {
        name: "Dokumentasi API Postman",
        url: "https://drive.google.com/file/d/1Gdd9WXTVGuwEXAoW-wdqVqeI2CShAjDZ/view?usp=drive_link",
      },
      {
        name: "Gherkin Syntax",
        url: "https://docs.google.com/spreadsheets/d/1rS3TfC7ooMUOvFz3YmburGmY9RlQgcOB/edit?usp=drive_link&ouid=114299747387650871482&rtpof=true&sd=true",
      },
      {
        name: "Test Scenario",
        url: "https://docs.google.com/spreadsheets/d/1qhi7vP9H7yo_YQ54PI2DP7caSATQ6u98/edit?usp=drive_link&ouid=114299747387650871482&rtpof=true&sd=true",
      },
    ],
  },
  {
    title: "Jubelio",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rmAl1IvXiJD6h32MgzQ63-WTJvw-hpcKBw&s",
    description:
      "Program ini berlangsung selama 4 minggu dan memanfaatkan Sistem Manajemen Pembelajaran (LMS) Rakamin Academy.",
    types: "Kursus Online",
    periode: "Batch Oktober 2023",
    links: [
      {
        name: "FinalTask Jubelio QA",
        url: "https://docs.google.com/presentation/d/1eY-Vxud03qbqF9d5_KDf2nsegxUBHHUx/edit?usp=drive_link&ouid=114299747387650871482&rtpof=true&sd=true",
      },
    ],
  },
  {
    title: "Swag Labs - QA Automation Project",
    imageUrl: swag,
    description:
      "Project ini menggunakan situs Swag Labs sebagai studi kasus untuk end-to-end testing, termasuk automation testing menggunakan Katalon, penulisan test case & bug report.",
    types: "Eksplorasi",
    periode: "",
    redirect: "https://saucedemo.com",
    links: [
      {
        name: "Test Case & Scenario",
        url: "https://docs.google.com/spreadsheets/d/1Cj9P4UwZU3iamqNSwVCE0aedYFySDsIT9BNWnqgbr8k/edit?gid=0#gid=0",
      },
      {
        name: "Bug Report",
        url: "https://docs.google.com/spreadsheets/d/1yrSAvQDcPljnXQF3Fy9_HGmCxn4F9p-1BtSVDZkTdkw/edit?gid=0#gid=0",
      },
      {
        name: "Automation Script (GitHub)",
        url: "https://github.com/Margaretha05/katalon-swag-labs",
      },
      {
        name: " Test Summary Report",
        url: "https://docs.google.com/spreadsheets/d/10ool5Hq76MU9Q4y0obexn2dEKEqaoLJI_eicQbuUV2M/edit?gid=0#gid=0",
      },
    ],
  },
  {
    title: "Orange HRM",
    imageUrl: orange,
    description:
      "Project ini menggunakan situs Orange HRM sebagai studi kasus untuk end-to-end testing, termasuk automation testing menggunakan Katalon, penulisan test case & bug report.",
    types: "Eksplorasi",
    periode: "",
    redirect: "https://opensource-demo.orangehrmlive.com/",
    links: [
      {
        name: "Automation Script (Github)",
        url: "https://github.com/Margaretha05/TestingOrangeHRM",
      },
    ],
  },
  {
    title: "Tugas Akhir Project Katalon",
    imageUrl: demo_qa,
    description:
      "Project ini menggunakan situs Demo QA sebagai studi kasus untuk end-to-end testing, termasuk automation testing menggunakan Katalon, penulisan test case & bug report.",
    types: "Eksplorasi",
    periode: "",
    redirect: "https://demoqa.com/",
    links: [
      {
        name: "Automation Script (Github)",
        url: "https://github.com/Margaretha05/katalon-demo-qa",
      },
    ],
  },
];
