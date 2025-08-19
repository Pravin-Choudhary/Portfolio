"use client"
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Input } from "./ui/input"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";


const formSchema = z.object({
  username: z.string().min(2).max(25),
  email : z.string().email(),
  msg : z.string().min(10).max(150)
})

export function Contact(){

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
         defaultValues: {
         username: "",
         email : "",
         msg : ""
    },
});

function onSubmit(values: z.infer<typeof formSchema>){
    console.log(values);
}

    return(
        <>
         <h2 className="text-3xl font-bold mb-10">Contact Me</h2>

        <div className="grid md:grid-cols-5 gap-10 w-full">
          <div className="space-y-6 col-span-2">
            <h3 className="text-xl font-semibold">Get In Touch</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <Link
                    href="mailto:haquedot@gmail.com"
                    className="font-medium hover:underline"
                  >
                    pravinchoudhary.aesxa29@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <Link
                    href="tel:7502461630"
                    className="font-medium hover:underline"
                  >
                    +91 76206 28928 
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Pune, India</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <Link
                    href="https://www.linkedin.com/in/pravin-choudhary-945658375/"
                    target="_blank"
                    className="font-medium hover:underline"
                  >
                    linkedin.com/in/pravin-choudhary
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 col-span-3">
                <div>
                        <h3 className="text-xl font-semibold">Send me a Message</h3>  
                </div>
                  <div>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                            <div className="sm:flex w-full space-y-6 sm:space-y-0 sm:space-x-15">
                              <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                  <FormItem className="space-x-2 space-y-1">
                                      <FormLabel>Name</FormLabel>
                                      <FormControl>
                                        <Input placeholder="Your Name" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                  </FormItem>
                                )}
                              />

                                <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                  <FormItem className="space-x-2 space-y-1">
                                      <FormLabel>Email</FormLabel>
                                      <FormControl>
                                        <Input placeholder="Your Name" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                                <FormField
                                control={form.control}
                                name="msg"
                                render={({ field }) => (
                                  <FormItem className="space-x-2 space-y-1">
                                      <FormLabel>Message</FormLabel>
                                      <FormControl>
                                        <Textarea placeholder="Your Name" {...field} className="min-h-[100px]"/>
                                      </FormControl>
                                      <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <Button type="submit" className="w-full">Submit Message</Button>
                            </form>
                        </Form>
                    </div>
                </div>
          </div>
    </>
    )
}