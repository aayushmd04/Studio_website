import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    // Build form body for Netlify Forms
    const body = new URLSearchParams();
    body.append("form-name", "contact");
    body.append("name", form.name);
    body.append("email", form.email);
    body.append("message", form.message);

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (res.ok) {
        toast({ title: "Message sent", description: "Thanks — we'll get back to you soon." });
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (err) {
      toast({ title: "Send failed", description: "There was a problem sending your message." });
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="page-container">
      <div className="page-inner max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Contact Us</h1>
        <p className="text-foreground/70 mb-6">Have a project or question? Send us a message and we’ll reply within a few days.</p>

        <form onSubmit={handleSubmit} name="contact" data-netlify="true" netlify-honeypot="bot-field" className="grid gap-4">
          {/* Netlify required hidden fields */}
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <label className="flex flex-col">
            <span className="text-foreground/70 mb-2">Name</span>
            <input name="name" value={form.name} onChange={handleChange} required className="px-4 py-3 rounded-md bg-secondary/40 border border-border text-foreground outline-none focus:ring-2 focus:ring-ring" />
          </label>

          <label className="flex flex-col">
            <span className="text-foreground/70 mb-2">Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} required className="px-4 py-3 rounded-md bg-secondary/40 border border-border text-foreground outline-none focus:ring-2 focus:ring-ring" />
          </label>

          <label className="flex flex-col">
            <span className="text-foreground/70 mb-2">Message</span>
            <textarea name="message" value={form.message} onChange={handleChange} required rows={6} className="px-4 py-3 rounded-md bg-secondary/40 border border-border text-foreground outline-none focus:ring-2 focus:ring-ring" />
          </label>

          <div className="flex items-center gap-3 mt-2">
            <button type="submit" className="btn-primary" disabled={submitting}>{submitting ? "Sending..." : "Send Message"}</button>
            <button type="button" className="btn-secondary" onClick={() => setForm({ name: "", email: "", message: "" })}>Clear</button>
          </div>
        </form>

        <p className="text-foreground/60 text-sm mt-4">This form uses Netlify Forms. Deploy the site to Netlify and set up email notifications in your Netlify dashboard to receive messages to your Gmail.</p>
      </div>
    </div>
  );
}
