import SkillCardMobile from "./SkillCardMobile";
import SkillCardDesktop from "./SkillCardDesktop";

export default function SkillCard({ skill, index, isMobile = false, translations }) {
 if (isMobile) {
  return <SkillCardMobile skill={skill} index={index} translations={translations} />;
 }
 return <SkillCardDesktop skill={skill} index={index} translations={translations} />;
}