"use client";

import dynamic from "next/dynamic";
import { Card, CardHeader, CardBody } from "@nextui-org/card";

const Graphviz = dynamic(() => import("graphviz-react"), { ssr: false });

export const Graph = async (props: any) => {
  return (
    <Card className="flex w-full" isBlurred={false}>
      <CardHeader>
        <p className="font-mono antialiased">
          this graph shows the system call sequence
        </p>
      </CardHeader>
      <CardBody className="flex justify-center">
        <Graphviz
          dot={props.dot}
          options={{
            fit: true,
            zoom: true,
          }}
        />
      </CardBody>
    </Card>
  );
};
