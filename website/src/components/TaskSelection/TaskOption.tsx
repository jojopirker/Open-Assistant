import { Card, CardBody, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
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

  const hoverColor = useColorModeValue('hover:grayscale-0', 'bg-slate-600'); //bg={bgColor} className={bgColor}


  return (
    <Link href={link}>
      <Card
        maxW="300"
        minW="300"
        minH="300"
        maxH="300"
        className="transition ease-in-out duration-500"
      >
        <CardBody width="full" height="full" className="sm:grayscale hover:grayscale-0">
          <Flex direction="column" alignItems="center" justifyContent="center">
            <Image src={img} alt={alt} width={200} height={200}/>
            <Heading
              mt={-10}
              className="bg-gradient-to-r from-indigo-600 via-sky-400 to-indigo-700 bg-clip-text tracking-tight text-transparent"
              textAlign="center"
              fontSize="3xl"
            >
              {title}
            </Heading>
          </Flex>
        </CardBody>
      </Card>
    </Link>
  );
};
