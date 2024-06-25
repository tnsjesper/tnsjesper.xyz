"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";
import SwipeAnimationLoader from "../components/loading";

const knowledge = [
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
    ),
    href: "https://www.javascript.com/",
    label: "JavaScript",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
    ),
    href: "https://www.java.com",
    label: "Java",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" />
    ),
    href: "https://www.arduino.cc/",
    label: "Arduino",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" />
    ),
    href: "https://www.gnu.org/software/bash/",
    label: "Bash",
  },

  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" />
    ),
    href: "https://getbootstrap.com/",
    label: "Bootstrap",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
    ),
    href: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    label: "C#",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
    ),
    href: "https://www.w3.org/Style/CSS/Overview.en.html",
    label: "CSS",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/discordjs/discordjs-original.svg" />
    ),
    href: "https://discord.js.org/",
    label: "Discord.js",
  },

  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" />
    ),
    href: "https://www.docker.com/",
    label: "Docker",
  },

  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
    ),
    href: "https://github.com",
    label: "GitHub",
  },
  //
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
    ),
    href: "https://html.spec.whatwg.org/multipage/",
    label: "HTML",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" />
    ),
    href: "https://kotlinlang.org/",
    label: "Kotlin",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
    ),
    href: "https://www.debian.org/",
    label: "Linux",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg" />
    ),
    href: "https://mariadb.org/",
    label: "MariaDB",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg" />
    ),
    href: "https://daringfireball.net/projects/markdown/",
    label: "Markdown",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
    ),
    href: "https://www.mongodb.com/",
    label: "MongoDB",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" />
    ),
    href: "https://www.nginx.com/",
    label: "Nginx",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
    ),
    href: "https://nextjs.org/",
    label: "Next.js",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" />
    ),
    href: "https://www.jetbrains.com/idea/",
    label: "IntelliJ IDEA",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
    ),
    href: "https://nodejs.org/",
    label: "Node.js",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" />
    ),
    href: "https://www.npmjs.com/",
    label: "NPM",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" />
    ),
    href: "https://www.php.net/",
    label: "PHP",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/portainer/portainer-original.svg" />
    ),
    href: "https://www.portainer.io/",
    label: "Portainer",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/phpstorm/phpstorm-original.svg" />
    ),
    href: "https://www.jetbrains.com/phpstorm/",
    label: "PhpStorm",
  },
  //
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg" />
    ),
    href: "https://www.jetbrains.com/pycharm/",
    label: "PyCharm",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
    ),
    href: "https://www.python.org/",
    label: "Python",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
    ),
    href: "https://reactjs.org/",
    label: "React.js",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rider/rider-original.svg" />
    ),
    href: "https://www.jetbrains.com/rider/",
    label: "Rider",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
    ),
    href: "https://www.typescriptlang.org/",
    label: "TypeScript",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
    ),
    href: "https://code.visualstudio.com/",
    label: "VS Code",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webstorm/webstorm-original.svg" />
    ),
    href: "https://www.jetbrains.com/webstorm/",
    label: "WebStorm",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg" />
    ),
    href: "https://gradle.org/",
    label: "Gradle",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg" />
    ),
    href: "https://www.raspberrypi.org/",
    label: "Raspberry Pi",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Berechnet den neuen Index, sodass immer 6 Icons angezeigt werden
        let newIndex = prevIndex + 6;
        if (newIndex >= knowledge.length) {
          newIndex = newIndex % knowledge.length; // Stellt sicher, dass der Index im Bereich bleibt
        }
        return newIndex;
      });
    }, 2000); // Wechselt die Icons alle 2 Sekunden

    return () => clearInterval(interval);
  }, []);

  const totalItems = knowledge.length;
  const itemsPerPage = 6; // Anzahl der Elemente, die pro Seite angezeigt werden
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentPage = Math.ceil((currentIndex + 1) / itemsPerPage);
  const progressPercentage = (currentPage / totalPages) * 100;

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <Navigation />
        <SwipeAnimationLoader />
        <div className="">
          <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
          <Particles
            className="absolute inset-0 -z-10 animate-fade-in"
            quantity={100}
          />
          <div className="max-w-md mx-auto rounded-lg border border-zinc-100 shadow-md overflow-hidden md:max-w-2xl my-8 p-4 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <div className="p-4">
              <h1 className="text-2xl font-bold text-gray-300">Welcome!</h1>
              <p className="mt-2 text-gray-400">
                Heyy, I'm a software engineer who loves to build things. I'm
                currently working on a few projects and learning new
                technologies. I'm always open to new opportunities and
                collaborations. Feel free to reach out to me on social media or
                via email. Currently I'm working with JavaScript, Kotlin, C# and
                Linux/Docker. I code now for 2 years and I'm always looking for
                new challenges.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <ul className="flex flex-wrap justify-center items-center">
              {knowledge
                .slice(currentIndex, currentIndex + 6) // Schneidet das Array von currentIndex bis currentIndex + 6
                .map((item) => (
                  <li className="flex justify-center items-center m-4">
                    <Link
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      className="relative flex flex-col items-center justify-center duration-700 group md:py-24 lg:pb-48 md:p-16 randomMove"
                    >
                      <span className="relative z-10 flex items-center justify-center w-20 h-20 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-800 border-zinc-100 bg-gray-150 group-hover:border-zinc-600 drop-shadow-orange transform group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
            <div className="w-3/4 h-4 rounded-full overflow-hidden my-4">
              <div
                className="bg-gray-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
