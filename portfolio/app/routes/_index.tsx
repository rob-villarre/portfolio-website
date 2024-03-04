import type { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  
}
