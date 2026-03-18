'use client'

import { useState } from 'react'

export function PiModelToggle({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="mt-4">
      <button
        onClick={() => { setOpen(!open) }}
        className="group flex items-center gap-2 text-[13px] font-mono text-[#8C8C8C] transition-colors hover:text-[#2A2A2A]"
      >
        <span className="text-[15px] font-normal text-[#5A5A5A] group-hover:text-[#2A2A2A] transition-colors">π</span>
        <span className="border-b border-transparent group-hover:border-[#DADADA] transition-all">model</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={`transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
        >
          <path d="M4.5 2.5L7.5 6L4.5 9.5" />
        </svg>
      </button>

      {open && (
        <div className="mt-3 border border-[#E8E8E6] bg-[#FAFAF8] dark:bg-[#0D0D0D] p-4 space-y-3 animate-[fadeIn_150ms_ease-out]">
          <div className="flex items-center gap-2 pb-2 border-b border-[#E8E8E6]">
            <span className="text-[13px] font-mono text-[#8C8C8C]">π-model</span>
          </div>
          {children}
        </div>
      )}
    </div>
  )
}
