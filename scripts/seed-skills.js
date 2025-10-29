const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const skillsData = [
  {
    categories: ["frontend"],
    name: "HTML5",
    experience: 4,
    level: "expert",
    percentage: 95,
    icon: "FaHtml5",
    color: "text-orange-600",
    displayOrder: 1,
  },
  {
    categories: ["frontend"],
    name: "CSS3",
    experience: 4,
    level: "expert",
    percentage: 90,
    icon: "FaCss3Alt",
    color: "text-blue-500",
    displayOrder: 2,
  },
  {
    categories: ["frontend", "backend"],
    name: "JavaScript",
    experience: 4,
    level: "expert",
    percentage: 90,
    icon: "FaJsSquare",
    color: "text-yellow-400",
    displayOrder: 3,
  },
  {
    categories: ["frontend", "backend"],
    name: "TypeScript",
    experience: 2,
    level: "intermediate",
    percentage: 70,
    icon: "SiTypescript",
    color: "text-blue-600",
    displayOrder: 4,
  },
  {
    categories: ["frontend"],
    name: "React",
    experience: 4,
    level: "expert",
    percentage: 90,
    icon: "FaReact",
    color: "text-cyan-400",
    displayOrder: 5,
  },
  {
    categories: ["frontend", "backend"],
    name: "Next.js",
    experience: 3,
    level: "expert",
    percentage: 85,
    icon: "SiNextdotjs",
    color: "text-black",
    displayOrder: 6,
  },
  {
    categories: ["frontend"],
    name: "Tailwind CSS",
    experience: 3,
    level: "expert",
    percentage: 85,
    icon: "SiTailwindcss",
    color: "text-cyan-500",
    displayOrder: 7,
  },
  {
    categories: ["frontend"],
    name: "Bootstrap",
    experience: 3,
    level: "advanced",
    percentage: 80,
    icon: "FaBootstrap",
    color: "text-purple-600",
    displayOrder: 8,
  },
  {
    categories: ["backend"],
    name: "Java & OOP",
    experience: 2,
    level: "intermediate",
    percentage: 70,
    icon: "FaJava",
    color: "text-red-600",
    displayOrder: 9,
  },
  {
    categories: ["backend"],
    name: "Node.js",
    experience: 2,
    level: "intermediate",
    percentage: 75,
    icon: "FaNodeJs",
    color: "text-green-600",
    displayOrder: 10,
  },
  {
    categories: ["database"],
    name: "MongoDB",
    experience: 2,
    level: "intermediate",
    percentage: 70,
    icon: "SiMongodb",
    color: "text-green-500",
    displayOrder: 11,
  },
  {
    categories: ["database"],
    name: "MySQL",
    experience: 2,
    level: "intermediate",
    percentage: 75,
    icon: "SiMysql",
    color: "text-blue-600",
    displayOrder: 12,
  },
  {
    categories: ["tools"],
    name: "Git",
    experience: 3,
    level: "intermediate",
    percentage: 80,
    icon: "FaGitAlt",
    color: "text-orange-600",
    displayOrder: 13,
  },
  {
    categories: ["tools"],
    name: "GitHub",
    experience: 3,
    level: "advanced",
    percentage: 85,
    icon: "FaGithub",
    color: "text-gray-500",
    displayOrder: 14,
  },
  {
    categories: ["tools"],
    name: "VS Code",
    experience: 4,
    level: "advanced",
    percentage: 90,
    icon: "FaLaptopCode",
    color: "text-blue-400",
    displayOrder: 15,
  },
  {
    categories: ["tools"],
    name: "IntelliJ IDEA",
    experience: 1,
    level: "advanced",
    percentage: 75,
    icon: "FaLaptopCode",
    color: "text-blue-400",
    displayOrder: 16,
  },
  {
    categories: ["backend"],
    name: "Express.js",
    experience: 2,
    level: "intermediate",
    percentage: 75,
    icon: "SiExpress",
    color: "text-gray-500",
    displayOrder: 18,
  },
];

async function seedSkills() {
  await prisma.skill.deleteMany({});

  let successCount = 0;

  for (const data of skillsData) {
    try {
      await prisma.skill.create({
        data: data,
      });
      successCount++;
    } catch (error) {}
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
