import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";

const schema = z.object({
  name: z.string().trim().min(2, "Введите имя").max(100),
  attendance: z.enum(["yes", "no"], { required_error: "Выберите вариант" }),
  guests: z.string().trim().min(1, "Укажите состав").max(200),
});
type FormData = z.infer<typeof schema>;

const WEBHOOK_URL = ""; // optional Google Apps Script webhook

const RsvpForm = () => {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const attendance = watch("attendance");

  const onSubmit = async (data: FormData) => {
    if (WEBHOOK_URL) {
      try {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            name: data.name,
            attendance: data.attendance === "yes" ? "Придёт" : "Не придёт",
            guests: data.guests,
          }),
        });
      } catch {
        /* ignore */
      }
    }
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-10"
      >
        <p className="font-serif-display text-3xl text-black mb-2">Спасибо!</p>
        <p className="text-sm text-black/70">Ваш ответ принят 💗</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-black">
      <div>
        <label className="block text-[11px] tracking-wider-2 uppercase mb-2">
          Ваше имя и фамилия
        </label>
        <input
          {...register("name")}
          className="w-full bg-transparent border-b border-black/45 focus:border-black outline-none py-2 text-sm"
        />
        {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-[11px] tracking-wider-2 uppercase mb-3">
          Планируете ли вы присутствовать?
        </label>
        <div className="space-y-2">
          {[
            { v: "yes", l: "я смогу прийти" },
            { v: "no", l: "я не смогу прийти" },
          ].map((o) => (
            <label key={o.v} className="flex items-center gap-3 cursor-pointer text-sm">
              <span
                className={`w-4 h-4 rounded-full border border-black flex items-center justify-center transition-colors ${
                  attendance === o.v ? "bg-black" : "bg-transparent"
                }`}
              >
                {attendance === o.v && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
              </span>
              <input type="radio" value={o.v} {...register("attendance")} className="sr-only" />
              {o.l}
            </label>
          ))}
        </div>
        {errors.attendance && <p className="text-xs text-destructive mt-1">{errors.attendance.message}</p>}
      </div>

      <div>
        <label className="block text-[11px] tracking-wider-2 uppercase mb-2">
          В каком составе вас ожидать?
        </label>
        <input
          {...register("guests")}
          className="w-full bg-transparent border-b border-black/45 focus:border-black outline-none py-2 text-sm"
        />
        {errors.guests && <p className="text-xs text-destructive mt-1">{errors.guests.message}</p>}
      </div>

      <div className="pt-4 flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="border border-black bg-transparent hover:bg-black/5 transition-all duration-300 text-black text-xs tracking-wider-2 uppercase px-12 py-3 rounded-full"
        >
          Отправить
        </button>
      </div>
    </form>
  );
};

export default RsvpForm;
