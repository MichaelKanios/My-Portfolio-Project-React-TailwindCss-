import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(
      /^(?=.*[A-Z])(?=.*\d).{6,}$/,
      "Must include 1 uppercase and 1 number"
    ),
});

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => console.log("Form data:", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Name" {...register("name")} />
      {errors.name && <p>{errors.name.message}</p>}

      <input placeholder="Email" {...register("email")} />
      {errors.email && <p>{errors.email.message}</p>}

      <input placeholder="Password" type="password" {...register("password")} />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Register</button>
    </form>
  );
}
