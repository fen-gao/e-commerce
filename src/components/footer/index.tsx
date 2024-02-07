import { Link } from "react-router-dom";

type FooterListDataItem = {
  name?: string;
  link: string;
  icon?: React.ReactNode;
};

type FooterListData = {
  title: string;
  items: FooterListDataItem[];
};

interface FooterListProps {
  data: FooterListData;
}

const FooterList = ({ data }: FooterListProps) => {
  return (
    <ul className="flex flex-col gap-4">
      <span className="block text-[#000000] weight-[500] mb-2">
        {data.title}
      </span>
      {data.items.map((item, index) => (
        <li key={index}>
          <Link className="text-[#8B96A5] hover:text-[#000000]" to={item.link}>
            {item.name}
          </Link>

          {item.icon && (
            <a href="#">
              <span className="pointer">{item.icon}</span>
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export function Footer() {
  const footerListData: FooterListData[] = [
    {
      title: "Links",
      items: [
        { name: "Masculino", link: "/masculino" },
        { name: "Feminino", link: "/feminino" },
        { name: "Acessórios", link: "/acessorios" },
      ],
    },
  ];

  return (
    <footer className="bg-[#ffffff] text-[#] ">
      <div className="flex flex-row justify-between items-center px-20 mx-auto h-[383px]">
        <div className="w-full flex flex-row justify-between border-white border-t-[1px]">
          {footerListData.map((data, index) => (
            <FooterList key={index} data={data} />
          ))}
        </div>
      </div>
      <div className="bg-[#EFF2F4] text-[#606060] h-[76px] flex flex-row justify-center items-center px-20 mx-auto">
        <div>
          <span>FenGao All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
