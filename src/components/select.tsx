import { useEffect, useState } from 'react'
import {
  Box,
  Select as SelectNB,
  ChevronDownIcon,
  Text,
  Center,
  FormControl,
  ISelectProps,
  IFormControlErrorMessageProps,
} from 'native-base'
import colors from 'tailwindcss/colors'

export interface Option {
  label: string
  value: string
}

type SelectProps = ISelectProps &
  IFormControlErrorMessageProps & {
    title: string
    options: Option[]
    value: string | null
    errorMessage?: string | null
  }

export function Select({
  title,
  options,
  value,
  errorMessage,
  isInvalid,
}: SelectProps) {
  const [service, setService] = useState('')

  const invalid = !!errorMessage || isInvalid

  useEffect(() => {
    setService(value || '')
  }, [value])

  return (
    <Center>
      <Box position="relative">
        <Text className="text-base font-semibold leading-short text-slate-300">
          {title}
        </Text>
        <FormControl isInvalid={invalid}>
          <SelectNB
            selectedValue={service}
            minWidth="full"
            dropdownIcon={<ChevronDownIcon size={0} />}
            onValueChange={(itemValue) => setService(itemValue)}
            zIndex={1}
            variant="unstyled"
            className="h-12 rounded-md border border-slate-700 bg-slate-800 px-3 py-3.5 font-body text-sm leading-short text-slate-100"
          >
            {options.map((option, index) => (
              <SelectNB.Item
                key={index}
                label={option.label}
                value={option.value}
              />
            ))}
          </SelectNB>
          <FormControl.ErrorMessage
            fontFamily="Nunito_400Regular"
            _text={{ fontSize: 14, color: colors.rose[400] }}
          >
            {errorMessage}
          </FormControl.ErrorMessage>
        </FormControl>
        <ChevronDownIcon
          size="4"
          position="absolute"
          color="white"
          right="4"
          zIndex={2}
          bottom="3.5"
        />
      </Box>
    </Center>
  )
}
