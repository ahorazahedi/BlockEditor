/* This example requires Tailwind CSS v2.0+ */
import { CogIcon } from "@heroicons/react/outline";
import { useState } from "react";
import HyperParameter from "./Components/HyperParameter";
import Optimizer from "./Components/Optimizer";
const navigation = [
  {
    name: "HyperParameters",
    icon: CogIcon,
    component: () => <HyperParameter />,
  },
  { name: "Optimizer", icon: CogIcon, component: () => <Optimizer /> },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ConfigPage() {
  const [tab, setTab] = useState(0);

  return (
    <div className="flex flex-row ">
      <div className="flex flex-col flex-grow bg-dark overflow-y-auto w-8/12">
        <div className="w-8/12">
          <div className="flex flex-row w-full align-middle items-center ">
            <div className=" w-3/4">
              <HyperParameter />
            </div>
            <div className="flex flex-col w-1/4">
              <h1 className="text-white  text-lg text-bold">
                Optimizer Setting
              </h1>
              <h1 className="text-white   text-xs text-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h1>
            </div>
          </div>

          <div className="flex flex-row w-full  align-middle items-center">
            <div className=" w-3/4">
              <Optimizer />
            </div>
            <div className="flex flex-col w-1/4">
              <h1 className="text-white  text-lg text-bold">
                Optimizer Setting
              </h1>
              <h1 className="text-white   text-xs text-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-6">
        <h1 className="text-xl  text-black">Model Parameters</h1>
        <p className="mt-2 text-sm text-gray-500 text-justify">
          LoremAmet nisi commodo ea commodo magna excepteur excepteur velit amet
          deserunt adipisicing laboris exercitation enim. In non non eu aute.
          Ullamco sint cillum in nostrud deserunt elit aliquip. Sint aliqua est
          exercitation officia do magna veniam. Anim velit aute dolore esse.
          Pariatur incididunt ut amet veniam cupidatat. Exercitation velit
          cupidatat non excepteur aliquip excepteur sit eiusmod quis nulla
          occaecat.Tempor dolore laboris duis dolore nisi pariatur duis duis
          aute id eiusmod fugiat. Magna esse pariatur non sint amet ex et tempor
          esse ullamco. Aliquip ipsum amet sunt duis magna sint mollit
          exercitation laborum consequat voluptate laboris. Lorem in voluptate
          cillum ullamco sit quis esse elit consectetur.
        </p>
      </div>
    </div>
  );
}
