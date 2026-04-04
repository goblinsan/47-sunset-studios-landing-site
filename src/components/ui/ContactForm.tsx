'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';

import { Button } from './Button';
import { Typography } from './Typography';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = 'Name is required.';
  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.message.trim()) errors.message = 'Message is required.';
  return errors;
}

const inputBase = cn(
  'w-full rounded-lg px-4 py-3',
  'bg-surface-2 border border-border-default',
  'text-body text-text-primary placeholder:text-text-subtle',
  'outline-none',
  'focus:border-accent focus:ring-1 focus:ring-accent',
  'transition-colors duration-base',
  'disabled:opacity-50',
);

/**
 * Contact form that submits to the `/api/contact` Cloudflare Pages Function.
 * Handles client-side validation and shows loading / success / error states.
 */
export function ContactForm() {
  const [values, setValues] = useState<FormValues>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [state, setState] = useState<FormState>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setState('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
        }),
      });
      if (res.ok) {
        setState('success');
        setValues({ name: '', email: '', message: '' });
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <div className="border-border-subtle bg-surface-1 rounded-xl border p-8 text-center">
        <div className="bg-accent/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-accent h-6 w-6"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <Typography variant="heading-sm" className="mb-2">
          Message sent!
        </Typography>
        <Typography variant="body" className="mb-6">
          We&apos;ll be in touch soon.
        </Typography>
        <button
          type="button"
          onClick={() => setState('idle')}
          className="text-accent hover:text-accent-bright duration-base text-body-sm font-medium transition-colors outline-none"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="text-body-sm text-text-secondary mb-1.5 block">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          value={values.name}
          onChange={handleChange}
          disabled={state === 'submitting'}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          aria-invalid={!!errors.name}
          className={cn(inputBase, errors.name && 'border-red-500 focus:ring-red-500')}
        />
        {errors.name && (
          <p id="contact-name-error" role="alert" className="text-body-sm mt-1 text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="text-body-sm text-text-secondary mb-1.5 block">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={values.email}
          onChange={handleChange}
          disabled={state === 'submitting'}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          aria-invalid={!!errors.email}
          className={cn(inputBase, errors.email && 'border-red-500 focus:ring-red-500')}
        />
        {errors.email && (
          <p id="contact-email-error" role="alert" className="text-body-sm mt-1 text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="text-body-sm text-text-secondary mb-1.5 block">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Tell us about your project…"
          value={values.message}
          onChange={handleChange}
          disabled={state === 'submitting'}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          aria-invalid={!!errors.message}
          className={cn(
            inputBase,
            'resize-y',
            errors.message && 'border-red-500 focus:ring-red-500',
          )}
        />
        {errors.message && (
          <p id="contact-message-error" role="alert" className="text-body-sm mt-1 text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      {/* Server error */}
      {state === 'error' && (
        <p role="alert" className="text-body-sm text-red-400">
          Something went wrong. Please try again or email us directly at{' '}
          <a
            href="mailto:hello@47sunsetstudios.com"
            className="text-accent hover:text-accent-bright underline underline-offset-2"
          >
            hello@47sunsetstudios.com
          </a>
          .
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={state === 'submitting'}
        className="w-full sm:w-auto"
      >
        {state === 'submitting' ? 'Sending…' : 'Send message'}
      </Button>
    </form>
  );
}
