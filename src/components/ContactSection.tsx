import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Custom Behance icon component
const BehanceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.561-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H13.96c.13 3.211 3.483 3.312 4.588 2.029h3.178zm-7.686-4h4.965c-.105-1.547-1.36-1.875-2.477-1.875-1.586 0-2.445.771-2.488 1.875zm-9.574 6.988H0V5.021h4.976c2.318 0 4.24 1.084 4.24 3.215 0 2.131-1.922 3.752-4.24 3.752zM2.977 9.609h1.897c1.134 0 1.855-.53 1.855-1.466 0-.934-.721-1.466-1.855-1.466H2.977v2.932z" />
  </svg>
);

// Zod schema for professional validation
const contactSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be at most 50 characters")
    .regex(
      /^[A-Za-zÀ-ÿ'\- ]+$/,
      "Name can only contain letters, spaces, apostrophes, and hyphens",
    ),
  email: z
    .string()
    .email("Please enter a valid email address")
    .regex(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
      "Email must be a valid email address with a domain and TLD (e.g., example@gmail.com)",
    )
    .refine(
      (val) => {
        // Extra strict: require at least one letter in TLD and domain
        const parts = val.split("@");
        if (parts.length !== 2) return false;
        const [local, domain] = parts;
        if (!local || !domain) return false;
        const domainParts = domain.split(".");
        if (domainParts.length < 2) return false;
        const tld = domainParts[domainParts.length - 1];
        // TLD must be at least 2 letters and only letters
        return /^[A-Za-z]{2,}$/.test(tld);
      },
      {
        message: "Email must include a valid domain and TLD (e.g., .com, .net)",
      },
    ),
  subject: z
    .string()
    .min(4, "Subject must be at least 4 characters")
    .max(100, "Subject must be at most 100 characters")
    .regex(
      /^[A-Za-z0-9À-ÿ.,'"!?()\- ]+$/,
      "Subject can only contain letters, numbers, spaces, and basic punctuation",
    ),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be at most 1000 characters"),
});

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const { toast } = useToast();

  const onSubmit = async (data: any) => {
    try {
      // EmailJS integration (complex logic: async send)
      const serviceId = "service_8oaj19i";
      const templateId = "template_6qvdlgk";
      const publicKey = "OjhM_FrCzkBW_Nwjk";

      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Message Sent!",
        description:
          "Your message has been sent successfully. I will get back to you soon.",
      });
      reset();
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-black to-slate-900"
    >
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Let's <span className="text-purple-400">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project and
            create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">
              Get in Touch
            </h3>

            <div className="space-y-6 mb-8">
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-600/20 rounded-lg group-hover:bg-purple-600/30 transition-colors">
                      <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Email
                      </h4>
                      <a
                        href="mailto:enisbuliqi24@gmail.com"
                        className="text-gray-400 hover:text-purple-400 transition-colors normal-case"
                      >
                        enisbuliqi24@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-600/20 rounded-lg group-hover:bg-purple-600/30 transition-colors">
                      <Phone className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Phone
                      </h4>
                      <a
                        href="tel:+38344625275"
                        className="text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        +38344625275
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-600/20 rounded-lg group-hover:bg-purple-600/30 transition-colors">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Location:
                      </h4>
                      <p className="text-gray-400">City Center, Pristina, Kosovo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/people/Enis-Buliqi/pfbid0qjWTie1LkgX4NCB5JcfWwehdCdRd5Ze3Juc85ckGoyUUyBaKh6DrnhHU8HFRHiNzl/?rdid=4APHU9subwy8TaV1&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1WgubdVPK4%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-purple-600/20 hover:border-purple-400/30 transition-all duration-300"
                  title="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.behance.net/enisbuliqi1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-purple-600/20 hover:border-purple-400/30 transition-all duration-300"
                  title="Behance"
                >
                  <BehanceIcon />
                </a>
                <a
                  href="https://www.instagram.com/enisbuliqi24/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-purple-600/20 hover:border-purple-400/30 transition-all duration-300"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/enis-buliqi-044179372/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-purple-600/20 hover:border-purple-400/30 transition-all duration-300"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Send a Message
                </h3>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 mb-2">Name *</label>
                      <Input
                        {...register("name")}
                        aria-invalid={!!errors.name}
                        aria-describedby="contact-name-error"
                        className={`bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400 ${errors.name ? "border-red-400" : ""}`}
                        placeholder="Your name"
                        disabled={isSubmitting}
                        autoComplete="name"
                      />
                      {errors.name && (
                        <p
                          id="contact-name-error"
                          className="text-red-400 text-sm mt-1"
                        >
                          {errors.name.message as string}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">
                        Email *
                      </label>
                      <Input
                        {...register("email")}
                        type="email"
                        aria-invalid={!!errors.email}
                        aria-describedby="contact-email-error"
                        className={`bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400 ${errors.email ? "border-red-400" : ""}`}
                        placeholder="your@email.com"
                        disabled={isSubmitting}
                        autoComplete="email"
                      />
                      {errors.email && (
                        <p
                          id="contact-email-error"
                          className="text-red-400 text-sm mt-1"
                        >
                          {errors.email.message as string}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">
                      Subject *
                    </label>
                    <Input
                      {...register("subject")}
                      aria-invalid={!!errors.subject}
                      aria-describedby="contact-subject-error"
                      className={`bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400 ${errors.subject ? "border-red-400" : ""}`}
                      placeholder="What's this about?"
                      disabled={isSubmitting}
                      autoComplete="off"
                    />
                    {errors.subject && (
                      <p
                        id="contact-subject-error"
                        className="text-red-400 text-sm mt-1"
                      >
                        {errors.subject.message as string}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">
                      Message *
                    </label>
                    <Textarea
                      {...register("message")}
                      rows={5}
                      aria-invalid={!!errors.message}
                      aria-describedby="contact-message-error"
                      className={`bg-white/10 border-white/20 text-white placeholder-gray-400 resize-none focus:border-purple-400 focus:ring-purple-400 ${errors.message ? "border-red-400" : ""}`}
                      placeholder="Tell me about your project..."
                      disabled={isSubmitting}
                      autoComplete="off"
                    />
                    {errors.message && (
                      <p
                        id="contact-message-error"
                        className="text-red-400 text-sm mt-1"
                      >
                        {errors.message.message as string}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-950 hover:from-purple-700 hover:to-slate-950 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting || !isValid}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
