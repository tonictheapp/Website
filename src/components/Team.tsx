import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQHIOqpog2TygA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726952310135?e=1751500800&v=beta&t=5m_GjINp6MhcO-WDXppzmmC-oMhqC4n8E85sL6ZGzFk",
    name: "Harris Coller",
    position: "Business Development Lead",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/harriscoller/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/harriscoller/",
      },
    ],
  },
  {
    imageUrl: "https://media.licdn.com/dms/image/v2/D4E03AQHhG9XoTQIxZw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718275532250?e=1751500800&v=beta&t=byHnVAY5OKXzmThhtTF58iR4MRl3isFVj7brv0JPFrw",
    name: "Carter Ewen",
    position: "Technical Lead & Developer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/carter-ewen-933669194/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/cartertheboywhocriedwolf/",
      },
    ],
  },
  {
    imageUrl: "https://media.licdn.com/dms/image/v2/C4D03AQFp4NkZPpyVqw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1641935223573?e=1751500800&v=beta&t=AQ-pOwDxKT1PYa3Qi_sbEWkDMpzh9oIBqsleA_Bdgl8",
    name: "Diego Perrin",
    position: "Fullstack Developer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/diegoperrin/",
      },

      {
        name: "Instagram",
        url: "https://www.instagram.com/diego.perrin/",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-14">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our {" "}
        </span>
        Team
      </h2>

      {/* <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 gap-y-10 justify-center">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              {/* <CardContent className="text-center pb-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </CardContent> */}

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
