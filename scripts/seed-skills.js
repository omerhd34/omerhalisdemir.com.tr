const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const skillsData = [
 {
  categories: ["frontend"],
  name: "HTML5",
  experience: 4,
  icon: "FaHtml5",
  color: "text-orange-600",
  displayOrder: 1,
 },
 {
  categories: ["frontend"],
  name: "CSS3",
  experience: 4,
  icon: "FaCss3Alt",
  color: "text-blue-500",
  displayOrder: 2,
 },
 {
  categories: ["frontend", "backend"],
  name: "JavaScript",
  experience: 4,
  icon: "FaJsSquare",
  color: "text-yellow-400",
  displayOrder: 3,
 },
 {
  categories: ["frontend", "backend"],
  name: "TypeScript",
  experience: 3,
  icon: "SiTypescript",
  color: "text-blue-600",
  displayOrder: 4,
 },
 {
  categories: ["frontend"],
  name: "React",
  experience: 4,
  icon: "FaReact",
  color: "text-cyan-400",
  displayOrder: 5,
 },
 {
  categories: ["frontend", "backend"],
  name: "Next.js",
  experience: 4,
  icon: "SiNextdotjs",
  color: "text-white",
  displayOrder: 6,
 },
 {
  categories: ["frontend"],
  name: "Tailwind CSS",
  experience: 4,
  icon: "SiTailwindcss",
  color: "text-cyan-500",
  displayOrder: 7,
 },
 {
  categories: ["frontend"],
  name: "Bootstrap",
  experience: 4,
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
  experience: 3,
  icon: "FaNodeJs",
  color: "text-green-600",
  displayOrder: 10,
 },
 {
  categories: ["database"],
  name: "MongoDB",
  experience: 3,
  icon: "SiMongodb",
  color: "text-green-500",
  displayOrder: 11,
 },
 {
  categories: ["database"],
  name: "MySQL",
  experience: 3,
  icon: "SiMysql",
  color: "text-blue-600",
  displayOrder: 12,
 },
 {
  categories: ["tools"],
  name: "Git",
  experience: 4,
  icon: "FaGitAlt",
  color: "text-orange-600",
  displayOrder: 13,
 },
 {
  categories: ["tools"],
  name: "GitHub",
  experience: 4,
  icon: "FaGithub",
  color: "text-white",
  displayOrder: 14,
 },
 {
  categories: ["database"],
  name: "PostgreSQL",
  experience: 3,
  icon: "SiPostgresql",
  color: "text-blue-600",
  displayOrder: 15,
 },
 {
  categories: ["backend"],
  name: "Express.js",
  experience: 3,
  icon: "SiExpress",
  color: "text-white",
  displayOrder: 16,
 },
 {
  categories: ["database"],
  name: "Prisma",
  experience: 3,
  icon: "SiPrisma",
  color: "text-indigo-600",
  displayOrder: 17,
 },
 {
  categories: ["tools"],
  name: "Visual Studio Code",
  experience: 5,
  icon: "DiVisualstudio",
  color: "text-blue-500",
  displayOrder: 18,
 },
 {
  categories: ["tools"],
  name: "Cursor",
  experience: 3,
  icon: "BsCursorFill",
  color: "text-white",
  displayOrder: 19,
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
