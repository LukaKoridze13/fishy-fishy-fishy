import CMSMenuConfig from "@/cms_config/CMSMenuConfig";
import { Link } from "@/i18n/routing";
import {  useTranslations } from "next-intl";
import React from "react";

const CMSMenu = () => {
  const t = useTranslations("ContentManagementSystem.Menu");
  return (
    <aside className="fixed bg-darkBlue p-4 rounded-lg flex flex-col gap-3 w-[300px] top-[86px] left-4">
      {CMSMenuConfig.map((item) => (
        <Link href={item.href} key={item.href} className="flex text-lg items-center gap-2 text-white">
          <item.icon />
          {/* @ts-ignore */}
          <span>{t(item.name)}</span>
        </Link>
      ))}
    </aside>
  );
};

export default CMSMenu;
