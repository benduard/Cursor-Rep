import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { MagnetizeButton } from "@/components/ui/magnetize-button";

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

      console.log('Submitting form with values:', values);

      const { data, error } = await supabase
        .from('contact_messages')
        .insert([{
          Name: values.name,
          Email: values.email,
          "Inquiry Type": values.inquiryType,
          Message: values.message
        }])
        .select('*');

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('Successfully inserted data:', data);
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('Detailed error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
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
          <MagnetizeButton 
            type="submit"
            className="w-full bg-violet-100 dark:bg-violet-900 hover:bg-violet-200 dark:hover:bg-violet-800 text-violet-600 dark:text-violet-300 border border-violet-300 dark:border-violet-700"
            disabled={isSubmitting}
            particleCount={14}
            attractRadius={50}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </MagnetizeButton>
          {submitStatus === 'success' && (
            <p className="text-green-400 text-center">Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
          )}
        </div>
      </form>
    </Form>
  );
}