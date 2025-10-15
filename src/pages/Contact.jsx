import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="flex-1 isolate bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      ></div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white">
          Cuéntame
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-400">
          Puedes hablarme de cualquier paranoya y estaré encantado de oirte.
        </p>
      </div>
      <ContactForm></ContactForm>
    </div>
  );
}
