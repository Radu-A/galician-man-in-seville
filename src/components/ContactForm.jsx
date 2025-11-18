import { ValidationError, useForm } from "@formspree/react";
import { motion } from "framer-motion";

// Extracted constant: Formspree endpoint ID
const FORM_ID = "xanplkgk";

// Helper component for styled form fields
const FormField = ({
  id,
  label,
  type = "text",
  errors,
  isTextarea = false,
  className = "",
}) => {
  const inputClasses =
    "peer z-10 w-full border-0 border-b-1 border-neutral-500 bg-transparent pt-4 pb-1 text-lg text-neutral-900 focus:border-neutral-900 focus:outline-none focus:ring-0";
  const labelClasses =
    "absolute left-0 -top-3 text-sm text-neutral-500 pointer-events-none transition-all duration-300 " +
    "peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-700 " +
    "peer-focus:-top-3 peer-focus:text-sm peer-focus:text-neutral-500";

  const InputComponent = isTextarea ? "textarea" : "input";
  const inputProps = isTextarea ? { rows: "4" } : { type };

  return (
    <div className={`relative mb-6 ${className}`}>
      <InputComponent
        name={id}
        id={id}
        className={inputClasses}
        placeholder=" "
        required
        {...inputProps}
      />
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      <ValidationError prefix={label} field={id} errors={errors} />
    </div>
  );
};

export default function ContactForm({ itemVariants }) {
  const [formState, handleSubmit] = useForm(FORM_ID);

  if (formState.succeeded) {
    // Translated success message to English
    return (
      <h2 className="mt-10 text-center text-4xl text-neutral-700">
        Thank you for contacting me!
      </h2>
    );
  }

  return (
    <motion.form
      variants={itemVariants}
      onSubmit={handleSubmit}
      className="grid w-full grid-cols-1 gap-4 py-8 lg:grid-cols-2"
    >
      {/* Name Field */}
      <FormField id="name" label="NAME" errors={formState.errors} />

      {/* Email Field */}
      <FormField
        id="email"
        label="EMAIL"
        type="email"
        errors={formState.errors}
      />

      {/* Message Field (Textarea) */}
      <FormField
        id="message"
        label="MESSAGE"
        errors={formState.errors}
        isTextarea={true}
        className="lg:col-span-2"
      />

      <button
        type="submit"
        disabled={formState.submitting}
        className="w-full cursor-pointer bg-neutral-700 px-4 py-3 font-semibold text-white transition-colors duration-300 hover:bg-neutral-800"
      >
        Send
      </button>
    </motion.form>
  );
}
