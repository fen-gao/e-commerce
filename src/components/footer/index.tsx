import footer from "public/footer.svg";

type FooterListDataItem = {
  name: string;
  link: string;
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
      <span className="block text-[#56B280] weight-[500] mb-2">
        {data.title}
      </span>
      {data.items.map((item, index) => (
        <li key={index}>
          <a className="hover:text-[#56B280]" href={item.link}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export function Footer() {
  const footerListData: FooterListData[] = [
    {
      title: "Discovery",
      items: [
        { name: "New season", link: "#" },
        { name: "Most searched", link: "#" },
        { name: "Most selled", link: "#" },
      ],
    },
    {
      title: "About",
      items: [
        { name: "Help", link: "#" },
        { name: "Shipping", link: "#" },
        { name: "Affiliate", link: "#" },
      ],
    },
    {
      title: "Info",
      items: [
        { name: "Contact us", link: "#" },
        { name: "Privacy Policies", link: "#" },
        { name: "Terms & Conditions", link: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-[#272727] text-white ">
      <div className="flex flex-row justify-between items-center px-20 mx-auto h-[383px]">
        <div className="w-full flex flex-row justify-between border-white border-t-[1px]">
          <div className="w-[250px]">
            <div>
              <img src={footer} alt="" />
            </div>
            <p>Your natural candle made for your home and for your wellness.</p>
          </div>

          <div className="flex flex-row gap-16 mt-[43px]">
            {footerListData.map((data, index) => (
              <FooterList key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#E5E5E5] text-[#5E6E89] h-[76px] flex flex-row justify-between items-center px-20 mx-auto">
        <div>
          <span>@FengGao All Rights Reserved</span>
        </div>
        <div>
          <span>Designed with ❤️ by uxbly</span>
        </div>
      </div>
    </footer>
  );
}
