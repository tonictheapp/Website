import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage alt="Restaurant owner" src="https://i.pravatar.cc/150?img=23" />
            <AvatarFallback>BL</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <CardTitle className="text-lg">Maya Lin</CardTitle>
            <CardDescription>Owner, Blue Lotus Café</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          "Our first campaign filled up our Thursday dinner slot for three weeks straight. Way better than ads."
        </CardContent>
      </Card>

      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://i.pravatar.cc/150?img=45"
            alt="creator avatar"
            className="absolute -top-12 rounded-full w-24 h-24 object-cover"
          />
          <CardTitle className="text-center">Jules Aranda</CardTitle>
          <CardDescription className="font-normal text-primary">
            Food Creator · 12K Followers
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center pb-2">
          <p>
            “I only post about spots I’d actually go to. That’s why people trust what I share.”
          </p>
        </CardContent>
        <CardFooter>
          <div className="flex gap-2">
            <a href="#" className={buttonVariants({ variant: "ghost", size: "sm" })}>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Beta Access
            <Badge variant="secondary" className="text-sm text-primary">Free</Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">$0</span>
            <span className="text-muted-foreground"> /month</span>
          </div>
          <CardDescription>
            Available to early restaurant partners during testing.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full">Request Access</Button>
        </CardContent>
        <hr className="w-4/5 m-auto mb-4" />
        <CardFooter className="flex">
          <div className="space-y-4">
            {[
              "Verified local creators",
              "Performance tracking"
            ].map((benefit) => (
              <span key={benefit} className="flex">
                <Check className="text-green-500" />
                <h3 className="ml-2">{benefit}</h3>
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>

      <Card className="absolute w-[350px] -right-[-20px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Guaranteed Posts</CardTitle>
            <CardDescription className="text-md mt-2">
              We work with our creators to ensure you recieve promotional material.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
