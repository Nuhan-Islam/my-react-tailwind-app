import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, Description, Field, Label, Select } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

function MyFieldset() {
    return (
        <div className="w-full max-w-md px-4 bg-gray-800 rounded-3xl p-4">
            <div className="absolute inset-[35%] block rounded-full bg-white/15 blur-2xl"></div>
            <Field>
                <Label className="text-sm/6 font-medium text-white">Project status</Label>
                <Description className="text-sm/6 text-white/50">This will be visible to clients on the project.</Description>
                <div className="relative">
                    <Select
                        className={clsx(
                            'mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white',
                            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25',
                            // Make the text of each option black on Windows
                            '*:text-black'
                        )}
                    >
                        <option value="active">Active</option>
                        <option value="paused">Paused</option>
                        <option value="delayed">Delayed</option>
                        <option value="canceled">Canceled</option>
                    </Select>
                    <ChevronDownIcon
                        className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                        aria-hidden="true"
                    />
                </div>
            </Field>
        </div>

    );
}

export default MyFieldset;