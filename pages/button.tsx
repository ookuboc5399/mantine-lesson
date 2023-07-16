import Link from "next/link";
import { Button, Group } from "@mantine/core";
import { Layout } from "../components/Layout";
import { BrandGithub, ThreeDCubeSphere } from "tabler-icons-react";
import { ReplyIcon } from "@heroicons/react/solid";

const ButtonDemo = () => {
  return (
    <Layout title="Button">
      <Group direction="column" position="center">
        <Button
          classNames={{ leftIcon: "text-pink-500" }}
          color="cyan"
          radius="lg"
          leftIcon={<BrandGithub />}
          rightIcon={<ThreeDCubeSphere />}
        >
          Settings
        </Button>
        <Button mt="md">Click</Button>
        <Button className="mt-4">Click</Button>
        <Link href="/">
          <ReplyIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" />
        </Link>
      </Group>
    </Layout>
  );
};

export default ButtonDemo;
