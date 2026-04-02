import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const skillsData = [
 {
  categories: ["frontend"],
  name: "HTML5",
  experience: 5,
  icon: "FaHtml5",
  color: "text-orange-600",
  displayOrder: 1,
 },
 {
  categories: ["frontend"],
  name: "CSS3",
  experience: 5,
  icon: "FaCss3Alt",
  color: "text-blue-500",
  displayOrder: 2,
 },
 {
  categories: ["frontend", "backend"],
  name: "JavaScript",
  experience: 5,
  icon: "FaJsSquare",
  color: "text-yellow-400",
  displayOrder: 3,
 },
 {
  categories: ["frontend", "backend"],
  name: "TypeScript",
  experience: 4,
  icon: "SiTypescript",
  color: "text-blue-600",
  displayOrder: 4,
 },
 {
  categories: ["frontend"],
  name: "React",
  experience: 5,
  icon: "FaReact",
  color: "text-cyan-400",
  displayOrder: 5,
 },
 {
  categories: ["frontend", "backend"],
  name: "Next.js",
  experience: 5,
  icon: "SiNextdotjs",
  color: "text-adaptive-icon",
  displayOrder: 6,
 },
 {
  categories: ["frontend"],
  name: "Tailwind CSS",
  experience: 5,
  icon: "SiTailwindcss",
  color: "text-cyan-500",
  displayOrder: 7,
 },
 {
  categories: ["frontend"],
  name: "Bootstrap",
  experience: 5,
  icon: "FaBootstrap",
  color: "text-purple-600",
  displayOrder: 8,
 },
 {
  categories: ["backend"],
  name: "Java & OOP",
  experience: 2,
  icon: "FaJava",
  color: "text-red-600",
  displayOrder: 9,
 },
 {
  categories: ["backend"],
  name: "Node.js",
  experience: 4,
  icon: "FaNodeJs",
  color: "text-green-600",
  displayOrder: 10,
 },
 {
  categories: ["backend"],
  name: "Express.js",
  experience: 4,
  icon: "SiExpress",
  color: "text-adaptive-icon",
  displayOrder: 11,
 },
 {
  categories: ["database"],
  name: "SQL & NoSQL",
  experience: 4,
  icon: "FaDatabase",
  color: "text-green-500",
  displayOrder: 12,
 },
 {
  categories: ["database"],
  name: "MongoDB",
  experience: 4,
  icon: "SiMongodb",
  color: "text-green-500",
  displayOrder: 13,
 },
 {
  categories: ["database"],
  name: "MySQL",
  experience: 4,
  icon: "SiMysql",
  color: "text-blue-600",
  displayOrder: 14,
 },
 {
  categories: ["database"],
  name: "PostgreSQL",
  experience: 4,
  icon: "SiPostgresql",
  color: "text-blue-600",
  displayOrder: 15,
 },
 {
  categories: ["database"],
  name: "Prisma",
  experience: 4,
  icon: "SiPrisma",
  color: "text-indigo-600",
  displayOrder: 16,
 },
 {
  categories: ["tools"],
  name: "Visual Studio Code",
  experience: 5,
  icon: "DiVisualstudio",
  color: "text-blue-500",
  displayOrder: 17,
 },
 {
  categories: ["tools"],
  name: "Cursor",
  experience: 5,
  icon: "BsCursorFill",
  color: "text-adaptive-icon",
  displayOrder: 18,
 },
 {
  categories: ["tools"],
  name: "Git",
  experience: 5,
  icon: "FaGitAlt",
  color: "text-orange-600",
  displayOrder: 19,
 },
 {
  categories: ["tools"],
  name: "GitHub",
  experience: 5,
  icon: "FaGithub",
  color: "text-adaptive-icon",
  displayOrder: 20,
 },
 {
  categories: ["tools"],
  name: "Vercel",
  experience: 4,
  icon: "SiVercel",
  color: "text-adaptive-icon",
  displayOrder: 21,
 },
 {
  categories: ["tools"],
  name: "Postman",
  experience: 4,
  icon: "SiPostman",
  color: "text-orange-500",
  displayOrder: 22,
 },
 {
  categories: ["tools"],
  name: "Claude AI",
  experience: 3,
  icon: "SiClaude",
  color: "text-orange-400",
  displayOrder: 23,
 },
 {
  categories: ["tools"],
  name: "ChatGPT",
  experience: 3,
  icon: "SiOpenai",
  color: "text-adaptive-icon",
  displayOrder: 24,
 },
 {
  categories: ["backend"],
  name: "REST API",
  experience: 5,
  icon: "TbApi",
  color: "text-green-500",
  displayOrder: 25,
 },
 {
  categories: ["backend"],
  name: "İyzico",
  experience: 3,
  icon: "SiStripe",
  color: "text-purple-500",
  displayOrder: 26,
 },
];

async function seedSkills() {
 await prisma.skill.deleteMany({});
 let successCount = 0;
 let errorCount = 0;

 for (const data of skillsData) {
  try {
   await prisma.skill.create({
    data: data,
   });
   successCount++;
  } catch (error) {
   errorCount++;
  }
 }
}

async function main() {
 try {
  await seedSkills();
 } catch (e) {
  process.exit(1);
 } finally {
  await prisma.$disconnect();
 }
}

main();
