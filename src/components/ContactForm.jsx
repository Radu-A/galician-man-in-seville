import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useForm, ValidationError } from "@formspree/react";
export default function ContactForm() {
  const [formState, handleSubmit] = useForm("xanplkgk");
  if (formState.succeeded) {
    return (
      <h2 className="mt-10 text-4xl font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300 text-center">
        Gracias por contactarme!
      </h2>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor="first-name"
            className="block text-sm/6 font-semibold text-gray-900 dark:text-white"
          >
            Nombre
          </label>
          <div className="mt-2.5">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="given-name"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={formState.errors}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm/6 font-semibold text-gray-900 dark:text-white"
          >
            Email
          </label>
          <div className="mt-2.5">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={formState.errors}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="subject"
            className="block text-sm/6 font-semibold text-gray-900 dark:text-white"
          >
            Asunto
          </label>
          <div className="mt-2.5">
            <input
              id="subject"
              name="subject"
              type="text"
              autoComplete="subject"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
            />
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={formState.errors}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm/6 font-semibold text-gray-900 dark:text-white"
          >
            Mensaje
          </label>
          <div className="mt-2.5">
            <textarea
              id="message"
              name="message"
              rows={4}
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
              defaultValue={""}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={formState.errors}
            />
          </div>
        </div>
        <div className="flex gap-x-4 sm:col-span-2">
          <div className="flex h-6 items-center">
            <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2 dark:bg-white/5 dark:inset-ring-white/10 dark:outline-indigo-500 dark:has-checked:bg-indigo-500">
              <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
              <input
                id="agree-to-policies"
                name="agree-to-policies"
                type="checkbox"
                aria-label="Agree to policies"
                className="absolute inset-0 appearance-none focus:outline-hidden"
              />
            </div>
          </div>
          <label
            htmlFor="agree-to-policies"
            className="text-sm/6 text-gray-600 dark:text-gray-400"
          >
            By selecting this, you agree to our{" "}
            <a
              href="#"
              className="font-semibold whitespace-nowrap text-indigo-600 dark:text-indigo-400"
            >
              privacy policy
            </a>
            .
          </label>
        </div>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
        >
          Let's talk
        </button>
      </div>
    </form>
  );
}
