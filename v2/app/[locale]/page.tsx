import { experiences, projects, skills } from "@/assets/data";
import {
  Download,
  Github,
  LinkedinIcon,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const t = useTranslations("Home");

  const locale = useLocale() as "pt-br" | "en-us";

  return (
    <main className="flex flex-col gap-4">
      <section className="flex justify-between">
        <div>
          <h1 className="mb-1">Eduardo Hoths</h1>

          <div className="text-sm">
            <span>{t("role")}</span>
            <span className="flex gap-2 items-center mt-1">
              <MapPin /> {t("location")}
            </span>

            <div className="flex gap-2 mt-2">
              <Link
                href={"https://www.linkedin.com/in/eduardohoths/"}
                target="_blank"
                className="p-2 rounded hover:dark:bg-gray-800 hover:bg-gray-200 transition-all border dark:border-gray-800"
              >
                <LinkedinIcon size={20} />
              </Link>
              <Link
                href={"https://github.com/eduardohoths"}
                target="_blank"
                className="p-2 rounded hover:dark:bg-gray-800 hover:bg-gray-200 transition-all border dark:border-gray-800"
              >
                <Github size={20} />
              </Link>
              <Link
                href={"mailto:eduardo.hoths@gmail.com"}
                className="p-2 rounded hover:dark:bg-gray-800 hover:bg-gray-200 transition-all border dark:border-gray-800"
              >
                <Mail size={20} />
              </Link>
              <Link
                href={"tel:+5511960133029"}
                className="p-2 rounded hover:dark:bg-gray-800 hover:bg-gray-200 transition-all border dark:border-gray-800"
              >
                <Phone size={20} />
              </Link>
            </div>

            <div className="w-[176px]">
              <a
                href={`/cv/Currículo - Eduardo Hoths (${locale}).pdf`}
                download={`Currículo - Eduardo Hoths (${locale}).pdf`}
                className="mt-2 border dark:border-gray-700 w-full py-2 rounded bg-gray-800 text-white flex gap-1 items-center justify-center"
              >
                {t("resume")}
                <Download size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="hidden sm:block">
          <Image
            src={"https://avatars.githubusercontent.com/u/94751445?v=4"}
            width={150}
            height={150}
            alt="image profile"
          />
        </div>
      </section>

      <section>
        <h2>{t("about.title")}</h2>
        <p className="mt-2 text-sm">{t("about.text")}</p>
      </section>

      <section>
        <h2>{experiences[locale].title}</h2>

        <div className="flex flex-col gap-4 mt-2">
          {experiences[locale].data.map((experience) => (
            <div
              key={experience.company}
              className="flex flex-col gap-1 border dark:border-gray-800 rounded p-4"
            >
              <div className="flex gap-2 items-center">
                <Link
                  href={experience.url}
                  target="_blank"
                  className="hover:underline"
                >
                  <h3 className="font-normal">{experience.company}</h3>
                </Link>

                <span className="text-xs border dark:border-gray-700 py-1 px-4 rounded">
                  {experience.modality}
                </span>
              </div>

              <div className="text-sm">
                <span className="font-bold">{experience.role}</span>
                <span className="dark:text-gray-500">
                  {" "}
                  • {experience.location}
                </span>
              </div>

              <div className="text-xs text-gray-500">{experience.date}</div>

              <div className="text-xs text-gray-400 mt-1">
                <p>{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>{t("education.title")}</h2>

        <div className="flex flex-col gap-1 border dark:border-gray-800 rounded p-4 text-sm mt-2">
          <span className="font-bold">{t("education.university")}</span>

          <p className="text-gray-500 ">{t("education.duration")}</p>

          <p className="text-gray-400">{t("education.course")}</p>
        </div>
      </section>

      <section>
        <h2>{t("skills")}</h2>

        <div className="border dark:border-gray-800 rounded p-4 mt-2 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="border dark:border-gray-800 py-1 px-2 rounded dark:bg-gray-800 hover:dark:bg-gray-900  bg-gray-200 hover:bg-gray-300 transition-all text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2>{t("projects")}</h2>

        <div>
          {projects[locale].map((project) => (
            <div
              key={project.name}
              className="border dark:border-gray-800 rounded p-4 mt-2 flex flex-col gap-2"
            >
              <h3>
                {project.name}{" "}
                <span className="text-gray-500 text-sm">
                  • {project.company}
                </span>
              </h3>

              <div className="text-sm text-gray-400">
                <p>{project.description}</p>
              </div>

              <div>
                {project.details.map((detail) => (
                  <ul key={detail} className="list-disc text-xs">
                    <li className="ml-4">{detail}</li>
                  </ul>
                ))}
              </div>

              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border dark:border-gray-800 py-1 px-2 rounded dark:bg-gray-800 hover:dark:bg-gray-900  bg-gray-200 hover:bg-gray-300 transition-all text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
