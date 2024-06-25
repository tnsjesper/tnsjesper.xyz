import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Eye } from "lucide-react";
import SwipeAnimationLoader from "../components/loading";

export const revalidate = 60;
export default async function ProjectsPage() {
  const featured = allProjects.find((project) => project.slug === "unkey")!;
  const top2 = allProjects.find((project) => project.slug === "planetfall")!;
  const top3 = allProjects.find((project) => project.slug === "highstorm")!;
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <SwipeAnimationLoader />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h1>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link target="_blank" href={`https://tnsstudio.net`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">Nov. 1st, 2021</div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                  </span>
                </div>
                tnsstudio
                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                ></h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  A studio for all things creative. We specialize in branding,
                  web design, and social media marketing. Creating a brand that
                  is unique to you and your business is our top priority. We
                  want to help you succeed in the digital world. We are a team
                  of creatives that are passionate about what we do. We are
                  create System, Services and Server.
                </p>
              </article>
            </Link>
          </Card>
          <Card>
            <Link target="_blank" href={`https://www.crystopia.net`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">Mar. 12, 2023</div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                  </span>
                </div>
                crystopia
                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                ></h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  A uniue Minecraft Server with a lot of fun and games. Creating
                  Gamemodes and Minigames. With a big community. We are a team
                  of creatives that are passionate about what we do. With the
                  Resourcepack and the Server we want to create a unique
                  experience for the players. Join our Discord Server....
                </p>
              </article>
            </Link>
          </Card>
          <Card>
            <Link target="_blank" href={`https://disbot.xyz`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">Jan. 12, 2023</div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                  </span>
                </div>
                disbot
                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                ></h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Customizable Discord Bot with Security in mind. Create a
                  Custom Branding or setup Cool System. Everything is free and
                  many Updates are coming. Invite the Bot to your Server and get
                  started
                </p>
              </article>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
