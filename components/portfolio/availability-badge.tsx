import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export function AvailabilityBadge({ className }: { className?: string }) {
  const { isAvailable, availableLabel, unavailableLabel } = siteConfig.availability
  return (
    <p className={cn('flex items-center gap-2.5 text-[12px] text-muted-foreground', className)}>
      <span aria-hidden className="relative flex size-2">
        {isAvailable && (
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-50 [animation-duration:2.4s]" />
        )}
        <span
          className={cn(
            'relative inline-flex size-2 rounded-full',
            isAvailable ? 'bg-signal' : 'bg-muted-foreground',
          )}
        />
      </span>
      {isAvailable ? availableLabel : unavailableLabel}
    </p>
  )
}
