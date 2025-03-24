import {Dialog} from 'radix-ui'
import {Cross2Icon} from '@radix-ui/react-icons'
import type {PropsWithChildren} from 'react'

type ModalProps = {
  title: string
  triggerText: string
}

export const Modal = ({
  children,
  triggerText,
  title,
}: PropsWithChildren<ModalProps>) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="inline-flex h-[35px] items-center justify-center rounded bg-teal-800 px-[15px] leading-none font-medium text-white outline-offset-1 outline-none select-none hover:bg-teal-950 focus-visible:outline-2 focus-visible:outline-teal-800">
        {triggerText}
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-neutral-700/70" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-neutral-100 p-[25px] shadow-[var(--shadow-6)] focus:outline-none">
        <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
          {title}
        </Dialog.Title>
        {children}
        <Dialog.Close asChild>
          <button
            className="text-violet11 bg-gray3 hover:bg-violet4 focus:shadow-violet7 absolute top-2.5 right-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)
