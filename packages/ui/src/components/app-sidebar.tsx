"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  File,
  Folder
} from "lucide-react"

import { NavMain } from "@workspace/ui/components/nav-main"
import { NavProjects } from "@workspace/ui/components/nav-projects"
import { NavUser } from "@workspace/ui/components/nav-user"
import { TeamSwitcher } from "@workspace/ui/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@workspace/ui/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Nitin Choudhary",
    email: "nitinchoudhary22112004@gmail.com",
    avatar: "https://ucarecdn.com/ee65184f-1210-4577-b239-929da8024c43/-/preview/803x803/",
  },
  teams: [
    {
      name: "Nitin Ka Dhandha",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Jaat.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Nitin1",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "My Documents",
      url: "#",
      icon: Folder,
      isActive: true,
      items: [
        {
          title: "Rent Agreements",
          url: "#",
        },
        {
          title: "Invoices",
          url: "#",
        },
        {
          title: "Contracts",
          url: "#",
        },
        {
          title: "Other",
          url: "#",
        },
      ],
    },
    {
      title: "Clients",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  // projects: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
