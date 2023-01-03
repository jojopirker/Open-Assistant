import { Card, CardBody, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export type OptionProps = {
  img: string;
  alt: string;
  title: string;
  link: string;
};

export const TaskOption = (props: OptionProps) => {
  const { alt, img, title, link } = props;
  return (
    <Link href={link}>
      <Card
        maxW="250"
        minW="250"
        minH="150"
        maxH="150"
        className="transition ease-in-out duration-500 sm:grayscale hover:grayscale-0"
      >
        <CardBody width="full" height="full">
          <Flex direction="column" alignItems="center" justifyContent="center">
            <Image src={img} alt={alt} width={100} height={100} />
            <Heading
              mt={-5}
              className="bg-gradient-to-r from-indigo-600 via-sky-400 to-indigo-700 bg-clip-text tracking-tight text-transparent"
              textAlign="center"
              fontSize="xl"
            >
              {title}
            </Heading>
          </Flex>
        </CardBody>
      </Card>
    </Link>
  );
};
