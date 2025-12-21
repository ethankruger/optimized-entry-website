import React, { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

interface NetlifyFormProps {
  formName: string
  children: React.ReactNode
  onSuccess?: () => void
  className?: string
}

/**
 * Netlify Form Wrapper
 * Handles form submission for Netlify Forms in a React SPA
 *
 * Usage:
 * <NetlifyForm formName="contact">
 *   <input name="name" required />
 *   <input name="email" type="email" required />
 *   <button type="submit">Send</button>
 * </NetlifyForm>
 */
export const NetlifyForm: React.FC<NetlifyFormProps> = ({
  formName,
  children,
  onSuccess,
  className = '',
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    const data: Record<string, string> = {}

    formData.forEach((value, key) => {
      data[key] = value.toString()
    })

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': formName,
          ...data,
        }),
      })

      setIsSuccess(true)
      form.reset()
      if (onSuccess) onSuccess()

      // Hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting the form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form
        name={formName}
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className={className}
      >
        {/* Hidden fields for Netlify */}
        <input type="hidden" name="form-name" value={formName} />
        <p className="hidden">
          <label>
            Don't fill this out: <input name="bot-field" />
          </label>
        </p>

        {children}

        {/* Success Message */}
        <AnimatePresence>
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="col-span-full bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-center gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-green-900">Message sent successfully!</p>
                <p className="text-sm text-green-700">We'll get back to you within 24 hours.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </>
  )
}

// For static form detection by Netlify (place in public/index.html or a hidden div)
export const NetlifyFormDetection: React.FC<{ formName: string; fields: string[] }> = ({
  formName,
  fields,
}) => {
  return (
    <form
      name={formName}
      data-netlify="true"
      netlify-honeypot="bot-field"
      hidden
      aria-hidden="true"
    >
      <input type="hidden" name="form-name" value={formName} />
      <input name="bot-field" />
      {fields.map(field => (
        <input key={field} name={field} />
      ))}
    </form>
  )
}
