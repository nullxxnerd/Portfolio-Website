import { Github, FileDown, Mail, Linkedin, ExternalLink } from "lucide-react";
import ContactMe from "@/components/contactMe";
import { Button } from "@/components/ui/button";
import profilePic from "@/public/mainpic.png";

import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="min-h-screen  bg-gradient-to-br from-[#f6f6f6] via-[#e9e9e9] to-[#d7d7d7] text-gray-800 relative overflow-hidden">
      {/* Animated noise background */}
      <div
        className="fixed inset-0 opacity-10"
        style={{
          backgroundImage: 'url("/noise.png")',
          animation: "noise 1s steps(2) infinite",
        }}
      />

      <main className="relative max-w-3xl mx-auto lg:px-4 lg:py-8 px-3 py-6 space-y-8 sm:space-y-12">
        {/* Profile Card */}
        <Card className="w-full bg-white/90 backdrop-blur shadow-lg border-2 border-gray-700">
          <CardHeader className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="relative">
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-gray-300">
                  <Image
                    priority
                    alt="Profile"
                    src={profilePic}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
              </div>
              <div className="flex-1 space-y-1 text-center sm:text-left">
                <h1 className="text-2xl font-bold text-gray-900">
                  Ali Reza Torabi
                </h1>
                <p className="text-gray-600">Data Science Developer</p>
                <p className="text-gray-500">Based in Tehran, Iran</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              <Link href="https://github.com/nullxxnerd/" passHref>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 border-gray-300 hover:bg-gray-100 text-gray-700"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
              </Link>
              <Link href="/resume.pdf" passHref>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 border-gray-300 hover:bg-gray-100 text-gray-700"
                >
                  <FileDown className="w-4 h-4" />
                  Resume
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/ali-reza-torabi-959b782a6/"
                passHref
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 border-gray-300 hover:bg-gray-100 text-gray-700"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h2 className="text-sm font-bold text-gray-700 mb-2">About</h2>
              <p className="text-sm text-gray-700">
                Data scientist with expertise in machine learning, statistical
                analysis, and building data-driven solutions. Passionate about
                turning complex data into actionable insights.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-bold text-gray-700 mb-2">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "R",
                  "SQL",
                  "TensorFlow",
                  "PyTorch",
                  "Scikit-learn",
                  "Data Visualization",
                  "Statistical Analysis",
                ].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-gray-200 text-gray-700 hover:bg-gray-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Featured Projects
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Product Title Categorization",
                description:
                  "Developed a 1D CNN model using PyTorch for classifying product titles with 87% accuracy on unseen data. Trained on the Torob.com dataset with an efficient multi-layer architecture.",
                tags: ["Python", "PyTorch", "1D CNN", "Text Classification"],
                link: "https://github.com/nullxxnerd/title_categorizer",
              },
              {
                title: "Product Image Categorization",
                description:
                  "Built a ResNet50-based model for classifying product images with 90% accuracy. Fine-tuned on the Torob dataset for diverse multi-class classification tasks.",
                tags: ["Python", "PyTorch", "ResNet50", "Image Classification"],
                link: "https://github.com/nullxxnerd/Product-Image-Classification",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="bg-white/90 backdrop-blur shadow-md border-gray-200"
              >
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-800">
                      {project.title}
                    </h3>
                    <Link href={project.link} passHref>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-600 hover:text-gray-900 flex items-center justify-center"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-gray-200 text-gray-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Blog Posts Section */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">
            Latest Blog Posts
          </h2>
          <div className="grid gap-4">
            {[
              {
                title: "Understanding Transformers ",
                date: "2024-01-05",
                description:
                  "A deep dive into the fundamentals of transformers and their applications. Soon!!",
                readTime: "5 min read",
              },
            ].map((post, index) => (
              <Card
                key={index}
                className="bg-white/90 backdrop-blur shadow-md border-gray-200"
              >
                <CardHeader>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-800">
                        {post.title}
                      </h3>
                      <span className="text-xs text-gray-500">
                        {post.readTime}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{post.description}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="text-gray-600 pl-1 px-0 hover:text-gray-900"
                  >
                    Read More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <Card className="w-full bg-white/90 backdrop-blur shadow-lg border-gray-200">
          <CardHeader>
            <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800">
              <Mail className="w-6 h-6" />
              Get in Touch
            </h2>
          </CardHeader>
          <CardContent>
            <ContactMe />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
