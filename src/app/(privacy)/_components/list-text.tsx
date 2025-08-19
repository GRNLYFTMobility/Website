'use client';

import { useTheme } from '@/context/ThemeContext';

interface ListTextProps {
  title: string;
  description?: string;
  list1?: string;
  list2?: string;
  list3?: string;
  list4?: string;
  list5?: string;
  list6?: string;
  list7?: string;
  list8?: string;
  list9?: string;
  list10?: string;
  list11?: string;
  list12?: string;
  list13?: string;
  list14?: string;
  list15?: string;
  list16?: string;
  list17?: string;
  list18?: string;
  list19?: string;
  list20?: string;
  children?: React.ReactNode;
}

export const ListTextPrivacy = ({
  title,
  description,
  list1,
  list2,
  list3,
  list4,
  list5,
  list6,
  list7,
  list8,
  list9,
  list10,
  list11,
  list12,
  list13,
  list14,
  list15,
  list16,
  list17,
  list18,
  list19,
  list20,
  children,
}: ListTextProps) => {
  const { isDarkMode } = useTheme();

  const listItems = [
    list1, list2, list3, list4, list5, list6, list7, list8, list9, list10,
    list11, list12, list13, list14, list15, list16, list17, list18, list19, list20,
  ];

  return (
    <div className="w-full flex flex-col gap-4 md:gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl md:text-[26px] font-bold w-full  text-start">{title}</h1>
        {description && (
          <p
            className={`text-start w-full font-medium text-sm md:text-[16px] ${
              isDarkMode ? 'text-[#a7a7a7]' : 'text-[#181818]'
            }`}
          >
            {description}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-4">
        {listItems.map(
          (item, idx) =>
            item && (
              <div key={idx} className="flex gap-2 items-start">
                <p className={`text-lg -mt-1 ${isDarkMode ? 'text-[#c9c9c9]' : 'text-[#000]'}`}>&#x2022;</p>
                <p
                  className={`text-start w-full font-medium text-sm md:text-[16px] leading-6 tracking-wide ${
                    isDarkMode ? 'text-[#c9c9c9]' : 'text-[#000]'
                  }`}
                >
                  {item}
                </p>
              </div>
            )
        )}
        {children && (
          <div
            className={`text-start w-full font-medium text-sm md:text-[16px] leading-6 tracking-wide ${
              isDarkMode ? 'text-[#c9c9c9]' : 'text-[#000]'
            }`}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
