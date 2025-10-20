import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm <
  ContactFormData >
  {
    resolver: zodResolver(contactSchema),
  };

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);
    // εδώ στέλνεις τα δεδομένα με emailjs ή API endpoint
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <input
        {...register("name")}
        placeholder="Your name"
        className="p-2 rounded border"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <input
        {...register("email")}
        placeholder="Your email"
        className="p-2 rounded border"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <textarea
        {...register("message")}
        placeholder="Your message"
        className="p-2 rounded border h-32"
      />
      {errors.message && (
        <p className="text-red-500">{errors.message.message}</p>
      )}

      <button
        disabled={isSubmitting}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
