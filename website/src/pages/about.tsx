import Image from "next/image";
import { CallToAction } from "src/components/CallToAction";
import { Container } from "src/components/Container";
import { getTransparentHeaderLayout } from "src/components/Layout";
import Roadmap from "src/components/About/Roadmap";
import Services from "src/components/About/Services";
import Vision from "src/components/About/Vision";

const AboutPage = () => {
  return (
    <div>
      <Container className="">
        <div className="grid gap-16 items-center py-20 md:py-40 lg:grid-cols-2">
          <div className="m-auto order-2 lg:order-1">
            <Image src="/images/logos/logo.svg" width={450} height={450} alt="temp-image" />
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">What is OpenAssistant?</h1>
              <p className="mt-4 text-lg">
                OpenAssistant is a chat-based assistant that understands tasks, can interact with third-party systems,
                and retrieve information dynamically to do so.
              </p>
            </div>
            <p className="mt-4 text-lg">
              It can be extended and personalized easily and is developed as free, open-source software.
            </p>
          </div>
        </div>
      </Container>

      <Services />
      <Vision />
      <Roadmap />
      <CallToAction />
    </div>
  );
};

AboutPage.getLayout = getTransparentHeaderLayout;

export default AboutPage;
