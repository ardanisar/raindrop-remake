// "use client";
// import React from "react";

// const DropdownButton = ({ options = [], className = "dropdownButton" }) => {
//   const handleChange = (e) => {
//     const selectedHref = e.target.value;
//     if (selectedHref) {
//       window.location.href = selectedHref;
//     }
//   };

//   return (
//     <label className={className}>
//       <select onChange={handleChange} defaultValue="">
//         {options.map((opt, index) =>
//           opt.separator ? (
//             <option key={index} disabled>
//               --------
//             </option>
//           ) : (
//             <option key={index} value={opt.href} disabled={opt.disabled}>
//               {opt.label}
//             </option>
//           )
//         )}
//       </select>
//     </label>
//   );
// };

// export default DropdownButton;

"use client";

import React from "react";
import { usePathname } from "next/navigation";

export type OptionType =
  | {
      label: string;
      href: string;
      value: string;
      disabled?: boolean;
      separator?: false; // optional, default false
    }
  | {
      separator: true;
      label?: undefined;
      href?: undefined;
      value?: undefined;
      disabled?: undefined;
    };

type DropdownButtonProps = {
  options: OptionType[];
  className?: string;
};

const DropdownButton = ({
  options = [],
  className = "dropdownButton",
}: DropdownButtonProps) => {
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<any>) => {
    const selectedHref = e.target.value;
    if (selectedHref && selectedHref !== pathname) {
      window.location.href = selectedHref; // Bisa diganti router.push kalau mau SPA
    }
  };

  // Cari yang match dengan URL sekarang
  const current = options.find((opt) => opt.href === pathname);
  const currentValue = current?.href || "";

  return (
    <label className={className}>
      <select onChange={handleChange} value={currentValue}>
        {options.map((opt, index) =>
          opt.separator ? (
            <option key={index} disabled>
              --------
            </option>
          ) : (
            <option key={index} value={opt.href} disabled={opt.disabled}>
              {opt.label}
            </option>
          )
        )}
      </select>
    </label>
  );
};

export default DropdownButton;
