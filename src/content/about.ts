import type { Value, TeamMember } from "../types";

export const STORY = {
  headline: "Same caliber work. Way less red tape.",
  body: [
    "I'm Jzon. I've spent years building software at enterprise scale — distributed systems, cloud infrastructure, the kind of projects that take a year to plan and another to ship. Good work, but a lot of process wrapped around it.",
    "Small and mid-size businesses have the same problems — brittle workflows, software that made sense in 2012, manual processes held together by tribal knowledge — without the departments to throw at them. Usually it's a spreadsheet, a deadline, and one person quietly becoming load-bearing.",
    "Stackbyte exists to close that gap. You get serious engineering without the six-month procurement process, the 200-page statement of work, or the consultant who vanishes after launch.",
    "We roll different because we have to. And honestly, because it is more fun this way.",
  ],
};

export const VALUES: Value[] = [
  {
    title: "Straight talk, always.",
    description:
      "If something is going to be a problem, you hear it from us first. Early uncomfortable conversations beat late expensive ones.",
    icon: "MessageSquare",
  },
  {
    title: "Craft over shortcuts.",
    description:
      "We write code we would be comfortable maintaining later. Tests, documentation, clean architecture - not for show, but because shortcuts compound.",
    icon: "Hammer",
  },
  {
    title: "Outcomes, not outputs.",
    description:
      "Features are not the point. The point is your business running better than it did before we showed up.",
    icon: "TrendingUp",
  },
  {
    title: "We stay curious.",
    description:
      "The stack moves fast. We keep up because clients benefit from it, and because being bored is a terrible way to build software.",
    icon: "BookOpen",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Jzon Livingston",
    role: "Founder & Lead Engineer",
    bio: "Built software at enterprise scale across government and private sector. Now applies that same level of engineering to businesses that actually need it — without all the bureaucracy.",
    linkedIn: "#",
  },
];
