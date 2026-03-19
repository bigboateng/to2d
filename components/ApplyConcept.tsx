'use client'

import { useState } from 'react'

type PromptMode = {
  title: string
  template: string
}

export type PromptSpec = {
  problem: PromptMode
  codebase: PromptMode
}

function buildPrompt(template: string, input: string) {
  return template.replace('{{input}}', input || '[DESCRIBE YOUR PROBLEM]')
}

export function ApplyConcept({ promptSpec }: { promptSpec: PromptSpec }) {
  const [mode, setMode] = useState<'idle' | 'problem' | 'codebase'>('idle')
  const [input, setInput] = useState('')
  const [copied, setCopied] = useState(false)

  const handleCopy = (template: string) => {
    const prompt = buildPrompt(template, input)
    navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => { setCopied(false) }, 2000)
  }

  const handleOpen = (next: 'problem' | 'codebase') => {
    if (mode === next) {
      setMode('idle')
      setInput('')
      setCopied(false)
      return
    }
    setMode(next)
    setInput('')
    setCopied(false)
  }

  const activeSpec = mode === 'problem' ? promptSpec.problem : mode === 'codebase' ? promptSpec.codebase : null

  return (
    <div className="border border-[#E8E8E6] bg-[#FAFAF8] dark:bg-[#0D0D0D]">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#E8E8E6]">
        <span className="text-[10px] font-mono tracking-[0.15em] text-[#8C8C8C] uppercase mr-auto">Apply this concept</span>
        <button
          onClick={() => { handleOpen('problem') }}
          className={`text-[13px] font-mono px-3 py-1.5 transition-colors ${
            mode === 'problem'
              ? 'bg-[#1A1A1A] text-[#F7F7F5]'
              : 'text-[#5A5A5A] hover:text-[#1A1A1A] border border-[#DADADA] hover:border-[#B5B5B5]'
          }`}
        >
          Problem Prompt
        </button>
        <button
          onClick={() => { handleOpen('codebase') }}
          className={`text-[13px] font-mono px-3 py-1.5 transition-colors ${
            mode === 'codebase'
              ? 'bg-[#1A1A1A] text-[#F7F7F5]'
              : 'text-[#5A5A5A] hover:text-[#1A1A1A] border border-[#DADADA] hover:border-[#B5B5B5]'
          }`}
        >
          Cursor Prompt
        </button>
      </div>

      {activeSpec && (
        <div className="p-4 space-y-3 animate-[fadeIn_150ms_ease-out]">
          <textarea
            value={input}
            onChange={(e) => { setInput(e.target.value) }}
            placeholder={mode === 'problem' ? 'Describe your problem...' : 'Describe your codebase task...'}
            rows={3}
            className="w-full text-sm font-mono bg-[#FFFFFF] dark:bg-[#111111] border border-[#DADADA] p-3 text-[#2A2A2A] dark:text-[#E8E8E6] placeholder:text-[#B5B5B5] resize-y focus:outline-none focus:border-[#8C8C8C] transition-colors"
          />
          <div className="flex items-center justify-between">
            <p className="text-[11px] text-[#8C8C8C] font-mono">
              {input.length > 0 ? 'Ready to copy' : 'Optional — leave empty for template'}
            </p>
            <button
              onClick={() => { handleCopy(activeSpec.template) }}
              className="text-[13px] font-mono px-4 py-1.5 bg-[#1A1A1A] text-[#F7F7F5] hover:bg-[#2A2A2A] transition-colors flex items-center gap-2"
            >
              {copied ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 7.5L5.5 10L11 4" />
                  </svg>
                  Copied
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="4.5" y="4.5" width="7" height="7" rx="1" />
                    <path d="M9.5 4.5V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5.5a1 1 0 0 0 1 1h1.5" />
                  </svg>
                  Copy Prompt
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
