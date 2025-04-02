import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { supabase } from "../lib/supabase";
import { useState } from "react";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      inquiryType: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);
      setSubmitStatus('idle');

      console.log('🟢 Form submission started');
      
      const { data, error } = await supabase
        .from('messages')
        .insert([{
          name: values.name,
          email: values.email,
          service: values.inquiryType,
          message: values.message,
          created_at: new Date().toISOString()
        }])
        .select();

      if (error) {
        console.error('❌ Supabase error details:', {
          message: error.message,
          code: error.code,
          hint: error.hint,
          details: error.details
        });
        throw new Error(
          error.code === '42501' 
            ? 'Unable to send message. Please try again later while we fix this issue.'
            : 'An error occurred while sending your message. Please try again.'
        );
      }

      console.log('✅ Data successfully inserted');
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('❌ Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative rounded-[1.25rem] border-[0.75px] border-purple-500/30 p-2 md:rounded-[1.5rem] md:p-3 max-w-5xl mx-auto">
      <Card className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-black p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
        <CardHeader className="max-w-4xl mx-auto w-full">
          <CardTitle className="text-white font-mono">
            Let's Work Together
          </CardTitle>
          <CardDescription className="text-white/60">
            Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you as soon as possible.
          </CardDescription>
        </CardHeader>
        <CardContent className="max-w-4xl mx-auto w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white font-mono">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your name" 
                        {...field} 
                        className="bg-black border-purple-500/30 text-white placeholder:text-white/30 focus-visible:ring-purple-500/50 focus-visible:border-purple-500"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white font-mono">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="your.email@example.com" 
                        type="email" 
                        {...field} 
                        className="bg-black border-purple-500/30 text-white placeholder:text-white/30 focus-visible:ring-purple-500/50 focus-visible:border-purple-500"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="inquiryType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white font-mono">
                      What can I help you with?
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-black border-purple-500/30 text-white focus:ring-purple-500/50 focus:border-purple-500">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-black border-purple-500/30">
                        <SelectItem value="project-collaboration">Project collaboration</SelectItem>
                        <SelectItem value="hiring-inquiry">Hiring inquiry</SelectItem>
                        <SelectItem value="ai-solutions">AI Business Consulting</SelectItem>
                        <SelectItem value="just-saying-hi">Just saying hi</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white font-mono">
                      Tell me a bit more
                    </FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Your message" 
                        {...field} 
                        className="bg-black border-purple-500/30 text-white placeholder:text-white/30 min-h-[150px] focus-visible:ring-purple-500/50 focus-visible:border-purple-500"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <div className="space-y-4">
                <InteractiveHoverButton 
                  type="submit"
                  text={isSubmitting ? 'Sending...' : 'Send Message'}
                  disabled={isSubmitting}
                  className="w-full bg-purple-500 text-white hover:text-white border-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                {submitStatus === 'success' && (
                  <p className="text-green-400 text-center">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
                )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}