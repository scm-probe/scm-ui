"use client";

import { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

export const Setup = () => {
  const [checked, setChecked] = useState(["name"]);

  return (
    <Card className="flex w-full" isBlurred={false}>
      <CardHeader>
        <p className="font-sans text-2xl antialiased font-bold">setup scm</p>
      </CardHeader>
      <CardBody>
        <CheckboxGroup
          color="secondary"
          label="options"
          orientation="horizontal"
          value={checked}
          onValueChange={setChecked}
        >
          <Checkbox
            isDisabled={checked.includes("name") ? true : false}
            value="id"
          >
            id
          </Checkbox>
          <Checkbox
            isDisabled={checked.includes("id") ? true : false}
            value="name"
          >
            name
          </Checkbox>
          <Checkbox value="graph">sys-call graph</Checkbox>
          <Checkbox value="metrics">metrics</Checkbox>
        </CheckboxGroup>
        <div>
          {checked.includes("id") && (
            <Input
              className="mt-5"
              label="id"
              placeholder="enter process id"
              variant="faded"
              width="50%"
            />
          )}
          {checked.includes("name") && (
            <Input
              className="mt-5"
              label="name"
              placeholder="enter process name"
              variant="faded"
              width="50%"
            />
          )}
        </div>
        <Divider className="mt-5" />
      </CardBody>
      <CardFooter className="flex justify-center">
        <Button
          className="w-4/12"
          color="secondary"
          variant="ghost"
          radius="md"
          size="lg"
        >
          inject kernel code
        </Button>
      </CardFooter>
    </Card>
  );
};
