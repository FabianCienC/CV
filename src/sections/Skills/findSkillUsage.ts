import type { CV } from '../../types/cv';

export interface SkillUsage {
  label: string;
  context: string;
}

/** Lists the roles and projects whose tags mention the given skill. */
export function findSkillUsage(cv: CV, skill: string): SkillUsage[] {
  const roles = cv.experience
    .filter((role) => role.tags.includes(skill))
    .map((role) => ({ label: role.title, context: role.organization }));

  const projects = cv.projects
    .filter((project) => project.tags.includes(skill))
    .map((project) => ({ label: project.name, context: project.kind }));

  return [...roles, ...projects];
}
