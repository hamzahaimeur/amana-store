'use client'

import { CheckCircle2, CreditCard, Wallet } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { useCart } from '@/components/cart/cart-provider'
import { CheckoutSummary } from '@/components/checkout/checkout-summary'
import { Reveal } from '@/components/motion/reveal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

type PaymentMethod = 'card' | 'cod'

function generateOrderNumber() {
  return `AMN-${Math.floor(100000 + Math.random() * 900000)}`
}

function Field({
  id,
  label,
  className,
  ...props
}: React.ComponentProps<typeof Input> & { label: string }) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <Input id={id} className="h-11 rounded-lg px-3.5" {...props} />
    </div>
  )
}

export function CheckoutPageContent() {
  const { items, clearCart } = useCart()
  const [payment, setPayment] = useState<PaymentMethod>('card')
  const [order, setOrder] = useState<string | null>(null)

  const isEmpty = items.length === 0

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setOrder(generateOrderNumber())
    clearCart()
  }

  if (order) {
    return (
      <div className="mx-auto w-full max-w-2xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal immediate className="flex flex-col items-center gap-6 text-center">
          <span className="grid size-16 place-items-center rounded-full bg-primary/10 text-primary">
            <CheckCircle2 className="size-8" strokeWidth={1.75} aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Order Confirmed
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Thank you for your purchase. A confirmation email is on its way with
              your order details and tracking information.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card px-6 py-4">
            <p className="text-xs font-medium tracking-[0.12em] text-muted-foreground uppercase">
              Order number
            </p>
            <p className="mt-1 font-mono text-lg font-semibold tabular-nums">{order}</p>
          </div>
          <Button
            nativeButton={false}
            render={<Link href="/products" />}
            className="h-12 rounded-full px-8 text-[15px]"
          >
            Continue shopping
          </Button>
        </Reveal>
      </div>
    )
  }

  if (isEmpty) {
    return (
      <div className="mx-auto w-full max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <Reveal immediate className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Your cart is empty</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Add a few things to your cart before heading to checkout.
          </p>
          <Button
            nativeButton={false}
            render={<Link href="/products" />}
            className="mt-2 h-12 rounded-full px-8 text-[15px]"
          >
            Browse products
          </Button>
        </Reveal>
      </div>
    )
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-10">
        <Reveal immediate>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 rounded-2xl border border-border bg-card p-5 sm:p-6"
          >
            <fieldset className="flex flex-col gap-4">
              <legend className="mb-2 text-lg font-semibold tracking-tight">
                Contact & shipping
              </legend>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field id="fullName" label="Full name" autoComplete="name" required />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>
              <Field
                id="address"
                label="Address"
                autoComplete="street-address"
                required
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <Field id="city" label="City" autoComplete="address-level2" required />
                <Field
                  id="postalCode"
                  label="Postal code"
                  autoComplete="postal-code"
                  required
                />
                <Field
                  id="country"
                  label="Country"
                  autoComplete="country-name"
                  required
                />
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-4">
              <legend className="mb-2 text-lg font-semibold tracking-tight">
                Payment method
              </legend>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {(
                  [
                    { value: 'card', label: 'Card', icon: CreditCard },
                    { value: 'cod', label: 'Cash on Delivery', icon: Wallet },
                  ] as const
                ).map(({ value, label, icon: Icon }) => (
                  <label
                    key={value}
                    className={cn(
                      'flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors',
                      payment === value
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:bg-muted',
                    )}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={value}
                      checked={payment === value}
                      onChange={() => setPayment(value)}
                      className="size-4 accent-primary"
                    />
                    <Icon
                      className="size-5 text-primary"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium">{label}</span>
                  </label>
                ))}
              </div>

              {payment === 'card' ? (
                <div className="flex flex-col gap-4 rounded-xl bg-secondary/50 p-4">
                  <Field
                    id="cardNumber"
                    label="Card number"
                    inputMode="numeric"
                    placeholder="1234 5678 9012 3456"
                    autoComplete="cc-number"
                    required
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Field
                      id="cardExpiry"
                      label="Expiry"
                      placeholder="MM / YY"
                      autoComplete="cc-exp"
                      required
                    />
                    <Field
                      id="cardCvc"
                      label="CVC"
                      inputMode="numeric"
                      placeholder="123"
                      autoComplete="cc-csc"
                      required
                    />
                  </div>
                </div>
              ) : (
                <p className="rounded-xl bg-secondary/50 px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                  Pay in cash when your order arrives. Please have the exact amount
                  ready for the courier.
                </p>
              )}
            </fieldset>

            <Button type="submit" className="h-12 w-full rounded-full text-[15px]">
              Place Order
            </Button>
          </form>
        </Reveal>

        <Reveal immediate delay={0.1}>
          <CheckoutSummary />
        </Reveal>
      </div>
    </div>
  )
}
